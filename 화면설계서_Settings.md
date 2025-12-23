# Settings Popup 화면설계서

**문서 버전**: 1.0  
**작성일**: 2024-12-23  
**작성자**: 미정

---

## 1. 개요

### 1.1 화면 목적
- PCR 분석 소프트웨어의 전체 설정을 관리하는 팝업 화면
- 사용자가 분석, 표시, 내보내기, 인쇄, Assay Pack 관련 설정을 구성할 수 있음

### 1.2 화면 구조
- **레이아웃**: 모달 팝업 (중앙 배치)
- **크기**: 1200px × 800px (가변)
- **구성**: 좌측 탭 네비게이션 + 우측 설정 콘텐츠 영역

---

## 2. 화면 레이아웃

```
┌─────────────────────────────────────────────────┐
│  [×] Settings                                    │
├──────────┬──────────────────────────────────────┤
│  ⚙️      │                                      │
│  General │                                      │
│          │                                      │
│  🖥️      │        설정 콘텐츠 영역               │
│  Display │                                      │
│  Setting │                                      │
│          │                                      │
│  📤      │                                      │
│  Export  │                                      │
│          │                                      │
│  🖨️      │                                      │
│  Print   │                                      │
│          │                                      │
│  🧬      │                                      │
│  Assay   │                                      │
│  Pack    │                                      │
│          │                                      │
├──────────┴──────────────────────────────────────┤
│  [저장되지 않은 변경사항]            [저장] │
└─────────────────────────────────────────────────┘
```

---

## 3. 탭 구조

### 3.1 탭 목록

| 탭 ID | 아이콘 | 라벨 | 서브탭 | 설명 |
|------|-------|------|--------|------|
| general | ⚙️ | General | 기능별 권한 설정 | 일반 설정 및 권한 관리 |
| display | 🖥️ | Display Setting | Target on/off<br>Developer Setting<br>Negative C(t) Value | 화면 표시 관련 설정 |
| export | 📤 | Export | HL7 Transfer Setting<br>HL7 Abbreviation Setting | 데이터 내보내기 설정 |
| print | 🖨️ | Print | - | 인쇄 설정 |
| assay | 🧬 | Assay Pack | - | Assay Pack 관리 |

---

## 4. 각 탭별 상세 설계

### 4.1 General 탭

#### 4.1.1 메인 설정

| 설정 항목 | UI 타입 | 옵션/범위 | 기본값 | 필수 | 설명 |
|----------|---------|----------|--------|------|------|
| Language | 드롭다운 | 미정 | 미정 | Y | 소프트웨어 언어 설정 |
| PCR Raw Data Type | 드롭다운 | 미정 | 미정 | Y | PCR 장비 SW 설정 |
| Data Loading Methods | 다중선택 버튼 | Manual, Preset, LIMS, CSV, Barcode | Manual | Y | 데이터 불러오기 방식 |
| Plate Barcode | 토글 | ON/OFF | OFF | N | 플레이트 바코드 사용 여부 |
| Plate Setting File | 드롭다운 | None, 미정 | None | N | 플레이트 설정 파일 |
| CSV File Open Option | 라디오 버튼 | Sample No, 미정 | Sample No | N | CSV 파일 열기 옵션 |
| Sample ID | 라디오 버튼 | PLRN, PLTN, 미정 | PLRN | Y | 샘플 ID 형식 |
| Target Abbreviation | 토글 | ON/OFF | OFF | N | Target 약어 사용 |
| Open PCR Data File Folder Path | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | PCR 데이터 파일 경로 |
| Open LIMS File Folder Path | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | LIMS 파일 경로 |
| Export Folder Path | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | 내보내기 폴더 경로 |
| Save Folder Path | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | 저장 폴더 경로 |
| Save Work List Folder Path | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | Work List 저장 경로 |

