# Settings 팝업 인터랙션 설계서

**문서 버전**: 1.1  
**작성일**: 2026-01-14  
**최종 수정일**: 2026-01-19  
**목적**: 기능 및 인터랙션 정의

---

## 1. 개요

### 1.1 화면 목적
SV Pro 소프트웨어의 전체 설정을 관리하는 모달 팝업입니다. 사용자는 일반 설정, 화면 표시, 데이터 내보내기, 인쇄, 백업/복구, Assay Pack 관리 등을 할 수 있습니다.

### 1.2 주요 특징
- **권한 기반 UI**: 사용자 권한(User/Admin/Master)에 따라 표시되는 탭과 설정이 다름
- **실시간 변경 추적**: 저장되지 않은 변경사항을 실시간으로 표시
- **스마트 경고**: 분석 탭에 영향을 주는 중요 설정 변경 시 경고 표시
- **자동 백업**: 설정 저장 시 자동으로 백업 파일 생성
- **Backup/Restore**: 설정을 파일로 내보내고 가져오기 (차이점 비교 기능 포함)

---

## 2. 화면 구조

### 2.1 전체 레이아웃

```
┌─────────────────────────────────────────────────────────┐
│  [헤더] Settings                                   [×]  │
├───────────┬─────────────────────────────────────────────┤
│           │                                             │
│  [탭]     │  [콘텐츠 영역]                              │
│           │                                             │
│  General  │  Header: 탭 제목 + 액션 버튼                │
│  Display  │  ─────────────────────────────────────────  │
│  Export   │                                             │
│  Print    │  Body: 설정 항목들 (스크롤 가능)            │
│  Assay    │                                             │
│  Backup   │                                             │
│           │                                             │
├───────────┴─────────────────────────────────────────────┤
│  [Footer] 상태 메시지                        [저장]     │
└─────────────────────────────────────────────────────────┘
```

### 2.2 영역별 설명

| 영역 | 내용 | 스크롤 |
|------|------|--------|
| 헤더 | 팝업 제목 및 닫기 버튼 | 고정 |
| 탭 영역 | 설정 카테고리 목록 (권한별 필터링) | 고정 (또는 스크롤) |
| 콘텐츠 헤더 | 현재 탭 제목 및 액션 버튼 | 고정 |
| 콘텐츠 본문 | 설정 항목들 | 스크롤 가능 |
| Footer | 저장 상태 표시 및 저장 버튼 | 고정 |

---

## 3. 권한별 탭 구성

### 3.1 전체 탭 목록

| 탭 ID | 탭 이름 | User | Admin | Master | 서브탭 |
|------|---------|------|-------|--------|--------|
| general | General | ✓ | ✓ | ✓ | Master만: 기능별 권한 설정 |
| display | Display Setting | ✓ | ✓ | ✓ | Master만: Target on/off, Developer Setting, Negative C(t) Value |
| export | Export | ✗ | ✓ | ✓ | Master만: HL7 Transfer Setting, HL7 Abbreviation Setting |
| print | Print | ✗ | ✓ | ✓ | 없음 |
| assay | Assay Pack | ✗ | ✗ | ✓ | 없음 |
| backup | Backup/Restore | ✓ | ✓ | ✓ | 없음 |

### 3.2 탭 표시 우선순위
1. General
2. Display Setting
3. Export (Admin, Master만)
4. Print (Admin, Master만)
5. Assay Pack (Master만)
6. Backup/Restore

---

## 4. 인터랙션 정의

### 4.1 팝업 열기/닫기

#### 열기
- **트리거**:
  1. **프로그램 설치 후 첫 실행 시**: Master 권한 사용자가 로그인한 경우 자동으로 Settings 팝업 표시
  2. **메인 화면에서 Settings 버튼 클릭**: 사용자가 수동으로 Settings 버튼을 클릭한 경우

- **동작**:
  1. 화면 중앙에 모달 팝업 표시
  2. 배경 오버레이 표시 (반투명)
  3. 현재 사용자 권한에 맞는 탭 목록 표시
  4. 첫 번째 탭 자동 선택 (일반적으로 General)
  5. 현재 설정값 로드

#### 닫기
- **트리거**: 우측 상단 [×] 버튼 클릭만 가능
- **동작**:
  1. 저장되지 않은 변경사항이 있는지 확인
  2. 변경사항 있음 → 경고 팝업 표시
  3. 변경사항 없음 → 즉시 팝업 닫기

### 4.2 탭 전환

#### 메인 탭 선택
- **트리거**: 좌측 탭 목록에서 탭 클릭
- **동작**:
  1. 선택된 탭 강조 표시
  2. 이전 탭 기본 상태로 복귀
  3. 콘텐츠 영역에 해당 탭 내용 표시
  4. 서브탭이 있으면 서브탭 목록 확장 (애니메이션)
  5. 콘텐츠 스크롤 위치 상단으로 리셋

#### 서브탭 선택
- **트리거**: 확장된 서브탭 목록에서 항목 클릭
- **동작**:
  1. 메인 탭은 확장된 상태 유지
  2. 선택된 서브탭 강조 표시
  3. 콘텐츠 영역에 서브탭 내용 표시

#### 주의사항
- 탭 전환 시 저장 경고 없음 (여러 탭의 변경사항을 한번에 저장 가능하도록)
- 서브탭이 없는 탭 선택 시 서브탭 목록 자동 축소

### 4.3 설정 변경

#### 일반적인 흐름
1. 사용자가 설정 항목 변경
2. Footer에 "저장되지 않은 변경사항" 표시
3. 저장 버튼 활성화

#### 입력 타입별 동작

**드롭다운**
- 클릭 → 옵션 목록 펼침
- 옵션 선택 → 값 변경 + 드롭다운 닫힘

**토글 스위치**
- 클릭 → 즉시 ON/OFF 전환 (애니메이션)

**라디오 버튼**
- 클릭 → 해당 옵션 선택 + 다른 옵션 선택 해제

**체크박스**
- 클릭 → 선택/해제 토글

**텍스트 입력(검색 기능에 포함)**
- 포커스 → 입력 가능 상태
- 입력 → 실시간 값 업데이트

**파일 경로 입력**
- 📂 버튼 클릭 → 파일 탐색기 열기
- 파일 선택 → 경로를 텍스트 입력 필드에 표시

### 4.4 저장

#### 저장 버튼 클릭
1. **필수 항목 검증**
   - 비어있는 필수 항목 확인
   - 문제 있음 → 경고 알림
   
2. **비즈니스 규칙 검증**
   - 예: CSV 포맷 + 특정 언어 → CSV Header Settings 필수
   - 예: Use Prefix ON → Prefix Type 필수
   - 문제 있음 → 경고 알림

3. **분석 탭 영향 확인**
   - 다음 설정 변경 시 경고:
     - PCR Raw Data Type
     - GDPR 모드
     - Sample ID
     - Result View
     - C(t) Value Digit
     - Sample Index Setting
     - Target on/off
   - 변경됨 → "분석 탭 닫힘 경고" 팝업 표시

4. **저장 실행**
   - DB에 설정 저장
   - 자동 백업 파일 생성
   - Footer에 "설정 변경이 완료되었습니다" 표시
   - 저장 버튼 비활성화
   - "저장되지 않은 변경사항" 메시지 제거

### 4.5 검색

#### Target on/off 검색 (Display > Target on/off 서브탭)
- **입력**: 검색창에 텍스트 입력
- **동작**: 입력 즉시 Assay 목록 필터링 (실시간)
- **범위**: Assay Name
- **대소문자**: 구분 없음
- **일치**: 부분 일치

#### Assay Pack 검색 (Assay Pack 탭)
- **입력**: 검색창에 텍스트 입력
- **동작**: 입력 즉시 목록 필터링 (실시간)
- **범위**: Assay Name, 제조사
- **대소문자**: 구분 없음
- **일치**: 부분 일치

#### HL7 Abbreviation 검색 (Export > HL7 Abbreviation 서브탭)
- **입력**: 검색창에 텍스트 입력
- **동작**: 입력 즉시 Assay 목록 필터링
- **범위**: Assay Name
- **대소문자**: 구분 없음
- **일치**: 부분 일치

---

## 5. 경고 팝업 상세

### 5.1 분석 탭 닫힘 경고

