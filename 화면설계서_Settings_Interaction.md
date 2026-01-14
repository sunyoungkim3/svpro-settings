# Settings 팝업 인터랙션 설계서

**문서 버전**: 1.0  
**작성일**: 2026-01-14  
**목적**: 디자이너를 위한 기능 및 인터랙션 요구사항 정의

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
     - Sample ID
     - Result View
     - C(t) Value Digit
     - Sample Index Setting
     - Target on/off
   - 변경됨 → "분석 탭 닫힘 경고" 팝업 표시

4. **저장 실행**
   - DB에 설정 저장
   - 자동 백업 파일 생성
   - Footer에 "설정 변경이 완료되었습니다" 표시 (2초)
   - 저장 버튼 비활성화
   - "저장되지 않은 변경사항" 메시지 제거

### 4.5 검색

#### Assay Pack 검색 (Display > Target on/off, Assay Pack 탭)
- **입력**: 검색창에 텍스트 입력
- **동작**: 입력 즉시 목록 필터링 (실시간)
- **범위**: Assay Name, 제조사, Version
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
5. 성공 메시지 표시 (3초)
6. 마지막 백업 시간 업데이트

**취소 가능 시점**: 파일 저장 대화상자에서 취소 선택 시

### 6.2 Auto Backup (자동 백업)

**트리거**: 저장 버튼 클릭 → 저장 완료 시 자동 실행

**동작**:
1. 백업 파일 생성
   - 파일명: `settings_auto_[timestamp].json`
   - 저장 위치: 설정된 Auto Backup 경로
   - 내용: Assay Pack 제외, 민감정보 마스킹
2. 백업 파일 목록에 추가
3. 설정된 보관 개수 초과 시 오래된 파일 자동 삭제
4. 마지막 자동 백업 시간 업데이트

**사용자 알림**: 없음 (백그라운드 동작)

### 6.3 Import (설정 가져오기)

**트리거**: Backup/Restore 탭에서 [Import] 버튼 클릭

**동작 흐름**:
1. 저장되지 않은 변경사항 확인
   - 있음 → 경고 팝업 표시 후 중단
   - 없음 → 진행

2. Windows 파일 열기 대화상자 표시
   - 파일 형식: JSON
   
3. 사용자가 파일 선택 후 열기

4. 파일 유효성 검증
   - JSON 형식 확인
   - 필수 필드 존재 확인
   - 타입 일치 확인
   - 문제 있음 → 오류 메시지 표시 후 중단

5. **Diff 확인 모달 표시**
   - 현재 설정과 파일 설정 비교
   - 변경사항 테이블 표시:
     - Category (카테고리)
     - Key (설정 키)
     - Current (현재 값)
     - File (파일 값)
     - Status (상태: 변경/동일/스킵)
     - Reason (스킵 이유)
   - 하단 요약: N개 적용 | M개 스킵 | K개 변경 없음

6. 사용자 선택:
   - **취소**: Diff 모달 닫기, 작업 취소
   - **적용하기**: 
     - Status가 "변경"인 항목만 현재 설정에 반영
     - "저장되지 않은 변경사항" 표시
     - Import 성공 메시지 표시
     - Pending 상태로 저장 (실제 저장은 [저장] 버튼 클릭 시)

**Diff 상태 설명**:
- **변경**: 현재 값과 파일 값이 다름 → 적용됨
- **동일**: 현재 값과 파일 값이 같음 → 적용 안 됨
- **스킵**: 타입 불일치, 존재하지 않는 키 등 → 적용 안 됨

### 6.4 Restore (복구)

**트리거**: 백업 파일 목록에서 [복구] 버튼 클릭

**동작**: Import와 동일한 흐름

---

## 7. 특수 UI 동작

### 7.1 Data Loading Methods (다중 선택 제약)

**UI**: 다중 선택 버튼 그룹 (Manual, Preset, LIMS, CSV, Barcode)

**제약 조건**:
1. **LIMS와 CSV 상호 배타적**
   - LIMS 선택 → CSV 비활성화
   - CSV 선택 → LIMS 비활성화
   - 둘 다 선택 시도 → 경고 메시지 + 선택 취소