#### 4.1.2 Data Loading Methods 규칙
- **다중 선택 가능**: Manual, Preset, LIMS, CSV, Barcode
- **제약 조건**:
  - LIMS와 CSV는 동시 선택 불가 (상호 배타적)
  - Barcode는 단독 선택 불가 (다른 방식 중 최소 1개 선택 필요)
- **UI 표현**: 
  - 선택된 버튼: 파란색 배경
  - 규칙 위반 시: 경고 메시지 표시
  - 정보 아이콘(ℹ️) 호버 시 규칙 툴팁 표시

#### 4.1.3 서브탭: 기능별 권한 설정
- 상세 내용: 미정

---

### 4.2 Display Setting 탭

#### 4.2.1 메인 설정

| 설정 항목 | UI 타입 | 옵션/범위 | 기본값 | 필수 | 설명 |
|----------|---------|----------|--------|------|------|
| Result View | 라디오 버튼 | Simple, Detailed, 미정 | Simple | Y | 결과 표시 방식 |
| Well Table | 라디오 버튼 | 세로, 가로 | 세로 | Y | Well 테이블 방향 |
| Result Display | 라디오 버튼 | Plain Text, 미정 | Plain Text | Y | 결과 표시 형식 |
| C(t) Value Digit | 라디오 버튼 | Two Decimal Digit, 미정 | Two Decimal Digit | Y | C(t) 값 소수점 자릿수 |
| Sample Index Setting | 라디오 버튼 | Enable, Disable | Enable | Y | 샘플 인덱스 설정 |
| Display Positive when IC Negative | 토글 | ON/OFF | OFF | N | IC Negative일 때 Positive 표시 |
| Invalidate when PCN/C Invalid | 토글 | ON/OFF | OFF | N | PCN/C Invalid일 때 무효 처리 |

#### 4.2.2 서브탭

**1) Target on/off**
- 상세 내용: 미정
- 변경 시 분석 탭 닫힘 경고 표시

**2) Developer Setting**
- 상세 내용: 미정

**3) Negative C(t) Value**
- 상세 내용: 미정

---

### 4.3 Export 탭

#### 4.3.1 서브탭: HL7 Transfer Setting

| 설정 항목 | UI 타입 | 옵션/범위 | 기본값 | 필수 | 설명 |
|----------|---------|----------|--------|------|------|
| HL7 Version | 드롭다운 | 2.5.1, 미정 | 2.5.1 | Y | HL7 버전 |
| Transfer Items | 체크박스 | Result, C(t) Value, Melt Temp | Result, C(t) Value | N | 전송 항목 |
| Sample to Export | 라디오 버튼 | All Samples, 미정 | All Samples | Y | 내보낼 샘플 범위 |
| Transfer Protocol | 라디오 버튼 | HTTP, 미정 | HTTP | Y | 전송 프로토콜 |
| Server IP | 텍스트 입력 | IP 주소 | 빈 값 | N | 서버 IP 주소 |
| Server Port | 텍스트 입력 | 포트 번호 | 빈 값 | N | 서버 포트 |
| Transfer Method | 라디오 버튼 | all-at-once, 미정 | all-at-once | Y | 전송 방법 |
| Response Timeout | 텍스트 입력 | 밀리초 | 30000 | Y | 응답 대기 시간 |

#### 4.3.2 서브탭: HL7 Abbreviation Setting

**레이아웃**: 2열 구조

**좌측: Assay 목록**

| 컬럼명 | 타입 | 편집 가능 | 설명 |
|--------|------|----------|------|
| ASSAY NAME | 텍스트 | N | Assay 이름 |
| INTENDED USE | 배지 | N | 용도 (IVD, RUO, LDT) |
| ASSAY CODE | 텍스트 입력 | Y | HL7 전송용 약어 코드 |

- 검색 기능: 상단 검색창으로 Assay 필터링
- 행 선택: 클릭 시 우측에 Target 목록 표시

**우측: Target 목록** (선택된 Assay의)