**트리거**: 분석 탭에 영향을 주는 설정 변경 후 저장 시

**표시 내용**:
```
[아이콘] 분석 탭 닫힘 안내

변경된 설정을 적용하면 현재 열려있는
모든 분석 탭이 닫힙니다.

변경된 설정 항목:
• [변경된 항목 1]
• [변경된 항목 2]
...

[취소] [확인 후 저장]
```

**버튼 동작**:
- **취소**: 팝업 닫기, 저장 취소
- **확인 후 저장**: 팝업 닫기 → 분석 탭 닫기 → 설정 저장 → 성공 메시지 표시

### 5.2 저장되지 않은 변경사항 경고

**트리거**: 
- 팝업 닫기 시도 (×)
- Export 시도 시

**표시 내용**:
```
[아이콘] 저장되지 않은 변경사항

저장되지 않은 변경사항이 있습니다.
저장하지 않고 진행하면 변경 내용이 사라집니다.

[취소] [저장 안 함]
```

**버튼 동작**:
- **취소**: 팝업 닫기, 작업 취소
- **저장 안 함**: 경고 팝업 닫기 → 변경사항 무시 → 원래 작업 진행

### 5.3 Assay Pack 삭제 확인

**트리거**: Assay Pack 목록에서 삭제 버튼 클릭

**표시 내용**:
```
[아이콘] Assay Pack 삭제

선택한 Assay Pack을 삭제하시겠습니까?

Assay Name: [선택된 Assay 이름]

[취소] [삭제]
```

**버튼 동작**:
- **취소**: 팝업 닫기
- **삭제**: 목록에서 Assay 제거

**참고**: Assay Pack 삭제는 독립적으로 동작하며 Settings의 "저장되지 않은 변경사항"에 영향을 주지 않음

### 5.4 필수 항목 미입력 경고

**트리거**: 필수 항목이 비어있는 상태에서 저장 또는 추가 시도

**표시 내용**:
```
[아이콘] 필수 항목 미입력

다음 필수 항목을 입력해주세요:
• [필수 항목 1]
• [필수 항목 2]

[확인]
```

**버튼 동작**:
- **확인**: 팝업 닫기 → 해당 탭/필드로 포커스 이동 (가능한 경우)

---

## 6. Backup/Restore 기능

### 6.1 Manual Export (수동 백업)

**트리거**: Backup/Restore 탭에서 [Manual Export] 버튼 클릭

**동작 흐름**:
1. 저장되지 않은 변경사항 확인
   - 있음 → 경고 팝업 표시 후 중단
   - 없음 → 진행
2. Windows 파일 저장 대화상자 열기
   - 기본 파일명: `settings_manual_[timestamp].json`
   - 파일 형식: JSON
3. 사용자가 저장 위치 선택
4. 파일 저장 (Assay Pack 제외, 민감정보 마스킹)
5. 성공 메시지 표시
6. 마지막 백업 시간 업데이트

**취소 가능 시점**: 파일 저장 대화상자에서 취소 선택 시

### 6.2 Auto Backup (자동 백업)

**트리거**: 저장 버튼 클릭 → 저장 완료 시 자동 실행

**동작**:
1. 백업 파일 생성
   - 파일명: `[timestamp]_settings_auto.json` (예: `2026-01-13T15-30_settings_auto.json`)
   - 저장 위치: 설정된 Auto Backup 경로
   - 내용: Assay Pack 제외, 민감정보 마스킹
2. 백업 파일 목록에 추가
3. 설정된 보관 개수 초과 시 오래된 파일 자동 삭제
4. 마지막 자동 백업 시간 업데이트

**사용자 알림**: 없음 (백그라운드 동작)

### 6.3 Restore (복구) - 두 가지 방법

Restore는 두 가지 방법으로 수행할 수 있습니다:

#### 방법 1: Backup File List에서 복원

**트리거**: Auto Backup 파일 목록에서 특정 파일의 [복원] 버튼 클릭

**동작 흐름**:
2. 선택된 백업 파일 읽기

3. 파일 유효성 검증
   - JSON 형식 확인
   - 필수 필드 존재 확인
   - 타입 일치 확인
   - 문제 있음 → 오류 메시지 표시 후 중단

4. **Diff 확인 모달 표시**
   - 현재 설정과 파일 설정 비교
   - 변경사항 테이블 표시:
     - Category (카테고리)
     - Key (설정 키)
     - Current (현재 값)
     - File (파일 값)
     - Status (상태: 변경/동일/스킵)
     - Reason (스킵 이유)
   - 하단 요약: N개 적용 | M개 스킵 | K개 변경 없음

5. 사용자 선택:
   - **취소**: Diff 모달 닫기, 작업 취소
   - **적용하기**: 
     - Status가 "변경"인 항목만 현재 설정에 반영
     - "저장되지 않은 변경사항" 표시
     - Restore 성공 메시지 표시
     - Pending 상태로 저장 (실제 저장은 [저장] 버튼 클릭 시)

#### 방법 2: Import - 파일 직접 불러오기

**트리거**: Restore 영역에서 [Import] 버튼 클릭

**동작 흐름**:
1. Windows 파일 열기 대화상자 표시
   - 파일 형식: JSON
   - 사용자가 임의의 위치에서 백업 파일 선택 가능
   
2. 사용자가 파일 선택 후 열기

3. 파일 유효성 검증
   - JSON 형식 확인
   - 필수 필드 존재 확인
   - 타입 일치 확인
   - 문제 있음 → 오류 메시지 표시 후 중단

4. **Diff 생성 및 필터링**
   - 현재 설정과 파일 비교
   - "동일" 상태 항목 제외 ("변경"과 "스킵"만 필터링)
   - 변경/스킵 항목 존재 → **Diff 확인 모달 표시**
   - 변경/스킵 항목 없음 (모두 동일) → "동일한 설정 내용입니다" alert 팝업 표시 후 종료

5. **Diff 확인 모달에서 사용자 선택** (방법 1과 동일)

**Diff 상태 설명**:
- **변경**: 현재 값과 파일 값이 다름 → 적용됨
- **스킵**: 타입 불일치, 존재하지 않는 키 등 → 적용 안 됨
- **동일**: 현재 값과 파일 값이 같음 → Diff 모달에 표시 안 함

**두 방법의 차이점**:
- **방법 1 (파일 목록에서 복원)**: Auto Backup/Scheduled Backup 으로 생성된 파일 중에서 선택
- **방법 2 (Import)**: 사용자가 임의의 위치에 저장된 백업 파일을 직접 선택

---

## 7. 특수 UI 동작

### 7.1 Data Loading Methods (다중 선택 제약)

**UI**: 다중 선택 버튼 그룹 (Manual, Preset, LIMS, CSV, Barcode)

**제약 조건**:
1. **LIMS와 CSV 상호 배타적**
   - LIMS 선택 → CSV 비활성화
   - CSV 선택 → LIMS 비활성화

2. **Barcode 단독 선택 불가**
   - Barcode만 선택 → 경고 메시지 + 선택 취소
   - 다른 방식이 하나라도 선택되어야 Barcode 선택 가능

**사용자 안내**:
- 정보 아이콘(ℹ️) 표시
- Hover 시 툴팁으로 규칙 설명

### 7.2 조건부 표시 항목

**일반 패턴**:
- 특정 설정이 활성화되면 하위 항목 표시
- 비활성화되면 하위 항목 숨김
- **모든 하위 노출 항목은 디폴트값 없음**
- **하위 항목이 표시되면 반드시 선택해야 저장 가능**

**조건부 노출 항목 목록**:

| 부모 설정 | 조건 | 하위 노출 항목 | 탭 | 디폴트값 | 필수 여부 |
|----------|------|----------------|-----|----------|----------|
| Export Format = CSV + 특정 언어* | AND 조건 | CSV Header Settings | General | 없음 | 필수 |
| Loading Methods | LIMS(.plrn) 또는 Barcode 선택 | Sample ID | General | 없음 | 필수 |
| Loading Methods | CSV 선택 | Plate Setting | General | 없음 | 필수 (최소 1개) |
| Loading Methods | CSV 선택 | csv File Open Option(Sample Barcode) | General | 없음 | 필수 |
| Loading Methods | LIMS(.plrn) 선택 | plrn File Open Option(Barcode, Name) | General | 없음 | 선택 사항 (Barcode와 Name 각각 선택) |
| Use Prefix | ON | Prefix Type | Export | 없음 | 필수 |
| Create New Folder | ON | Folder Name Type | Export | 없음 | 필수 |
| Add Logo to Print | ON | Logo Print Location | Print | 없음 | 필수 |
| Add Watermark to Print | ON | Watermark Layout | Print | 없음 | 필수 |
| Scheduled Interval | Weekly | 요일 선택 | Backup/Restore | 없음 | 필수 |
| Scheduled Interval | Monthly | 날짜 선택 (1-31) | Backup/Restore | 없음 | 필수 |

