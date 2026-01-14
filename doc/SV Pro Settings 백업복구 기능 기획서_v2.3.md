# SV Pro Settings 백업/복구 기능 기획서

**문서 버전**: 2.3  
**작성일**: 2026-01-13  
**최종 수정일**: 2026-01-14

---

## 1. 목적

1. **다중 PC 설정 배포**: 동일한 설정을 여러 PC에 일괄 적용
2. **재설치/업그레이드 대비**: 설정 유지 및 복원
3. **에러 리포트 제출**: 에러 발생 시 본사에 설정 파일 제공

---

## 2. 범위

### 2.1 대상 설정
- **포함**: General, Display, Export, Print, HL7 설정
- **제외**: 
  - Assay Pack (assayList, assaySearch, showAddAssayModal, newAssay)
  - Backup/Restore 설정 (backupSettings)

### 2.2 저장소
- **원본**: SV Pro Database
- **Export**: 파일 형식 (민감정보 처리 포함)으로 폴더에 저장
- **Import**: 사용자 선택 파일을 읽어 DB에 반영

---

## 3. 권한

### 3.1 Export
- **권한**: User / Admin / Master 모두 가능
- **제한**: 없음

### 3.2 Import
- **기본**: Master only
- **확장**: 기능별 권한 설정에서 "설정파일 Import 기능" → Admin 허용 가능 (User는 불가)

---

## 4. 기능 및 정책

### 4.1 Export (3가지 방식, 동시 사용)

#### 4.1.1 Manual Export
- **실행**: "Backup Now" 버튼 클릭
- **저장 경로**: 사용자 지정 (File System Access API 사용, Windows 파일 저장 대화상자 표시)
- **파일명**: `settings_manual_YYYY-MM-DDTHH-mm-ss.json`
- **보관**: 사용자 관리 (앱에서 관리 안 함)
- **제약**: 저장되지 않은 변경사항이 있으면 경고 팝업 표시 후 차단
  - DB에 저장된 상태만 백업 가능
  - "저장되지 않은 변경사항이 있습니다. 설정을 먼저 저장한 후 백업을 진행해주세요." 팝업

#### 4.1.2 Auto Backup (On Save)
- **실행**: Settings 저장 시마다 자동 생성 (토글 없음, 항상 동작)
- **저장 경로**: `C:\SV Pro\Backups\Auto` (고정, 변경 불가)
- **파일명**: `settings_auto_YYYY-MM-DDTHH-mm-ss.json`
- **보관**: 최근 10개 유지, 초과 시 FIFO 삭제

#### 4.1.3 Scheduled Backup
- **실행**: 스케줄러가 주기에 따라 자동 실행
- **주기 옵션**:
  - **Daily**: 매일 00:00 (고정)
  - **Weekly**: 매주 선택한 요일 00:00 (Sunday~Saturday 선택 가능)
  - **Monthly**: 매월 선택한 날짜 00:00 (1~31일 선택 가능)
- **저장 경로**: `C:\SV Pro\Backups\Scheduled` (고정, 변경 불가)
- **파일명**: `settings_scheduled_YYYY-MM-DDTHH-mm-ss.json`
- **보관**: 최신 1개만 유지 (덮어쓰기 아님, 파일명에 타임스탬프 포함)



#### 4.2.1 데이터 기본 구조(예시)
```json
{
  "metadata": {
    "version": "1.0",
    "exportDate": "2026-01-13T15:30:00Z",
    "exportedBy": "current_user@example.com",
    "softwareVersion": "2.5.0",
    "description": "SV Pro Settings Manual Export",
    "exportType": "manual|auto_on_save|scheduled",
    "scheduleType": "daily|weekly|monthly",
    "scheduleDetail": "sunday|monday|...|1|2|..."
  },
  "settings": {
    // General, Display, Export, Print, HL7 설정
    // Assay Pack 제외
    // Backup/Restore 설정 제외
  }
}
```

#### 4.2.2 민감정보 처리(예시)
- **방식**: 부분 마스킹 (앞 3자리만 표시)
- **대상 필드**:
  - `hl7ServerIP`
  - `hl7ServerPort`
  - `openPcrDataFileFolderPath`
  - `openLimsFileFolderPath`
  - `exportFolderPath`
  - `saveFolderPath`
  - `saveWorkListFolderPath`
  - `logoFile`
  - `watermarkFile`