2. **Barcode 단독 선택 불가**
   - Barcode만 선택 → 경고 메시지 + 선택 취소
   - 다른 방식이 하나라도 선택되어야 Barcode 선택 가능

**사용자 안내**:
- 정보 아이콘(ℹ️) 표시
- Hover 시 툴팁으로 규칙 설명

### 7.2 조건부 표시 항목

**일반 패턴**:
- 특정 설정이 활성화되면 하위 항목 표시
- 비활성화되면 하위 항목 숨김 (또는 비활성화)
- **모든 하위 노출 항목은 디폴트값 없음**
- **하위 항목이 표시되면 반드시 선택해야 저장 가능**

**조건부 노출 항목 목록**:

| 부모 설정 | 조건 | 하위 노출 항목 | 탭 | 디폴트값 | 필수 여부 |
|----------|------|----------------|-----|----------|----------|
| Export Format = CSV + 특정 언어* | AND 조건 | CSV Header Settings | General | 없음 | 필수 |
| Loading Methods | LIMS(.plrn) 또는 Barcode 선택 | Sample ID | General | 없음 | 필수 |
| Loading Methods | CSV 선택 | Plate Setting | General | 없음 | 필수 (최소 1개) |
| Loading Methods | CSV 선택 | CSV File Open Option | General | 없음 | 필수 |
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
- 해당 탭으로 자동 이동
- 해당 필드에 포커스 (가능한 경우)

**시각적 표현**:
- 들여쓰기로 계층 관계 표현
- 선택되지 않은 필수 항목은 플레이스홀더 텍스트 표시 ("선택하세요")
- 일부 항목은 강조 배경 (예: 노란색)으로 주의 환기

### 7.3 Target On/Off (Display Setting 서브탭)

**레이아웃**: 좌우 2열

```
┌─────────────────────────────────────────────┐
│ [Assay 목록]          │ [Target 목록]        │
│                       │                      │
│ Assay 1 →             │ Target 1  [ON/OFF]  │
│ Assay 2               │ Target 2  [ON/OFF]  │
│ Assay 3               │ Target 3  [ON/OFF]  │
│                       │                      │
│                       │ [전체 OFF] [전체 ON] │
└─────────────────────────────────────────────┘
```

**좌측: Assay 목록**
- 검색 가능 (상단 검색창)
- 클릭 시 선택 상태 표시
- 선택된 Assay의 Target 목록을 우측에 표시
- 각 Assay는 Target 개수 표시 (배지)

**우측: Target 목록**
- 선택된 Assay가 없으면 안내 메시지 표시
- 선택된 Assay의 모든 Target 표시
- 각 Target마다 토글 스위치 (ON/OFF)
- 하단 버튼:
  - **전체 OFF**: 현재 Assay의 모든 Target OFF
  - **전체 ON**: 현재 Assay의 모든 Target ON

**중요**:
- Target ON/OFF 변경 시 `targetOnOffChanged` 플래그 설정
- 저장 시 "분석 탭 닫힘 경고" 표시

### 7.4 HL7 Abbreviation Setting (Export 서브탭)

**레이아웃**: 좌우 2열

```
┌─────────────────────────────────────────────┐
│ [Assay 목록]          │ [Target 목록]        │
│ (ASSAY CODE 편집)     │ (TARGET CODE 편집)   │
└─────────────────────────────────────────────┘
```

**좌측: Assay 목록**
- 검색 가능 (상단 검색창)
- 테이블 형식:
  - ASSAY NAME (읽기 전용)
  - INTENDED USE (배지, 읽기 전용)
  - ASSAY CODE (편집 가능 텍스트 입력)
- 행 클릭 시 선택 → 우측에 Target 목록 표시

**우측: Target 목록**
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
- 검색 범위: Assay Name, 제조사, Version

**추가**:
1. 우측 상단 [➕ Assay Pack 추가] 버튼 클릭
2. 추가 모달 표시:
   - Assay Name (텍스트 입력, 필수)
   - Intended Use (라디오 버튼: IVD/RUO/LDT, 필수)
   - Version (텍스트 입력, 필수)
   - 제조사 (텍스트 입력, 필수)
   - Install Date (날짜 입력, 필수)