*특정 언어: et, fr, de, it, lv, lt, pt, es, tr

**예시**:

**1) Use Prefix ON → Prefix Type 표시 (필수 선택)**
```
Use Prefix: [ON]
  └ Prefix Type: [선택하세요 ▼]  ← 디폴트값 없음, 반드시 선택
```

**2) Add Logo to Print ON → Logo Print Location 표시 (필수 선택)**
```
Add Logo to Print: [ON]
  └ Logo Print Location: [선택하세요]  ← 디폴트값 없음, 반드시 선택
```

**3) Add Watermark to Print ON → Watermark Layout 표시 (필수 선택)**
```
Add Watermark to Print: [ON]
  └ Watermark Layout: [선택하세요]  ← 디폴트값 없음, 반드시 선택 + 강조
```

**저장 시 검증**:
- 하위 항목이 표시되어 있는데 선택되지 않은 경우
- 경고 팝업 표시: "⚠️ [항목명]을/를 선택해주세요."
- 해당 탭으로 자동 이동(가능한 경우)
- 해당 필드에 포커스 (가능한 경우)

**시각적 표현**:
- 들여쓰기로 계층 관계 표현
- 선택되지 않은 필수 항목은 플레이스홀더 텍스트 표시 ("선택하세요")

### 7.3 GDPR 모드 (General 탭)

**위치**: PCR Raw Data Type과 타겟 약어 사용 사이

**권한**: Master만 접근 가능

**UI**: 토글 스위치 (ON/OFF)

**디폴트값**: OFF

**GDPR 모드 ON 시 동작**:

1. **csv File Open Option(Sample Barcode) 옵션 변경**
   - GDPR OFF: No, Sample Id, Name
   - GDPR ON: No, Sample Id (Name 옵션 숨김)

2. **plrn File Open Option(Barcode, Name) 옵션 변경**
   - GDPR OFF: 
     - Barcode: No, Sample Id, Name
     - Name: No, Sample Id, Name
   - GDPR ON:
     - Barcode: No, Sample Id (Name 옵션 숨김)
     - Name: No, Sample Id (Name 옵션 숨김)

3. **기능별 권한 설정 (General > 기능별 권한 설정 서브탭)**
   - "GDPR 관련기능" 항목 활성화
   - GDPR 모드 OFF 시: 회색 표시 + "(GDPR 모드 OFF)" 라벨, 체크박스 비활성화
   - GDPR 모드 ON 시: 정상 표시, Admin/User 권한 설정 가능

4. **분석 탭 닫기**
   - GDPR 모드 변경 후 저장 시 "분석 탭 닫힘 경고" 팝업 표시
   - 변경된 설정 항목에 "GDPR 모드" 표시

**참고**: GDPR 모드는 개인정보(Name) 관련 옵션을 제한하여 GDPR 규정 준수를 지원

### 7.4 Target On/Off (Display Setting 서브탭)

**레이아웃**: 상하 2행

```
┌─────────────────────────────────────────────┐
│ [Assay 목록]                                │
│                                             │
├─────────────────────────────────────────────┤
│ [Target 목록]                               │
│ Target 1  [ON/OFF]                          │
│ Target 2  [ON/OFF]                          │
│ Target 3  [ON/OFF]                          │
│                                             │
└─────────────────────────────────────────────┘
```

**상단: Assay 목록**
- 검색 가능 (상단 검색창)
- 클릭 시 선택 상태 표시
- 선택된 Assay의 Target 목록을 하단에 표시
- 각 Assay는 Target 개수 표시 (옵션)

**하단: Target 목록**
- 선택된 Assay가 없으면 안내 메시지 표시
- 선택된 Assay의 모든 Target 표시
- 각 Target마다 토글 스위치 (ON/OFF)
- 하단 버튼:
  - **전체 OFF**: 현재 Assay의 모든 Target OFF
  - **전체 ON**: 현재 Assay의 모든 Target ON

**중요**:
- 저장 시 "분석 탭 닫힘 경고" 표시

### 7.5 HL7 Abbreviation Setting (Export 서브탭)

**레이아웃**: 상하 2행

```
┌─────────────────────────────────────────────┐
│ [Assay 목록] (ASSAY CODE 편집)              │
│ ASSAY NAME | INTENDED USE | ASSAY CODE     │
│                                             │
├─────────────────────────────────────────────┤
│ [Target 목록] (TARGET CODE 편집)            │
│ CHANNEL | DYE | TARGET | TARGET CODE       │
│                                             │
└─────────────────────────────────────────────┘
```

**상단: Assay 목록**
- 검색 가능 (상단 검색창)
- 테이블 형식:
  - ASSAY NAME (읽기 전용)
  - INTENDED USE (배지, 읽기 전용)
  - ASSAY CODE (편집 가능 텍스트 입력)
- 행 클릭 시 선택 → 하단에 Target 목록 표시

**하단: Target 목록**
- 선택된 Assay가 없으면 안내 메시지 표시
- 테이블 형식:
  - CHANNEL (읽기 전용)
  - DYE (배지, 읽기 전용)
  - TARGET (읽기 전용)
  - TARGET CODE (편집 가능 텍스트 입력)

**편집 동작**:
- ASSAY CODE / TARGET CODE 셀 클릭 → 텍스트 입력 모드
- 입력 후 다른 곳 클릭 → 값 저장
- 변경 시 "저장되지 않은 변경사항" 표시

### 7.5 Assay Pack 관리

**목록 표시**:
- 테이블 형식:
  - Assay Name
  - Intended Use (배지)
  - Version
  - 제조사
  - Install Date
  - 삭제 버튼

**검색**:
- 상단 검색창으로 필터링
- 검색 범위: Assay Name, 제조사

**추가**:
1. 우측 상단 [➕ Assay Pack 추가] 버튼 클릭

**삭제**:
1. 목록에서 삭제 버튼 클릭
2. 삭제 확인 팝업 표시
3. 확인 시 서버에 즉시 반영 → 목록에서 제거

**중요**: 
- Assay Pack 추가/삭제는 즉시 적용되며 독립적으로 동작
- Settings의 "저장되지 않은 변경사항" 표시 및 저장 버튼 활성화에 영향을 주지 않음
- Settings 저장 버튼을 누르지 않아도 Assay Pack 변경사항은 이미 적용된 상태

---

## 8. 키보드 네비게이션(미정)

### 8.1 전역 단축키

| 키 | 동작 |
|-----|------|
| Tab | 다음 요소로 포커스 이동 |
| Shift + Tab | 이전 요소로 포커스 이동 |
| Enter | 버튼 클릭, 선택 확인 |

### 8.2 입력 필드

| 요소 | 키 | 동작 |
|------|-----|------|
| 텍스트 입력 | Enter | 다음 필드로 포커스 이동 (또는 저장) |
| 드롭다운 | 화살표 위/아래 | 옵션 선택 (미정) |
| 라디오 버튼 | 화살표 좌/우 | 다음/이전 옵션 선택 (미정) |
| 검색창 | ESC | 검색어 지우기 |

### 8.3 테이블

| 키 | 동작 |
|-----|------|
| 화살표 위/아래 | 행 선택 이동 (미정) |
| Enter | 행 선택 또는 편집 모드 진입 (미정) |

**참고**: 화살표 키 네비게이션은 향후 구현 예정

---

## 9. 상태 표시

### 9.1 저장 상태

| 상태 | 표시 위치 | 메시지 | 지속 시간 |
|------|-----------|--------|-----------|
| 변경 없음 | Footer | (메시지 없음) | - |
| 변경됨 | Footer | ● 저장되지 않은 변경사항 | 계속 표시 |
| 저장 완료 | Footer | ✓ 설정 변경이 완료되었습니다 | 3초 |