| 컬럼명 | 타입 | 편집 가능 | 설명 |
|--------|------|----------|------|
| CHANNEL | 텍스트 | N | 채널명 |
| DYE | 배지 | N | 형광 염료 |
| TARGET | 텍스트 | N | Target 이름 |
| TARGET CODE | 텍스트 입력 | Y | HL7 전송용 약어 코드 |

- Assay 미선택 시: 안내 메시지 표시

#### 4.3.3 기타 Export 설정

| 설정 항목 | UI 타입 | 옵션/범위 | 기본값 | 필수 | 설명 |
|----------|---------|----------|--------|------|------|
| Auto Export | 토글 | ON/OFF | OFF | N | 자동 내보내기 |
| Export Format | 드롭다운 | XLSX, 미정 | XLSX | Y | 내보내기 파일 형식 |
| Target Alignment Method | 라디오 버튼 | 세로, 가로 | 세로 | Y | Target 정렬 방식 |
| Melt Temperature Column | 토글 | ON/OFF | OFF | N | Melt Temperature 컬럼 포함 |
| Use Raw Data Filename | 토글 | ON/OFF | ON | N | Raw Data 파일명 사용 |
| Use Prefix | 토글 | ON/OFF | OFF | N | 접두사 사용 |
| Prefix Type | 드롭다운 | A, 미정 | A | N | 접두사 타입 |
| Create New Folder | 토글 | ON/OFF | OFF | N | 새 폴더 생성 |
| Folder Name Type | 드롭다운 | A, 미정 | A | N | 폴더명 타입 |

---

### 4.4 Print 탭

| 설정 항목 | UI 타입 | 옵션/범위 | 기본값 | 필수 | 설명 |
|----------|---------|----------|--------|------|------|
| Print Range | 라디오 버튼 | All Samples, 미정 | All Samples | Y | 인쇄 범위 |
| Print Items | 체크박스 | Number, Sample ID, 미정 | Number, Sample ID | N | 인쇄 항목 |
| Logo File | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | 로고 파일 |
| Add Logo to Print | 토글 | ON/OFF | OFF | N | 로고 인쇄 포함 |
| Logo Print Location | 라디오 버튼 | Top Left, 미정 | Top Left | N | 로고 인쇄 위치 |
| Watermark File | 텍스트 입력 + 버튼 | 파일 경로 | 빈 값 | N | 워터마크 파일 |
| Add Watermark to Print | 토글 | ON/OFF | OFF | N | 워터마크 인쇄 포함 |
| Watermark Layout | 라디오 버튼 | 1x1, 2x2, 3x3, 4x3, 3x4, 4x4, 5x5 | 1x1 | N | 워터마크 반복 배치 |

**조건부 표시**:
- Logo Print Location: Add Logo to Print가 ON일 때만 표시
- Watermark Layout: Add Watermark to Print가 ON일 때만 표시 (노란색 배경 강조)

---

### 4.5 Assay Pack 탭

#### 4.5.1 화면 구조

```
┌────────────────────────────────────────────────┐
│ [🔍 검색창]                    [➕ Assay Pack 추가] │
├────────────────────────────────────────────────┤
│                                                │
│  Assay Pack 목록 테이블                         │
│                                                │
└────────────────────────────────────────────────┘
```

#### 4.5.2 검색 기능
- **위치**: 상단 좌측
- **검색 범위**: Assay Name, 제조사, Version
- **동작**: 입력 즉시 필터링 (실시간 검색)

#### 4.5.3 Assay Pack 목록 테이블

| 컬럼명 | 너비 | 타입 | 편집 가능 | 정렬 | 설명 |
|--------|------|------|----------|------|------|
| Assay Name | 30% | 텍스트 | N | 미정 | Assay Pack 이름 |
| Intended Use | 15% | 배지 | N | 미정 | 사용 목적 (IVD/RUO/LDT) |
| Version | 12% | 텍스트 (monospace) | N | 미정 | 버전 번호 |
| 제조사 | 18% | 텍스트 | N | 미정 | 제조사명 |
| Install Date | 15% | 날짜 | N | 미정 | 설치 날짜 (YYYY-MM-DD) |
| 삭제 | 10% | 버튼 | - | - | 삭제 버튼 |

