# Settings Popup Application

React 기반 설정 팝업 애플리케이션입니다.

## 주요 기능

### 데이터 불러오기 방식 (다중 선택)
- **Manual**: Plate Setting을 수동으로 설정
- **Preset**: 저장된 Plate Setting 사용
- **LIMS(.plrn) 파일**: plrn 파일로 직접 불러오기
- **CSV**: CSV 파일로 불러오기
- **바코드로 불러오기**: Plate Barcode 스캔으로 불러오기

#### 다중 선택 규칙
- 여러 방식을 동시에 선택할 수 있습니다
- LIMS(.plrn)과 CSV는 동시에 선택할 수 없습니다
- 바코드만 단독으로 선택할 수 없습니다 (다른 방식과 함께 사용 필요)

### Export 설정
- **HL7 Transfer Setting**: HL7 전송 관련 설정
- **HL7 Abbreviation Setting**: Assay 및 Target 코드 설정

## 시작하기

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 을 열어 확인할 수 있습니다.

### 빌드
```bash
npm run build
```

## 파일 구조
- `src/SettingsPopup.jsx` - 다중 선택 최신 버전
- `src/SettingsPopup_v1_backup.jsx` - 작업 중인 버전 (백업)
- `src/main.jsx` - 애플리케이션 진입점

## 기술 스택
- React 18
- Vite
- CSS-in-JS