### 9.2 백업 상태

| 동작 | 표시 메시지 | 지속 시간 |
|------|-------------|-----------|
| Manual Export 성공 | ✅ 설정 파일이 성공적으로 저장되었습니다<br/>파일명: [파일명] | 사용자 확인 시까지 (수동 닫기) |
| Import 성공 | ✅ Import 성공!<br/>N개 항목이 변경되었습니다.<br/>저장 버튼을 눌러 적용하세요. | 사용자 확인 시까지 |
| Export 실패 | ❌ 설정 내보내기 중 오류가 발생했습니다:<br/>[오류 메시지] | 사용자 확인 시까지 |
| Import 실패 | ❌ 파일을 가져올 수 없습니다:<br/>[오류 메시지] | 사용자 확인 시까지 |

### 9.3 버튼 상태

| 요소 | 상태 | 조건 |
|------|------|------|
| 저장 버튼 | 비활성 | 저장되지 않은 변경사항 없음 |
| 저장 버튼 | 활성 | 저장되지 않은 변경사항 있음 |
| Diff 모달 적용 버튼 | 비활성 | 적용 가능한 변경사항 없음 (모두 동일 또는 스킵) |

---

## 10. 유효성 검증

### 10.1 필수 입력 검증

**시점**: 저장 버튼 클릭 시

**원칙**: 
- 일반 설정 항목: 드롭다운/라디오 버튼 등은 디폴트값으로 자동 선택됨
- 조건부 노출 항목만 선택 필수 (디폴트값 없음)

**디폴트값 적용 항목(디폴트 값 미정)**:

- **General 탭**:
  - Language  
  - PCR Raw Data Type  
  - GDPR 모드 (디폴트: OFF, Master만)
  - Data Loading Methods (디폴트: 첫 번째 옵션 체크)
  - 폴더 경로 설정들 (선택)

- **Display Setting 탭**:
  - Result View  
  - Well Table  
  - Result Display  
  - C(t) Value Digit  
  - Sample Index Setting  
  - Display positive when IC negative (디폴트: false)
  - Invalidate when PC/NC invalid (디폴트: false)

- **Export 탭**:
  - Sample to Export  
  - Export Format  
  - Target Alignment Method  
  - HL7 Version  
  - HL7 Sample to Export  
  - HL7 Transfer Protocol  
  - HL7 Transfer Method  

- **Print 탭**:
  - Print Range  

- **Backup/Restore 탭**:
  - Scheduled Interval  

**조건부 필수 항목** (디폴트값 없음, 선택 필수):
- CSV Header Settings (CSV + 특정 언어)
- Sample ID (LIMS/Barcode 선택 시)
- Plate Setting (CSV 선택 시)
- csv File Open Option(Sample Barcode) (CSV 선택 시) - 옵션: No, Sample Id, Name
- plrn File Open Option(Barcode, Name) (LIMS(.plrn) 선택 시)
  - Barcode: No, Sample Id, Name 중 선택
  - Name: No, Sample Id, Name 중 선택
  - 제약: Barcode와 Name은 같은 옵션(No 제외) 선택 불가
- Prefix Type (Use Prefix ON)
- Folder Name Type (Create New Folder ON)
- Logo Print Location (Add Logo ON)
- Watermark Layout (Add Watermark ON)
- Scheduled Weekday (Weekly)
- Scheduled Month Day (Monthly)

**검증 실패 시**:
1. 경고 팝업 표시: "⚠️ [항목명]을/를 선택해주세요."
2. 해당 탭으로 자동 이동
3. (가능하면) 해당 필드에 포커스

### 10.2 비즈니스 규칙 검증

**시점**: 
- 입력 즉시 (일부 규칙)
- 저장 버튼 클릭 시 (전체 규칙)

**규칙 예시**:

1. **LIMS와 CSV 상호 배타적**
   - 검증 시점: 선택 시도 시
   - 동작: 다른 옵션 자동 비활성화 (버튼 비활성 상태로 표시)

2. **Barcode 단독 선택 불가**
   - 검증 시점: 선택/해제 시도 시
   - 동작: 선택 취소 + 경고 메시지

3. **CSV 포맷 + 특정 언어 → CSV Header Settings 필수**
   - 검증 시점: 저장 시
   - 대상 언어: et, fr, de, it, lv, lt, pt, es, tr
   - 조건: CSV Header Settings가 선택되지 않은 경우
   - 동작: 경고 팝업 + General 탭으로 이동

4. **LIMS(.plrn) 또는 Barcode 선택 → Sample ID 필수**
   - 검증 시점: 저장 시
   - 조건: Sample ID가 선택되지 않은 경우 (빈 값)
   - 동작: 경고 팝업 "⚠️ LIMS(.plrn) 또는 바코드로 불러오기가 선택되어 있습니다.\nSample ID를 선택해주세요." + General 탭으로 이동

5. **CSV 선택 → Plate Setting 필수**
   - 검증 시점: 저장 시
   - 조건: Manual과 Preset 둘 다 선택되지 않은 경우
   - 동작: 경고 팝업 "⚠️ CSV 불러오기가 선택되어 있습니다.\nPlate Setting (Manual 또는 Preset 중 최소 하나)을 선택해주세요." + General 탭으로 이동

6. **CSV 선택 → CSV File Open Option 필수**
   - 검증 시점: 저장 시
   - 조건: CSV File Open Option이 선택되지 않은 경우 (빈 값)
   - 동작: 경고 팝업 "⚠️ CSV 불러오기가 선택되어 있습니다.\nCSV File Open Option을 선택해주세요." + General 탭으로 이동

7. **Use Prefix ON → Prefix Type 필수**
   - 검증 시점: 저장 시
   - 조건: Prefix Type이 선택되지 않은 경우 (빈 값)
   - 동작: 경고 팝업 "⚠️ Prefix Type을 선택해주세요." + Export 탭으로 이동

8. **Create New Folder ON → Folder Name Type 필수**
   - 검증 시점: 저장 시
   - 조건: Folder Name Type이 선택되지 않은 경우 (빈 값)
   - 동작: 경고 팝업 "⚠️ Folder Name Type을 선택해주세요." + Export 탭으로 이동

9. **Add Logo to Print ON → Logo Print Location 필수**
   - 검증 시점: 저장 시
   - 조건: Logo Print Location이 선택되지 않은 경우 (빈 값)
   - 동작: 경고 팝업 "⚠️ Logo Print Location을 선택해주세요." + Print 탭으로 이동

10. **Add Watermark to Print ON → Watermark Layout 필수**
    - 검증 시점: 저장 시
    - 조건: Watermark Layout이 선택되지 않은 경우 (빈 값)
    - 동작: 경고 팝업 "⚠️ Watermark Layout을 선택해주세요." + Print 탭으로 이동

11. **Scheduled Interval = Weekly → 요일 선택 필수**
    - 검증 시점: 저장 시
    - 조건: 요일이 선택되지 않은 경우 (빈 값)
    - 동작: 경고 팝업 "⚠️ 백업 요일을 선택해주세요." + Backup/Restore 탭으로 이동

12. **Scheduled Interval = Monthly → 날짜 선택 필수**
    - 검증 시점: 저장 시
    - 조건: 날짜가 선택되지 않은 경우 (빈 값)
    - 동작: 경고 팝업 "⚠️ 백업 날짜를 선택해주세요." + Backup/Restore 탭으로 이동

### 10.3 형식 검증(미정)

**텍스트 입력 필드**:
- Server IP: IPv4 형식 (예: 192.168.0.1)
- Server Port: 숫자, 1-65535 범위
- Response Timeout: 숫자, 밀리초 단위
- Version: 버전 형식 (미정, 예: 1.0.0)

**날짜 입력**:
- Install Date: YYYY-MM-DD 형식

**검증 실패 시**:
- 입력 필드 아래 또는 옆에 오류 메시지 표시
- 입력 필드 강조 표시

---

## 11. 특수 기능

### 11.1 민감정보 마스킹(미정)

**대상**: Export 시

**마스킹 필드**:
- hl7ServerIP
- hl7ServerPort
- openPcrDataFileFolderPath
- openLimsFileFolderPath
- exportFolderPath
- saveFolderPath
- saveWorkListFolderPath
- logoFile
- watermarkFile