- **예시**: `192.168.1.100` → `192***********`

#### 4.2.3 특징(예시)
- 사람이 읽을 수 있는 형태 (JSON, 들여쓰기 적용)
- 외부 복사 허용

### 4.3 Import 정책

#### 4.3.1 두 가지 Restore 방법

**방법 1: Backup File List에서 복원**
- **트리거**: Auto Backup 파일 목록에서 특정 파일의 [복원] 버튼 클릭
- **특징**: Auto/Scheduled Backup으로 생성된 파일 중에서 선택
- **흐름**: 파일 선택 → Diff 모달 → 적용

**방법 2: Import - 파일 직접 불러오기**
- **트리거**: Restore 영역에서 [Select File] 버튼 클릭
- **특징**: 사용자가 임의의 위치에 저장된 백업 파일을 직접 선택
- **흐름**: 파일 선택 대화상자 → 파일 선택 → 중복 파일 확인 → Diff 모달 → 적용
- **중복 파일 감지**: 이전에 적용한 파일과 동일한 파일 선택 시 알림 표시 후 차단
  - 알림 메시지: "⚠️ 이미 적용된 파일입니다.\n다른 파일을 선택해주세요."
  - 파일 선택 시점에 즉시 파일명 저장하여 중복 감지
  - 파일 input onClick 이벤트에서 value 초기화로 같은 파일 재선택 가능


#### 4.3.2 덮어쓰기 방식
- **매칭되는 키만 덮어쓰기** (선택적 병합)
- 파일에만 존재하는 키: 스킵
- 앱에만 존재하는 키(신규): 기본값 유지
- 타입/검증 실패: 기본값 유지

#### 4.3.3 Diff/Confirm 팝업
- **표시 내용**:
  - Category (설정 카테고리)
  - Key (설정 키)
  - Current (현재 값)
  - Imported (파일 값)
  - Status (✓ 변경 / - 동일 / ✗ 스킵)
  - Reason (스킵 사유: 신규키, 타입 불일치, 검증 실패 등)
- **크기**: 1200px 너비
- **버튼**: Apply (settings state에 적용) / Cancel

### 4.4 Import UX

1. **파일 선택**: "Select File" 버튼 클릭
2. **중복 파일 확인**: 이전 적용 파일과 비교 (Import만 해당, Backup File List 복원은 제외)
   - 중복 시: 알림 표시 후 중단
   - 비중복 시: 진행
3. **파일 읽기**: JSON 파싱 및 검증
4. **Diff 생성**: 현재(settings state) vs 파일 비교
5. **Confirm 팝업**: 변경 사항 미리보기
6. **Apply**: 확인 시 settings state에 적용 (임시 적용)
   - 팝업 닫힘
   - Settings 화면에 "저장되지 않은 변경사항" 표시
6. **Save**: 사용자가 "저장" 버튼 클릭 시 DB에 최종 저장
   - Auto Backup 자동 실행
   - 분석 탭 영향 설정 변경 시 경고 팝업 표시

---

## 5. UI 설계

### 5.1 Backup/Restore 탭 구조

```
┌─────────────────────────────────────────────────────────────┐
│  💾 Backup                                                   │
├─────────────────────────────────────────────────────────────┤
│  Manual Backup                                              │
│  [📥 Backup Now]  Last backup: 2026-01-13 15:30:00        │
│  백업 버튼 클릭 시 파일 저장 위치를 선택할 수 있습니다.      │
│                                                             │
│  Scheduled Backup                                           │
│  Backup Interval: [Daily (00:00) ▼]                       │
│  (Weekly 선택 시: Day of Week: [Sunday ▼])                 │
│  (Monthly 선택 시: Day of Month: [1일 ▼])                  │
│  매일/매주/매월 00:00에 자동 백업됩니다.                    │
│  Last scheduled backup: 2026-01-13 09:00:00                │
│                                                             │
│  📋 Backup File List                                        │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Auto Backup (On Save)              최근 10개 보관   │  │
│  ├─────────────────────────────────────────────────────┤  │
│  │ 📄 settings_auto_2026-01-13T15-30-00.json          │  │
│  │    2026-01-13 15:30:00 · 24KB          [복원]      │  │
│  │ 📄 settings_auto_2026-01-13T14-45-00.json          │  │
│  │    2026-01-13 14:45:00 · 24KB          [복원]      │  │
│  │ ...                                                 │  │
│  └─────────────────────────────────────────────────────┘  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Scheduled Backup                     최신 1개 보관  │  │
│  ├─────────────────────────────────────────────────────┤  │
│  │ 📄 settings_scheduled_2026-01-13T09-00-00.json     │  │
│  │    2026-01-13 09:00:00 · 24KB          [복원]      │  │
│  └─────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│  📥 Restore                                                  │
├─────────────────────────────────────────────────────────────┤
│  Import Backup File                                         │
│  [📂 Select File]                                          │
│                                                             │
│  (User 권한일 경우: Scheduled Backup, Backup File List,    │
│   Restore 섹션 전체가 숨겨지고 Manual Backup만 표시됨)      │
└─────────────────────────────────────────────────────────────┘
```

