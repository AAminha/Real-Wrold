## vercel 배포
https://real-wrold.vercel.app/

## 폴더 구조

### 1. assets 폴더

- 이미지, 비디오, json 파일 등 미디어 파일을 모아두는 폴더

### 2. components 폴더

- 공통 컴포넌트 관리 (Header, Footer, Nav 등)

### 3. pages 폴더

- 페이지 단위의 컴포넌트 폴더

### 4. styles 폴더

#### sass 사용 시

- reset.scss = css 초기화
- common.scss = 공통으로 사용하는 css 속성 정의

#### styled component 사용 시

- GlobalStyle.js = css 초기화
- theme.js = 공통으로 사용하는 css 속성 정의

### 5. services 폴더

- 자바스크립트 모듈을 담는 폴더

### 6. utils 폴더

- 상수나 공통 함수, 유틸리티를 담는 폴더

### 7. context 폴더

- context API로 프로젝트 작업 경우, 관련 API 담아놓는 폴더

### 8. hoc 폴더

- 함수형 컴포넌트를 사용하면서 커스텀 훅을 모듈화하여 담아놓는 폴더