**마스킹 방식**:
- 문자열 길이 > 3: 앞 3자리만 보이고 나머지 `*` 처리
- 문자열 길이 ≤ 3: 전체 `*` 처리
- 예: `C:\Program Files\App` → `C:\************`

### 11.2 Assay Pack 제외

**대상**: Backup 시
**이유**: Assay Pack은 별도 관리, 설정 파일에 포함 안 함

### 11.3 Hub 로그 전송(미정)

**이벤트**:
- Manual Export 성공
- Auto Backup 성공
- Import 성공 (실제 저장 시)

**로그 내용**:
- type: 'manual_export' | 'auto_backup' | 'import'
- fileName: 파일명
- timestamp: ISO 8601 형식
- user: 현재 사용자 ID
- changedCount: 변경된 항목 개수 (Import만)
- skippedCount: 스킵된 항목 개수 (Import만)

---


## 13. 권한별 설정 항목 접근 제어

### 13.1 General 탭

| 설정 항목 | User | Admin | Master |
|----------|------|-------|--------|
| Language | ✓ | ✓ | ✓ |
| PCR Raw Data Type | ✓ | ✓ | ✓ |
| CSV Header Settings | ✓ | ✓ | ✓ |
| Data Loading Methods | ✓ | ✓ | ✓ |
| Plate Barcode | ✓ | ✓ | ✓ |
| Plate Setting File | ✓ | ✓ | ✓ |
| CSV File Open Option | ✓ | ✓ | ✓ |
| Sample ID | ✓ | ✓ | ✓ |
| Target Abbreviation | ✓ | ✓ | ✓ |
| 폴더 경로 설정들 | ✓ | ✓ | ✓ |

### 13.2 Display Setting 탭

| 설정 항목 | User | Admin | Master |
|----------|------|-------|--------|
| Result View | ✓ | ✓ | ✓ |
| Well Table | ✓ | ✓ | ✓ |
| Result Display | ✓ | ✓ | ✓ |
| C(t) Value Digit | ✓ | ✓ | ✓ |
| Sample Index Setting | ✗ | ✓ | ✓ |
| Display positive when IC negative | ✗ | ✓ | ✓ |
| Invalidate when PC/NC invalid | ✗ | ✗ | ✓ |
| Target on/off 서브탭 | ✗ | ✗ | ✓ |
| Developer Setting 서브탭 | ✗ | ✗ | ✓ |
| Negative C(t) Value 서브탭 | ✗ | ✗ | ✓ |

### 13.3 Export 탭

| 설정 항목 | User | Admin | Master |
|----------|------|-------|--------|
| 전체 탭 | ✗ | ✓ | ✓ |
| HL7 Transfer Setting 서브탭 | ✗ | ✓ | ✓ |
| HL7 Abbreviation Setting 서브탭 | ✗ | ✗ | ✓ |
| 기타 Export 설정 | ✗ | ✓ | ✓ |

### 13.4 Print 탭

| 설정 항목 | User | Admin | Master |
|----------|------|-------|--------|
| 전체 탭 | ✗ | ✓ | ✓ |

### 13.5 Assay Pack 탭

| 설정 항목 | User | Admin | Master |
|----------|------|-------|--------|
| 전체 탭 | ✗ | ✗ | ✓ |

### 13.6 Backup/Restore 탭

| 기능 | User | Admin | Master | 설명 |
|------|------|-------|--------|------|
| Manual Export (수동 백업) | ✓ | ✓ | ✓ | 저장되지 않은 변경사항 있으면 경고 후 차단 |
| Scheduled Backup 설정 | ✗ | ✓ | ✓ | Daily/Weekly/Monthly 선택 및 상세 설정 |
| Backup File List (자동 백업 목록) | ✗ | ✓ | ✓ | Auto Backup 최대 10개, Scheduled Backup 최신 1개 표시 |
| 파일 복원 버튼 | ✗ | ✓ | ✓ | Backup File List에서 특정 파일 복원 |
| Import (파일 직접 불러오기) | ✗ | ✓ | ✓ | 임의 위치의 백업 파일 선택, 중복 파일 감지 |

**User 권한 제한사항**:
- Manual Export만 사용 가능
- Scheduled Backup 설정 영역 숨김
- Backup File List 전체 숨김
- Restore (Import) 섹션 전체 숨김

**Admin(기능별 권한 설정에 권한을 부여한다면)/Master 권한**:
- 모든 백업/복구 기능 사용 가능
- Scheduled Backup: 주기 설정 가능 (Daily/Weekly/Monthly)
- Import: 중복 파일 감지 및 Diff 확인 모달 표시

---

## 14. 에러 처리

### 14.1 파일 작업 오류

**상황**:
- Export 시 파일 쓰기 실패
- Import 시 파일 읽기 실패
- 파일 형식 오류
- 파일 권한 오류

**동작**:
1. 오류 팝업 표시
2. 오류 메시지 설명 (가능한 한 구체적으로)
3. [확인] 버튼으로 닫기

### 14.2 유효성 검증 오류

**상황**:
- 필수 항목 미입력
- 형식 불일치
- 비즈니스 규칙 위반

**동작**:
1. 경고 팝업 표시
2. 문제 항목 설명
3. 해당 탭/필드로 이동
4. [확인] 버튼으로 닫기

---

## 15. 워크플로우 다이어그램

### 15.1 설정 변경 및 저장 플로우

```
사용자 설정 변경
    ↓
내부 상태 업데이트
    ↓
"저장되지 않은 변경사항" 표시
    ↓
사용자 [저장] 클릭
    ↓
필수 항목 검증 ────→ 실패 → 경고 표시 → 해당 탭으로 이동(옵션)
    ↓ 통과
비즈니스 규칙 검증 ────→ 실패 → 경고 표시 → 해당 탭으로 이동(옵션)
    ↓ 통과
분석 탭 영향 확인 ────→ 있음 → 경고 팝업 표시
    ↓ 없음 또는 확인           ↓
DB에 저장                 사용자 확인
    ↓                          ↓
자동 백업 파일 생성          DB에 저장 + 백업
    ↓                          ↓
성공 메시지 표시     성공 메시지 표시
    ↓                          ↓
"저장되지 않은 변경사항" 제거
    ↓
완료
```

### 15.2 Restore 플로우 (두 가지 방법)

#### 방법 1: Backup File List에서 복원
```
사용자 백업 파일 목록에서 [복원] 클릭
    ↓
저장 안 된 변경사항 확인 ────→ 있음 → 경고 팝업 → 사용자 취소 가능
    ↓ 없음 또는 계속
선택된 백업 파일 읽기
    ↓
파일 유효성 검증 ────→ 실패 → 오류 팝업 → 종료
    ↓ 통과
현재 설정과 비교 (Diff 생성)
    ↓
Diff 모달 표시
    ├→ [취소] → 종료
    └→ [적용하기]
        ↓
    변경 항목만 현재 설정에 반영
        ↓
    "저장되지 않은 변경사항" 표시
        ↓
    Restore 성공 메시지
        ↓
    사용자 [저장] 클릭 대기
        ↓
    (저장 플로우와 동일)
```

#### 방법 2: Import - 파일 직접 불러오기
```
사용자 [Import] 클릭
    ↓
파일 선택 대화상자 (Windows)
    ↓
파일 선택 ────→ 취소 → 종료
    ↓
파일 유효성 검증 ────→ 실패 → 오류 팝업 → 종료
    ↓ 통과
현재 설정과 비교 (Diff 생성)
    ↓
Diff 모달 표시
    ├→ [취소] → 종료
    └→ [적용하기]
        ↓
    변경 항목만 현재 설정에 반영
        ↓
    "저장되지 않은 변경사항" 표시
        ↓
    Import 성공 메시지
        ↓
    사용자 [저장] 클릭 대기
        ↓
    (저장 플로우와 동일)
```

### 15.3 팝업 닫기 플로우

```
사용자 닫기 시도
(×, 배경 클릭, ESC)
    ↓
저장 안 된 변경사항 확인
    ↓
    ├→ 없음 → 즉시 팝업 닫기
    └→ 있음 → 경고 팝업 표시
              ├→ [취소] → 닫기 취소
              ├→ [저장 안 함] → 변경사항 무시 → 팝업 닫기
```

---

## 16. 테스트 항목

### 16.1 General 탭 기본 기능 테스트