### 5.2 Backup File List 기능
- **Auto Backup**: 최대 10개 파일 표시 (최신순)
- **Scheduled Backup**: 최신 1개 파일 표시
- **각 파일 항목**:
  - 파일명 (아이콘 포함)
  - 날짜/시간 및 파일 크기
  - **복원 버튼**: 해당 파일로 Import 실행
- **삭제 기능**: 없음 (자동 관리)

### 5.3 Diff/Confirm 팝업

```
┌──────────────────────────────────────────────────────────┐
│  📊 Import Changes Confirmation                          │
│  File: settings_auto_2026-01-13T14-45-00.json          │
├──────────────────────────────────────────────────────────┤
│  Category      Key           Current    File      Status │
│  ───────────────────────────────────────────────────────│
│  General      language       Korean     English   ✓     │
│  Display      resultView     Simple     Detail    ✓     │
│  Export       exportFormat   xlsx       csv       ✓     │
│  General      newSetting     (none)     value     ✗     │
│                              Reason: 신규 키 (스킵)      │
│  Print        logoFile       C:\...     C:\...    -     │
│  ...                                                     │
├──────────────────────────────────────────────────────────┤
│  Summary: 3 changes, 1 skipped, 10 unchanged            │
│                                      [Cancel] [Apply]    │
└──────────────────────────────────────────────────────────┘
```

---

## 6. 사용자 알림

### 6.1 Export
- **저장되지 않은 변경사항 경고**: 팝업 모달 (⚠️ 아이콘, 빨간색 제목)
  - "저장되지 않은 변경사항이 있습니다. 설정을 먼저 저장한 후 백업을 진행해주세요."
  - [확인] 버튼
- **성공**: "설정 파일이 성공적으로 저장되었습니다. 파일명: {fileName}" (사용자가 수동으로 닫기)
- **실패**: "설정 내보내기 중 오류가 발생했습니다: {error.message}" (사용자가 수동으로 닫기)

### 6.2 Import
- **중복 파일 선택**: "⚠️ 이미 적용된 파일입니다.\n다른 파일을 선택해주세요." (alert 팝업)
- **파일 선택**: Diff/Confirm 팝업 자동 표시
- **Apply 성공**: "설정이 적용되었습니다. {변경 수}개 항목이 업데이트됩니다. '저장' 버튼을 눌러 최종 저장하세요." (사용자가 수동으로 닫기)
- **Apply 실패**: "설정 가져오기 중 오류가 발생했습니다: {error.message}" (사용자가 수동으로 닫기)
- **Save 성공**: "설정 변경이 완료되었습니다." (사용자가 수동으로 닫기, 일반 저장과 동일)
- **User 권한 제약**: Backup/Restore 탭에서 Manual Backup만 표시
  - Scheduled Backup 숨김
  - Backup File List 숨김
  - Restore 섹션 전체 숨김

---

## 7. Hub 로그

### 7.1 목적
- 감사/추적을 Hub에서 수행
- SV Pro가 Hub로 이벤트 전송

### 7.2 Export 이벤트(예시)
```json
{
  "type": "manual_export|auto_export_on_save|scheduled_backup",
  "fileName": "settings_auto_2026-01-13T15-30-00.json",
  "path": "C:\\SV Pro\\Backups\\Auto",
  "timestamp": "2026-01-13T15:30:00Z",
  "user": "current_user@example.com",
  "scheduleType": "daily|weekly|monthly",
  "scheduleDetail": "sunday|1|..."
}
```