**Intended Use 배지 색상**:
- IVD: 초록색 (#dcfce7 / #166534)
- RUO: 파란색 (#e0e7ff / #3730a3)
- LDT: 노란색 (#fef3c7 / #92400e)

**행 동작**:
- 클릭: 선택 상태 표시 (파란색 배경)
- 삭제 버튼: 확인 후 해당 Assay Pack 삭제

**샘플 데이터**:

| Assay Name | Intended Use | Version | 제조사 | Install Date |
|-----------|-------------|---------|--------|--------------|
| Allplex SARS-CoV-2 | IVD | 1.0.0 | Seegene | 2024-01-15 |
| Allplex Respiratory Panel 1 | IVD | 2.1.0 | Seegene | 2024-02-20 |
| Allplex GI-Bacteria | IVD | 1.5.2 | Seegene | 2024-03-10 |
| GenePlex COVID-19 Detection Kit | RUO | 1.2.0 | new-co | 2024-04-15 |
| GenePlex Influenza Panel | IVD | 2.0.1 | new-co | 2024-05-20 |
| GenePlex STI Panel | IVD | 1.8.0 | new-co | 2024-06-10 |

#### 4.5.4 Assay Pack 추가 모달

**트리거**: 우측 상단 "➕ Assay Pack 추가" 버튼 클릭

**모달 레이아웃**: 500px 중앙 팝업

**입력 필드**:

| 필드명 | UI 타입 | 필수 | 검증 규칙 | 플레이스홀더 |
|--------|---------|------|----------|-------------|
| Assay Name | 텍스트 입력 | Y | 빈 값 불가 | 예: Allplex SARS-CoV-2 |
| Intended Use | 라디오 버튼 | Y | IVD, RUO, LDT 중 선택 | - |
| Version | 텍스트 입력 | Y | 빈 값 불가 | 예: 1.0.0 |
| 제조사 | 텍스트 입력 | Y | 빈 값 불가 | 예: Seegene |
| Install Date | 날짜 입력 | Y | 빈 값 불가 | YYYY-MM-DD |

**버튼**:
- 취소: 모달 닫기, 입력 내용 초기화
- 추가: 필수 항목 검증 후 목록에 추가

**검증**:
- 모든 필수 항목 입력 확인
- 미입력 시: "모든 필수 항목을 입력해주세요." 경고 표시

---

## 5. 공통 UI 요소

### 5.1 Footer 영역

**위치**: 설정 콘텐츠 하단 고정

**구성**:
- 좌측: 상태 메시지
  - 저장되지 않은 변경사항: "● 저장되지 않은 변경사항" (주황색)
  - 저장 완료: "✓ 설정 변경이 완료되었습니다" (초록색, 2초 후 자동 사라짐)
- 우측: [저장] 버튼
  - 비활성 상태: 변경사항 없을 때 회색
  - 활성 상태: 변경사항 있을 때 파란색

### 5.2 경고 팝업

#### 5.2.1 저장되지 않은 변경사항 경고

**트리거**: 변경사항 있는 상태에서 다른 탭 클릭

**메시지**:
```
⚠️ 저장되지 않은 변경사항

현재 탭에 저장되지 않은 변경사항이 있습니다.
저장하지 않고 이동하면 변경 내용이 사라집니다.
```

**버튼**:
- 취소: 팝업 닫기
- 저장 안 함: 변경사항 무시하고 탭 이동
- 저장 후 이동: 변경사항 저장 후 탭 이동

#### 5.2.2 분석 탭 닫힘 경고

**트리거**: 분석 탭에 영향을 주는 설정 변경 후 저장 시

**영향을 주는 설정**:
- PCR Raw Data Type
- Sample ID
- Result View
- C(t) Value Digit
- Sample Index Setting
- Target on/off

**메시지**:
```
🔔 분석 탭 닫힘 안내

변경된 설정을 적용하면 현재 열려있는
모든 분석 탭이 닫힙니다.

변경된 설정 항목:
• [변경된 설정 목록]
```

**버튼**:
- 취소: 저장 취소
- 확인 후 저장: 분석 탭 닫기 후 설정 저장

#### 5.2.3 Assay Pack 삭제 확인

**트리거**: Assay Pack 목록에서 삭제 버튼 클릭

**메시지**: "선택한 Assay Pack을 삭제하시겠습니까?"

**버튼**:
- 확인: 삭제 실행
- 취소: 삭제 취소

---

## 6. UI/UX 규칙

### 6.1 컬러 스킴

| 요소 | 색상 코드 | 용도 |
|------|----------|------|
| Primary | #3b82f6 | 버튼, 링크, 선택 상태 |
| Success | #10b981 | 성공 메시지, IVD 배지 |
| Warning | #f59e0b | 경고 메시지, LDT 배지 |
| Danger | #ef4444 | 삭제, 오류 메시지 |
| Info | #6366f1 | RUO 배지, 정보 |
| Gray | #6b7280 | 비활성, 보조 텍스트 |
| Background | #f3f4f6 | 배경 |

### 6.2 버튼 스타일

| 타입 | 배경색 | 텍스트색 | 용도 |
|------|--------|----------|------|
| Primary | #3b82f6 | #ffffff | 주요 액션 |
| Secondary | #e5e7eb | #374151 | 보조 액션 |
| Danger | #ef4444 | #ffffff | 삭제, 취소 |

### 6.3 토글 스위치

- OFF 상태: #d1d5db (회색)
- ON 상태: #3b82f6 (파란색)
- 라벨 표시: ON/OFF 텍스트

### 6.4 라디오 버튼

- 미선택: 흰색 배경, 회색 테두리
- 선택: 파란색 배경, 흰색 텍스트
- 레이아웃: 가로 나열

### 6.5 체크박스

- 미선택: 빈 사각형
- 선택: 파란색 체크마크

### 6.6 입력 필드

- 기본: 흰색 배경, 회색 테두리 (#d1d5db)
- 포커스: 파란색 테두리 (#3b82f6)
- 읽기 전용: 회색 배경 (#f3f4f6)

### 6.7 조건부 표시 영역

- 배경색: 노란색 (#fef3c7)
- 들여쓰기로 시각적 구분

---

## 7. 상호작용 및 동작

### 7.1 저장 로직

1. 사용자가 설정 변경
2. `hasUnsavedChanges` 플래그 활성화
3. Footer에 "저장되지 않은 변경사항" 표시
4. [저장] 버튼 클릭
5. 분석 탭 영향 설정 확인
   - 영향 있음: 분석 탭 닫힘 경고 표시
   - 영향 없음: 즉시 저장
6. 저장 완료 후 성공 메시지 표시 (2초)

### 7.2 탭 전환 로직

1. 사용자가 다른 탭 클릭
2. 변경사항 확인
   - 변경사항 있음: 저장 확인 팝업 표시
   - 변경사항 없음: 즉시 탭 전환
3. 선택한 탭 하이라이트 표시

### 7.3 검색 기능

- **Assay Pack 검색**: 입력 즉시 필터링
- **HL7 Abbreviation 검색**: 입력 즉시 필터링
- 대소문자 구분 없음
- 부분 일치 검색

### 7.4 파일 선택

- 📂 버튼 클릭 시 파일 탐색기 열림
- 선택된 경로는 텍스트 입력 필드에 표시
- 입력 필드는 읽기 전용

---

## 8. 데이터 유효성 검증

### 8.1 필수 입력 검증

| 설정 항목 | 검증 규칙 | 오류 메시지 |
|----------|----------|-------------|
| Language | 빈 값 불가 | 미정 |
| PCR Raw Data Type | 빈 값 불가 | 미정 |
| Data Loading Methods | 최소 1개 선택 | "하나 이상의 방식을 선택해야 합니다" |
| Sample ID | 빈 값 불가 | 미정 |
| Result View | 빈 값 불가 | 미정 |

### 8.2 비즈니스 규칙 검증

| 규칙 | 오류 메시지 |
|------|-------------|
| LIMS와 CSV 동시 선택 불가 | "LIMS와 CSV는 동시에 선택할 수 없습니다" |
| Barcode 단독 선택 불가 | "Barcode는 다른 방식과 함께 선택해야 합니다" |

### 8.3 형식 검증

| 항목 | 형식 | 예시 |
|------|------|------|
| Server IP | IPv4 주소 | 192.168.0.1 |
| Server Port | 숫자 (1-65535) | 8080 |
| Response Timeout | 숫자 (밀리초) | 30000 |
| Install Date | YYYY-MM-DD | 2024-01-15 |
| Version | 미정 | 1.0.0 |

---

## 9. 접근성 및 사용성

### 9.1 키보드 네비게이션
- Tab 키: 포커스 이동
- Enter 키: 버튼 클릭, 선택 확인
- Esc 키: 팝업 닫기
- 화살표 키: 라디오 버튼 선택 이동 (미정)

### 9.2 툴팁
- 정보 아이콘(ℹ️) 호버 시 규칙 설명 표시
- 툴팁 배경: 검은색 반투명
- 툴팁 위치: 아이콘 상단 또는 하단

### 9.3 로딩 상태
- 저장 중: 미정
- 데이터 로드 중: 미정

### 9.4 반응형 디자인
- 최소 너비: 미정
- 작은 화면에서의 동작: 미정

---

## 10. 기술 스택

- **프레임워크**: React 18.2.0
- **빌드 도구**: Vite 5.4.21
- **스타일링**: CSS-in-JS (인라인 스타일)
- **상태 관리**: React useState Hook
- **개발 서버**: http://localhost:3000 (또는 3001)

---

## 11. 향후 개선 사항

### 11.1 미정 사항
- General 탭의 "기능별 권한 설정" 서브탭 상세 내용
- Display Setting 탭의 서브탭 상세 내용
- 각 드롭다운의 전체 옵션 목록
- 정렬 기능 (Assay Pack 테이블)
- 키보드 네비게이션 상세 동작
- 로딩 상태 UI
- 반응형 디자인 규칙
- 다국어 지원 범위

### 11.2 잠재적 기능
- Assay Pack 가져오기/내보내기
- 설정 프로필 저장/불러오기
- 설정 변경 이력 관리
- 사용자별 설정 권한 관리
- 설정 초기화 기능
- 설정 검색 기능 (전체 설정에서 키워드 검색)

---

## 12. 변경 이력

| 버전 | 날짜 | 작성자 | 변경 내용 |
|------|------|--------|----------|
| 1.0 | 2024-12-23 | 미정 | 초안 작성 |

---

## 부록 A. 용어 정의

| 용어 | 설명 |
|------|------|
| PCR | Polymerase Chain Reaction (중합효소 연쇄 반응) |
| LIMS | Laboratory Information Management System |
| CSV | Comma-Separated Values (쉼표로 구분된 값) |
| HL7 | Health Level 7 (의료 정보 교환 표준) |
| IVD | In Vitro Diagnostic (체외 진단) |
| RUO | Research Use Only (연구용) |
| LDT | Laboratory Developed Test (실험실 개발 검사) |
| C(t) | Cycle threshold (역치 사이클) |
| PLRN | Plate-Row-Number (플레이트-행-번호) |
| PLTN | Plate-Tube-Number (미정) |

---

**문서 끝**