3. [취소] 또는 [추가] 버튼
   - 취소: 모달 닫기, 입력 내용 초기화
   - 추가: 필수 항목 검증 → 서버에 즉시 저장 → 목록에 추가 → 모달 닫기

**삭제**:
1. 목록에서 삭제 버튼 클릭
2. 삭제 확인 팝업 표시
3. 확인 시 서버에 즉시 반영 → 목록에서 제거

**중요**: 
- Assay Pack 추가/삭제는 즉시 적용되며 독립적으로 동작
- Settings의 "저장되지 않은 변경사항" 표시 및 저장 버튼 활성화에 영향을 주지 않음
- Settings 저장 버튼을 누르지 않아도 Assay Pack 변경사항은 이미 적용된 상태

**행 선택**:
- 클릭 시 선택 상태 표시 (현재는 기능 없음, 향후 확장 가능)

---

## 8. 키보드 네비게이션

### 8.1 전역 단축키

| 키 | 동작 |
|-----|------|
| ESC | 팝업/모달 닫기 (저장 확인 포함) |
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
| 저장 중 | Footer | (미정) | 저장 완료 시까지 |
| 저장 완료 | Footer | ✓ 설정 변경이 완료되었습니다 | 사용자 확인 시까지 (수동 닫기) |

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
| Import 버튼 | 비활성 | 저장되지 않은 변경사항 있음 |
| Manual Export 버튼 | 비활성 | 저장되지 않은 변경사항 있음 |
| Diff 모달 적용 버튼 | 비활성 | 적용 가능한 변경사항 없음 (모두 동일 또는 스킵) |

---

## 10. 유효성 검증

### 10.1 필수 입력 검증

**시점**: 저장 버튼 클릭 시

**원칙**: 조건부 노출 항목을 제외한 모든 설정 항목은 필수 항목

**필수 항목 목록**:

- **General 탭**:
  - Language (필수)
  - PCR Raw Data Type (필수)
  - Data Loading Methods (최소 1개 필수)
  - 폴더 경로 설정들 (선택)

- **Display Setting 탭**:
  - Result View (필수)
  - Well Table (필수)
  - Result Display (필수)
  - C(t) Value Digit (필수)
  - Sample Index Setting (필수)
  - Display positive when IC negative (선택 - boolean)
  - Invalidate when PC/NC invalid (선택 - boolean)

- **Export 탭**:
  - Sample to Export (필수)
  - Export Format (필수)
  - Target Alignment Method (필수)
  - HL7 Version (필수)
  - HL7 Sample to Export (필수)
  - HL7 Transfer Protocol (필수)
  - HL7 Transfer Method (필수)

- **Print 탭**:
  - Print Range (필수)

- **Backup/Restore 탭**:
  - Scheduled Interval (필수)

**조건부 필수 항목** (별도 검증):
- CSV Header Settings (CSV + 특정 언어)
- Sample ID (LIMS/Barcode 선택 시)
- Plate Setting (CSV 선택 시)
- CSV File Open Option (CSV 선택 시)
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
   - 동작: 선택 취소 + 경고 메시지

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

### 10.3 형식 검증

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

### 11.1 민감정보 마스킹

**대상**: Export 및 Auto Backup 시

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

**대상**: Export 및 Auto Backup 시

**제외 필드**:
- assayList
- assaySearch
- showAddAssayModal
- newAssay

**이유**: Assay Pack은 별도 관리, 설정 파일에 포함 안 함

### 11.3 Hub 로그 전송

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

## 12. 애니메이션 및 전환 효과

### 12.1 필요한 애니메이션

| 요소 | 효과 | 시간 |
|------|------|------|
| 모달 팝업 열기/닫기 | Fade in/out + Scale | 0.2s |
| 탭 전환 | Fade | 0.15s |
| 서브탭 확장/축소 | Slide down/up | 0.2s |
| 토글 스위치 | Slide | 0.2s |
| 버튼 Hover | 배경색 전환 | 0.15s |
| 성공 메시지 표시/사라짐 | Fade in/out | 0.3s |
| 테이블 행 Hover | 배경색 전환 | 0.1s |

### 12.2 자동 사라짐 타이머