### 7.3 Import 이벤트(예시)
```json
{
  "type": "import",
  "fileName": "settings_auto_2026-01-13T14-45-00.json",
  "timestamp": "2026-01-13T15:35:00Z",
  "user": "current_user@example.com",
  "changedCount": 3,
  "skippedCount": 1,
  "unchangedCount": 10
}
```

**참고**: Import 이벤트는 Save 시점에 전송됩니다 (Apply 시점이 아님).

---

## 8. 기술 사양(예시)

### 8.1 파일 저장
- **Manual Backup**: File System Access API (showSaveFilePicker)
  - 브라우저 지원: Chrome, Edge 등
  - 폴백: 기존 다운로드 방식
- **Auto/Scheduled Backup**: 백엔드 API 호출
  - `POST /api/backup/auto`
  - `POST /api/backup/scheduled`

### 8.2 파일 목록 조회
- 백엔드 API에서 파일 목록 반환
- `GET /api/backup/files`
  - 응답: `{ autoBackupFiles: [...], scheduledBackupFile: {...} }`

### 8.3 복원 기능
- 백업 파일 목록에서 "복원" 버튼 클릭
- 해당 파일을 읽어 Import 플로우 실행
- Diff/Confirm 팝업 표시 → Apply (settings state에 적용) → Save (DB 저장)

---

## 9. 수용 기준 (Acceptance Criteria)

### 9.1 Export
- ✅ Manual, Auto, Scheduled 3방식 동시 동작
- ✅ Manual: 사용자가 저장 위치 선택 가능
- ✅ Auto: 저장 시마다 자동 생성, 최근 10개 유지 (FIFO)
- ✅ Scheduled: Daily/Weekly/Monthly 선택, 각각 상세 설정 가능, 최신 1개 유지
- ✅ 파일명에 타임스탬프 포함
- ✅ Assay Pack, Backup/Restore 설정 제외
- ✅ 민감정보 부분 마스킹 (앞 3자리)

### 9.2 Import
- ✅ Master 기본, 권한 설정으로 Admin 허용 가능
- ✅ User는 불가
- ✅ 두 가지 Restore 방법 (Backup File List / Import)
- ✅ Import 중복 파일 감지 및 알림
- ✅ Diff/Confirm 팝업 필수
- ✅ 보수적 호환 정책 (스킵 사유 표기)
- ✅ Apply 시 settings state에 적용 (임시)
- ✅ Save 버튼으로 DB에 최종 저장
- ✅ 저장되지 않은 변경사항 표시

### 9.3 UI
- ✅ Backup/Restore 탭 존재
- ✅ Manual Backup 버튼
- ✅ Scheduled Backup 주기 설정 (Weekly 요일, Monthly 날짜 선택)
- ✅ Backup File List 표시 (Auto 10개, Scheduled 1개)
- ✅ 각 파일에 복원 버튼

### 9.4 로그
- ✅ Hub 이벤트 전송 (콘솔 로그로 확인 가능)

### 9.5 사용자 알림
- ✅ 모든 성공/실패 메시지는 자동으로 사라지지 않음
- ✅ 사용자가 수동으로 닫기 버튼을 클릭하여 닫아야 함
- ✅ 중복 파일 선택 시 alert 팝업으로 즉시 알림


## 12. 변경 이력

| 버전 | 날짜 | 변경 내용 | 작성자 |
|------|------|-----------|--------|
| 1.0 | 2026-01-13 | 초안 작성 | - |
| 2.0 | 2026-01-13 | 구현 기준 업데이트: Manual Backup 사용자 지정, Scheduled 파일명 타임스탬프 포함, Backup File List 추가, 제외 항목 명시, Run Now 버튼 삭제, 삭제 버튼 제거 | - |
| 2.1 | 2026-01-14 | Import 플로우 변경: Apply → settings state 적용 (임시), Save → DB 저장 (최종) | - |
| 2.2 | 2026-01-14 | Export 제약 조건 추가: 저장되지 않은 변경사항 있을 시 경고 팝업 표시 후 차단 (DB에 저장된 상태만 백업) | - |
| 2.3 | 2026-01-14 | Import 중복 파일 감지 추가, Restore 두 가지 방법 명시 (Backup File List / Import), 알림 메시지 자동 사라짐 제거(수동 닫기)| - |