#### TC-GEN-01: Language 변경
- **권한**: User/Admin/Master
- **테스트 단계**:
  1. Language 드롭다운 클릭
  2. 다른 언어 선택 (예: English)
  3. 저장 버튼 클릭
  4. 설정 팝업 재오픈하여 선택값 확인
- **예상 결과**:
  - 선택한 언어로 변경됨
  - 저장 후 유지됨

#### TC-GEN-02: Data Loading Methods - LIMS와 CSV 상호 배타
- **권한**: Admin/Master
- **테스트 단계**:
  1. LIMS(.plrn) 선택
  2. CSV 선택 시도 (비활성화 확인)
  3. LIMS(.plrn) 선택 해제
  4. CSV 선택
  5. LIMS(.plrn) 선택 시도 (비활성화 확인)
- **예상 결과**:
  - LIMS 선택 시 CSV 비활성화
  - CSV 선택 시 LIMS 비활성화

#### TC-GEN-03: Data Loading Methods - Barcode 단독 선택 불가
- **권한**: Admin/Master
- **테스트 단계**:
  1. 모든 Loading Methods 선택 해제
  2. Barcode만 선택 시도
  3. 경고 메시지 확인
- **예상 결과**:
  - Barcode 단독 선택 불가
  - 경고 메시지 표시 및 선택 취소

#### TC-GEN-04: 조건부 필수 항목 - CSV Header Settings
- **권한**: User/Admin/Master
- **테스트 단계**:
  1. Export Format을 CSV로 선택
  2. Language를 특정 언어(예: French)로 선택
  3. CSV Header Settings 미선택 상태로 저장 시도
  4. 경고 팝업 확인
  5. CSV Header Settings 선택 후 저장
- **예상 결과**:
  - 미선택 시: "⚠️ CSV Header Settings를 선택해주세요." 경고
  - 선택 후: 정상 저장

#### TC-GEN-05: Folder 경로 설정
- **권한**: User/Admin/Master
- **테스트 단계**:
  1. Open PCR Data File Folder Path의 📂 버튼 클릭
  2. 폴더 선택
  3. 경로가 텍스트 필드에 표시되는지 확인
  4. 저장 후 유지 확인
- **예상 결과**:
  - 선택한 폴더 경로가 표시됨
  - 저장 후 유지됨

### 16.2 GDPR 모드 기능 테스트

#### TC-GDPR-01: GDPR 모드 토글 (Master Only)
- **권한**: Master
- **전제조건**: General 탭 열기
- **테스트 단계**:
  1. PCR Raw Data Type과 타겟 약어 사용 사이에 "GDPR 모드" 항목 확인
  2. 토글 스위치 클릭하여 OFF → ON 변경
  3. 토글 스위치 클릭하여 ON → OFF 변경
- **예상 결과**:
  - GDPR 모드 토글이 정상적으로 동작
  - ON/OFF 상태가 즉시 반영됨
  - "저장되지 않은 변경사항" 표시됨

#### TC-GDPR-02: csv File Open Option - Name 옵션 숨김
- **권한**: Admin/Master
- **전제조건**: Loading Methods에서 CSV 선택
- **테스트 단계**:
  1. GDPR 모드 OFF 상태에서 csv File Open Option 옵션 확인
  2. GDPR 모드를 ON으로 변경
  3. csv File Open Option 옵션 재확인
  4. GDPR 모드를 다시 OFF로 변경
- **예상 결과**:
  - GDPR OFF: No, Sample Id, Name 표시
  - GDPR ON: No, Sample Id만 표시 (Name 숨김)
  - GDPR 다시 OFF: No, Sample Id, Name 모두 표시

#### TC-GDPR-03: plrn File Open Option - Name 옵션 숨김
- **권한**: Admin/Master
- **전제조건**: Loading Methods에서 LIMS(.plrn) 선택
- **테스트 단계**:
  1. GDPR 모드 OFF 상태에서 plrn File Open Option 확인
  2. Barcode와 Name 각각 No, Sample Id, Name 옵션 확인
  3. GDPR 모드를 ON으로 변경
  4. Barcode와 Name 옵션 재확인
- **예상 결과**:
  - GDPR OFF: Barcode, Name 모두 No, Sample Id, Name 표시
  - GDPR ON: Barcode, Name 모두 No, Sample Id만 표시 (Name 숨김)

#### TC-GDPR-04: plrn File Open Option - 같은 옵션 선택 제약
- **권한**: Admin/Master
- **전제조건**: Loading Methods에서 LIMS(.plrn) 선택, GDPR OFF
- **테스트 단계**:
  1. Barcode에서 "Sample Id" 선택
  2. Name에서 "Sample Id" 선택 시도
  3. Barcode에서 "Name" 선택
  4. Name에서 "Name" 선택 시도
  5. Barcode에서 "No" 선택
  6. Name에서 "No" 선택 시도
- **예상 결과**:
  - Sample Id, Name은 Barcode와 Name에서 동시 선택 불가
  - 같은 옵션 선택 시도 시 경고 알림: "⚠️ Barcode와 Name은 같은 옵션을 선택할 수 없습니다."
  - No는 Barcode와 Name 모두 선택 가능

#### TC-GDPR-05: 기능별 권한 설정 - GDPR 관련기능 활성화
- **권한**: Master
- **전제조건**: General > 기능별 권한 설정 서브탭 열기
- **테스트 단계**:
  1. GDPR 모드 OFF 상태에서 "GDPR 관련기능" 항목 확인
  2. GDPR 모드를 ON으로 변경 후 재확인
  3. GDPR 모드를 다시 OFF로 변경 후 재확인
- **예상 결과**:
  - GDPR OFF: 회색 표시, "(GDPR 모드 OFF)" 라벨, 체크박스 비활성화
  - GDPR ON: 정상 표시, Admin/User 체크박스 활성화
  - GDPR 다시 OFF: 회색 표시로 복귀

#### TC-GDPR-06: 분석 탭 닫기 경고 - GDPR 모드 변경
- **권한**: Master
- **전제조건**: GDPR 모드 변경 후 저장 시도
- **테스트 단계**:
  1. GDPR 모드를 OFF에서 ON으로 변경
  2. 저장 버튼 클릭
  3. 분석 탭 닫힘 경고 팝업 확인
  4. 변경된 설정 항목에 "GDPR 모드" 표시 확인
  5. [취소] 클릭 후 GDPR 모드를 다시 OFF로 변경
  6. 저장 버튼 클릭 및 경고 팝업 재확인
- **예상 결과**:
  - GDPR 모드 변경 시 "분석 탭 닫힘 안내" 팝업 표시
  - 변경된 설정 항목 목록에 "GDPR 모드" 포함
  - [취소] 클릭 시 저장 취소
  - [확인 후 저장] 클릭 시 분석 탭 닫기 → 설정 저장

### 16.3 csv/plrn File Open Option 테스트

#### TC-FILE-01: csv File Open Option 필수 선택
- **권한**: Admin/Master
- **전제조건**: Loading Methods에서 CSV 선택
- **테스트 단계**:
  1. csv File Open Option을 선택하지 않은 상태로 저장 시도
  2. 경고 팝업 확인
  3. csv File Open Option에서 "No" 선택 후 저장
- **예상 결과**:
  - 미선택 시: "⚠️ CSV File Open Option을 선택해주세요." 경고
  - 선택 후: 정상 저장

#### TC-FILE-02: plrn File Open Option 선택
- **권한**: Admin/Master
- **전제조건**: Loading Methods에서 LIMS(.plrn) 선택
- **테스트 단계**:
  1. Barcode: "Sample Id", Name: "No" 선택 후 저장
  2. Barcode: "No", Name: "Sample Id" 선택 후 저장
  3. Barcode: "No", Name: "No" 선택 후 저장
- **예상 결과**:
  - 모든 조합에서 정상 저장
  - 선택값이 설정에 반영됨

### 16.4 Display Setting 탭 테스트

#### TC-DISP-01: Result View 변경
- **권한**: User/Admin/Master
- **테스트 단계**:
  1. Result View를 "Simple"에서 "Detailed"로 변경
  2. 저장 버튼 클릭
  3. 분석 탭 닫힘 경고 확인
  4. [확인 후 저장] 클릭
- **예상 결과**:
  - Result View 변경 시 분석 탭 닫힘 경고 표시
  - 설정 정상 저장