**참고**: 모든 성공/오류 메시지는 자동으로 사라지지 않으며, 사용자가 직접 닫기 버튼을 클릭하여 닫아야 합니다.

| 메시지 | 지속 시간 |
|--------|-----------|
| 저장 완료 | 사용자 확인 필요 (수동 닫기) |
| Export 성공 | 사용자 확인 필요 (수동 닫기) |
| Import 성공 알림 | 사용자 확인 필요 (수동 닫기) |

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

| 기능 | User | Admin | Master |
|------|------|-------|--------|
| Manual Export | ✓ | ✓ | ✓ |
| Import | ✓ | ✓ | ✓ |
| Auto Backup 파일 목록 | ✓ | ✓ | ✓ |
| 파일 복구 | ✓ | ✓ | ✓ |

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

### 14.2 네트워크 오류 (서버 통신)

**상황**:
- 설정 저장 실패
- 백업 파일 목록 로드 실패

**동작**:
1. 오류 팝업 표시
2. 재시도 옵션 제공 (선택)
3. [확인] 또는 [재시도] 버튼

### 14.3 유효성 검증 오류

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

## 15. 접근성 고려사항

### 15.1 키보드 접근성
- 모든 인터랙티브 요소는 Tab 키로 접근 가능
- 포커스 상태 명확하게 표시 (아웃라인 또는 테두리)
- Enter 키로 버튼 클릭 가능
- ESC 키로 팝업/모달 닫기 가능

### 15.2 스크린 리더 지원
- 의미있는 라벨 제공
- 버튼/링크에 명확한 텍스트
- 아이콘에 대체 텍스트 제공
- 상태 변경 시 알림 (aria-live)

### 15.3 시각적 접근성
- 색상만으로 정보 전달하지 않음 (아이콘, 텍스트 함께 사용)
- 충분한 대비율 (디자이너가 확인)
- 텍스트 크기 조절 가능 (브라우저 기본 기능)

---

## 16. 추후 확장 가능성

### 16.1 미정 사항
- General > 기능별 권한 설정 서브탭 상세 내용
- Display Setting > Developer Setting 서브탭 상세 내용
- Display Setting > Negative C(t) Value 서브탭 상세 내용
- 드롭다운 옵션 전체 목록
- 테이블 정렬 기능
- 반응형 디자인 규칙

### 16.2 잠재적 기능
- Assay Pack 가져오기/내보내기 (별도 기능)
- 설정 프로필 관리 (사용자별 설정 저장)
- 설정 변경 이력 조회
- 설정 초기화 (공장 초기화)
- 전체 설정 검색 기능
- 즐겨찾기 설정 항목
- 최근 변경 항목 표시

---

## 17. 워크플로우 다이어그램

### 17.1 설정 변경 및 저장 플로우

```
사용자 설정 변경
    ↓
내부 상태 업데이트
    ↓
"저장되지 않은 변경사항" 표시
    ↓
사용자 [저장] 클릭
    ↓
필수 항목 검증 ────→ 실패 → 경고 표시 → 해당 탭으로 이동
    ↓ 통과
비즈니스 규칙 검증 ────→ 실패 → 경고 표시 → 해당 탭으로 이동
    ↓ 통과
분석 탭 영향 확인 ────→ 있음 → 경고 팝업 표시
    ↓ 없음 또는 확인           ↓
서버에 저장                 사용자 확인
    ↓                          ↓
자동 백업 파일 생성          서버에 저장 + 백업
    ↓                          ↓
성공 메시지 표시 (2초)      성공 메시지 표시 (2초)
    ↓                          ↓
"저장되지 않은 변경사항" 제거
    ↓
완료
```

### 17.2 Import 플로우

```
사용자 [Import] 클릭
    ↓
저장 안 된 변경사항 확인 ────→ 있음 → 경고 팝업 → 사용자 취소 가능
    ↓ 없음 또는 계속
파일 선택 대화상자
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

### 17.3 팝업 닫기 플로우

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
              └→ [저장 후 닫기] → 저장 플로우 실행 → 성공 시 팝업 닫기
```

---

## 18. 변경 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| 1.0 | 2026-01-14 | AI | 인터랙션 설계서 초안 작성 (디자이너용) |

---

**문서 끝**