#### TC-DISP-02: Target on/off - Assay 선택 및 Target 토글
- **권한**: Master
- **전제조건**: Display > Target on/off 서브탭
- **테스트 단계**:
  1. 검색창에 Assay 이름 입력하여 검색
  2. 검색된 Assay 클릭하여 선택
  3. 하단에 Target 목록 표시 확인
  4. 특정 Target의 토글 스위치를 ON → OFF 변경
  5. 저장 버튼 클릭
  6. 분석 탭 닫힘 경고 확인
- **예상 결과**:
  - Assay 검색 및 선택 정상 동작
  - Target 목록 표시됨
  - Target on/off 토글 정상 동작
  - 저장 시 분석 탭 닫힘 경고 표시

#### TC-DISP-03: Target on/off - 전체 ON/OFF 버튼
- **권한**: Master
- **전제조건**: Display > Target on/off 서브탭, Assay 선택됨
- **테스트 단계**:
  1. [전체 OFF] 버튼 클릭
  2. 모든 Target이 OFF 상태인지 확인
  3. [전체 ON] 버튼 클릭
  4. 모든 Target이 ON 상태인지 확인
- **예상 결과**:
  - 전체 OFF: 모든 Target OFF
  - 전체 ON: 모든 Target ON

#### TC-DISP-04: Sample Index Setting 권한 확인
- **권한**: User, Admin, Master
- **테스트 단계**:
  1. User 권한으로 Display Setting 탭에서 Sample Index Setting 항목 확인
  2. Admin 권한으로 확인
  3. Master 권한으로 확인
- **예상 결과**:
  - User: Sample Index Setting 표시 안 됨
  - Admin: Sample Index Setting 표시됨
  - Master: Sample Index Setting 표시됨

### 16.5 Export 탭 테스트

#### TC-EXP-01: LIS Export Setting 기본 설정
- **권한**: Admin/Master
- **테스트 단계**:
  1. Auto Export 토글을 ON으로 변경
  2. Sample to Export 선택 (All Samples/Selected Samples)
  3. Export Format 선택 (xlsx/csv)
  4. 저장 버튼 클릭
- **예상 결과**:
  - 모든 설정이 정상적으로 변경됨
  - 저장 후 유지됨

#### TC-EXP-02: HL7 Transfer Setting
- **권한**: Admin/Master
- **전제조건**: Export > HL7 Transfer Setting 서브탭
- **테스트 단계**:
  1. HL7 Version 선택
  2. HL7 Auto Send 토글 ON
  3. HL7 Server IP 입력
  4. HL7 Server Port 입력
  5. 저장 버튼 클릭
- **예상 결과**:
  - 모든 HL7 설정이 정상 입력됨
  - 저장 후 유지됨

#### TC-EXP-03: HL7 Abbreviation Setting
- **권한**: Master
- **전제조건**: Export > HL7 Abbreviation Setting 서브탭
- **테스트 단계**:
  1. Assay 목록에서 특정 Assay 선택
  2. ASSAY CODE 입력
  3. 하단 Target 목록에서 TARGET CODE 입력
  4. 저장 버튼 클릭
- **예상 결과**:
  - ASSAY CODE, TARGET CODE 정상 입력
  - 저장 후 유지됨

#### TC-EXP-04: 조건부 필수 항목 - Use Prefix
- **권한**: Admin/Master
- **테스트 단계**:
  1. Use Prefix 토글을 ON으로 변경
  2. Prefix Type이 표시되는지 확인
  3. Prefix Type 미선택 상태로 저장 시도
  4. 경고 팝업 확인
  5. Prefix Type 선택 후 저장
- **예상 결과**:
  - Use Prefix ON 시 Prefix Type 표시됨
  - 미선택 시: "⚠️ Prefix Type을 선택해주세요." 경고
  - 선택 후: 정상 저장

### 16.6 Print 탭 테스트

#### TC-PRINT-01: Print Range 설정
- **권한**: Admin/Master
- **테스트 단계**:
  1. Print Range를 "All Samples"에서 "Selected Samples"로 변경
  2. Print Items에서 number, sampleId 체크박스 선택/해제
  3. 저장 버튼 클릭
- **예상 결과**:
  - Print Range 변경됨
  - Print Items 체크박스 동작 정상
  - 저장 후 유지됨

#### TC-PRINT-02: 조건부 필수 항목 - Add Logo to Print
- **권한**: Admin/Master
- **테스트 단계**:
  1. Add Logo to Print 토글을 ON으로 변경
  2. Logo Print Location이 표시되는지 확인
  3. Logo Print Location 미선택 상태로 저장 시도
  4. 경고 팝업 확인
  5. Logo Print Location 선택 후 저장
- **예상 결과**:
  - Add Logo ON 시 Logo Print Location 표시됨
  - 미선택 시: "⚠️ Logo Print Location을 선택해주세요." 경고
  - 선택 후: 정상 저장

#### TC-PRINT-03: 조건부 필수 항목 - Add Watermark to Print
- **권한**: Admin/Master
- **테스트 단계**:
  1. Add Watermark to Print 토글을 ON으로 변경
  2. Watermark Layout이 표시되는지 확인
  3. Watermark Layout 미선택 상태로 저장 시도
  4. 경고 팝업 확인
  5. Watermark Layout 선택 후 저장
- **예상 결과**:
  - Add Watermark ON 시 Watermark Layout 표시됨
  - 미선택 시: "⚠️ Watermark Layout을 선택해주세요." 경고
  - 선택 후: 정상 저장

### 16.7 Assay Pack 탭 테스트

#### TC-ASSAY-01: Assay Pack 검색
- **권한**: Master
- **테스트 단계**:
  1. 검색창에 Assay 이름 입력
  2. 검색 결과 확인
  3. 제조사 이름으로 검색
  4. 검색 결과 확인
- **예상 결과**:
  - Assay Name으로 검색 정상 동작
  - 제조사로 검색 정상 동작
  - 부분 일치 검색 동작

#### TC-ASSAY-02: Assay Pack 추가
- **권한**: Master
- **테스트 단계**:
  1. [➕ Assay Pack 추가] 버튼 클릭
  2. 모달에서 필수 항목 미입력 상태로 추가 시도
  3. 경고 확인
  4. 모든 필수 항목 입력 후 추가
  5. 목록에서 추가된 Assay 확인
- **예상 결과**:
  - 필수 항목 미입력 시 경고
  - 필수 항목 입력 후 정상 추가됨
  - 즉시 적용됨 (저장 버튼 없이)

#### TC-ASSAY-03: Assay Pack 삭제
- **권한**: Master
- **테스트 단계**:
  1. 목록에서 Assay의 삭제 버튼 클릭
  2. 삭제 확인 팝업에서 [취소] 클릭
  3. Assay가 유지되는지 확인
  4. 다시 삭제 버튼 클릭
  5. 삭제 확인 팝업에서 [삭제] 클릭
  6. Assay가 목록에서 제거되는지 확인
- **예상 결과**:
  - [취소] 시 삭제 취소
  - [삭제] 시 목록에서 제거됨
  - 즉시 적용됨 (저장 버튼 없이)

### 16.8 Backup/Restore 탭 테스트

#### TC-BACKUP-01: Manual Export
- **권한**: User/Admin/Master
- **테스트 단계**:
  1. 설정 변경 후 저장하지 않은 상태
  2. [Manual Export] 버튼 클릭
  3. 경고 팝업 확인
  4. 설정 저장 후 다시 [Manual Export] 클릭
  5. 파일 저장 대화상자에서 위치 선택
  6. 파일 저장 확인
  7. 성공 메시지 확인
- **예상 결과**:
  - 저장 안 된 변경사항 있을 때 경고 표시
  - 파일 정상 저장됨
  - 성공 메시지 표시

#### TC-BACKUP-02: Auto Backup
- **권한**: User/Admin/Master
- **테스트 단계**:
  1. 설정 변경
  2. 저장 버튼 클릭
  3. 저장 완료 후 Auto Backup 파일 생성 확인
  4. Backup File List에서 최신 파일 확인
- **예상 결과**:
  - 저장 시 자동으로 백업 파일 생성
  - 백그라운드 동작 (사용자 알림 없음)
  - 목록에 추가됨

#### TC-BACKUP-03: Scheduled Backup 설정
- **권한**: Admin/Master
- **테스트 단계**:
  1. Scheduled Interval을 "Daily"로 선택
  2. Scheduled Interval을 "Weekly"로 변경
  3. 요일 선택 필드 표시 확인
  4. 요일 미선택 상태로 저장 시도
  5. 경고 팝업 확인
  6. 요일 선택 후 저장
- **예상 결과**:
  - Weekly 선택 시 요일 선택 필드 표시
  - 미선택 시: "⚠️ 백업 요일을 선택해주세요." 경고
  - 선택 후: 정상 저장

#### TC-BACKUP-04: Scheduled Backup 설정 - Monthly
- **권한**: Admin/Master
- **테스트 단계**:
  1. Scheduled Interval을 "Monthly"로 선택
  2. 날짜 선택 필드 표시 확인
  3. 날짜 미선택 상태로 저장 시도
  4. 경고 팝업 확인
  5. 날짜 선택 후 저장
- **예상 결과**:
  - Monthly 선택 시 날짜 선택 필드 표시
  - 미선택 시: "⚠️ 백업 날짜를 선택해주세요." 경고
  - 선택 후: 정상 저장

#### TC-BACKUP-05: Restore - Backup File List에서 복원
- **권한**: Admin/Master
- **테스트 단계**:
  1. Auto Backup 파일 목록에서 [복원] 버튼 클릭
  2. Diff 확인 모달 표시 확인
  3. 변경사항 테이블 확인 (Category, Key, Current, File, Status)
  4. [취소] 클릭
  5. 다시 [복원] 버튼 클릭
  6. [적용하기] 클릭
  7. "저장되지 않은 변경사항" 표시 확인
  8. 저장 버튼 클릭
- **예상 결과**:
  - Diff 모달 정상 표시
  - 변경사항 비교 정상 동작
  - [적용하기] 시 Pending 상태로 설정 반영
  - 저장 버튼으로 최종 적용

#### TC-BACKUP-06: Import - 파일 직접 불러오기
- **권한**: Admin/Master
- **테스트 단계**:
  1. [Import] 버튼 클릭
  2. 파일 선택 대화상자에서 [취소] 클릭
  3. 작업 취소 확인
  4. 다시 [Import] 버튼 클릭
  5. 백업 파일 선택
  6. Diff 모달 표시 확인
  7. [적용하기] 클릭
  8. Import 성공 메시지 확인
- **예상 결과**:
  - 파일 선택 대화상자 정상 동작
  - Diff 모달 표시
  - Import 성공 메시지 표시
  - 저장 대기 상태

#### TC-BACKUP-07: Import - 동일한 설정 파일
- **권한**: Admin/Master
- **테스트 단계**:
  1. 현재 설정과 동일한 백업 파일 Import
  2. "동일한 설정 내용입니다" alert 팝업 확인
- **예상 결과**:
  - 모든 설정이 동일하면 Diff 모달 표시 안 됨
  - alert 팝업으로 안내

#### TC-BACKUP-08: Keep Recent Count 설정
- **권한**: Admin/Master
- **테스트 단계**:
  1. Keep Recent Count를 5로 설정
  2. 저장
  3. 6번 이상 설정 저장 (Auto Backup 생성)
  4. Auto Backup 파일 목록 확인
- **예상 결과**:
  - 설정된 개수만큼만 유지됨
  - 오래된 파일 자동 삭제

### 16.9 권한별 종합 테스트

#### TC-AUTH-01: User 권한 전체 확인
- **권한**: User
- **테스트 단계**:
  1. Settings 팝업 열기
  2. 표시되는 탭 확인 (General, Display Setting, Backup/Restore만)
  3. Export, Print, Assay Pack 탭 표시 안 됨 확인
  4. General 탭에서 접근 가능한 항목 확인
  5. Display Setting 탭에서 Sample Index Setting 등 비표시 확인
  6. Backup/Restore 탭에서 Manual Export만 가능 확인
- **예상 결과**:
  - User 권한에 맞는 탭과 설정만 표시
  - 제한된 기능만 접근 가능

#### TC-AUTH-02: Admin 권한 전체 확인
- **권한**: Admin
- **테스트 단계**:
  1. Settings 팝업 열기
  2. 표시되는 탭 확인 (Assay Pack 제외 모두 표시)
  3. Export, Print 탭 접근 가능 확인
  4. Display Setting 탭에서 User보다 많은 항목 접근 확인
  5. Backup/Restore 탭에서 모든 기능 접근 확인
  6. Master 전용 서브탭 표시 안 됨 확인
- **예상 결과**:
  - Admin 권한에 맞는 탭과 설정 표시
  - User보다 많은 기능 접근 가능
  - Master 전용 기능은 접근 불가

#### TC-AUTH-03: Master 권한 전체 확인
- **권한**: Master
- **테스트 단계**:
  1. Settings 팝업 열기
  2. 모든 탭 표시 확인
  3. 모든 서브탭 표시 확인
  4. 모든 설정 항목 접근 가능 확인
  5. GDPR 모드 접근 확인
  6. 기능별 권한 설정 서브탭 접근 확인
- **예상 결과**:
  - 모든 탭과 서브탭 표시
  - 모든 설정에 접근 가능
  - Master 전용 기능 모두 접근 가능

### 16.10 통합 시나리오 테스트

#### TC-INT-01: GDPR 모드 전체 워크플로우
- **권한**: Master
- **테스트 단계**:
  1. GDPR 모드 OFF, CSV 선택, csv File Open Option에서 "Name" 선택
  2. LIMS(.plrn) 선택, plrn Barcode: "Name", plrn Name: "Sample Id" 선택
  3. GDPR 모드를 ON으로 변경
  4. csv File Open Option 확인 (Name 옵션 숨김 확인)
  5. plrn File Open Option 확인 (Name 옵션 숨김 확인)
  6. 기능별 권한 설정에서 "GDPR 관련기능" 활성화 확인
  7. 저장 버튼 클릭
  8. 분석 탭 닫힘 경고 확인
  9. [확인 후 저장] 클릭
- **예상 결과**:
  - GDPR ON 시 Name 옵션이 모두 숨겨짐
  - 이전에 선택한 "Name" 값은 자동으로 조정되거나 유지
  - GDPR 관련기능 활성화됨
  - 분석 탭 닫힘 경고 표시됨
  - 설정 정상 저장됨

#### TC-INT-02: Import 후 GDPR 모드 적용
- **권한**: Admin/Master
- **테스트 단계**:
  1. GDPR 모드 OFF 상태의 설정 파일 Export
  2. GDPR 모드를 ON으로 변경하지 않은 상태에서 Import
  3. Diff 모달에서 GDPR 모드 변경사항 확인
  4. [적용하기] 클릭 후 Name 옵션 표시 확인
- **예상 결과**:
  - Import된 설정의 GDPR 모드가 OFF면 Name 옵션 표시됨
  - Diff 모달에서 GDPR 모드 변경 여부 확인 가능

---

## 17. 변경 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| 1.0 | 2026-01-14 | AI | 인터랙션 설계서 초안 작성 (디자이너용) |
| 1.1 | 2026-01-15 | AI | Import 중복 파일 확인 제거, Diff 모달 "동일" 상태 필터링, 변경사항 없을 때 안내 팝업 추가 |
| 1.2 | 2026-01-19 | AI | GDPR 모드 추가, csv/plrn File Open Option 변경, 기능별 권한 설정 업데이트, 테스트 항목 추가 |

**v1.2 주요 변경사항**:
- General 탭에 "GDPR 모드" 추가 (Master Only, PCR Raw Data Type과 타겟 약어 사이 위치)
- csv File Open Option 이름 변경: "csv File Open Option(Sample Barcode)", 옵션: No, Sample Id, Name
- plrn File Open Option 추가: Barcode와 Name 각각 No, Sample Id, Name 중 선택 (같은 옵션 선택 불가)
- GDPR 모드 ON 시 csv/plrn File Open Option에서 Name 옵션 숨김
- 기능별 권한 설정에 "GDPR 관련기능" 추가 (GDPR 모드 ON일 때만 활성화)
- GDPR 모드 변경 시 분석탭 닫기 적용
- 테스트 항목 섹션 추가 (GDPR 모드, File Open Option, 권한, 통합 시나리오 테스트)

---

**문서 끝**
