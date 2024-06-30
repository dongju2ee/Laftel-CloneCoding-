# Laftel-CloneCoding
### 💻 프로젝트 소개

- 개인 프로젝트
- HTML, CSS, JavaScript를 공부하기 위해 스스로 개발한 라프텔 클론 코딩 프로젝트입니다.
<br/><br/>

## ⏰ 개발기간

2024.06.04 ~ 2024.06.21

개발 커밋 - 11일
<br/><br/>

## ⚙️ 개발환경

`HTML`, `JavaScript`, `CSS`

개발 도구 - VScode
<br/><br/>

## 📄 페이지 구현
- 메인 페이지
- 회원가입 페이지
- 태그검색 페이지
- 요일별 신작 페이지
- 테마추천 페이지
- 멤버십 페이지

### 메인 페이지

<!-- ![2024-06-24222932-ezgif com-video-to-gif-converter](https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/52a98d88-4778-4971-8436-d67d7a5525c9) -->
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/52a98d88-4778-4971-8436-d67d7a5525c9" width="800" height="350"/>
<br/><br/>
gif 파일입니다
- 3초마다 자동으로 슬라이드가 전환되는 JavaScript 코드를 구현
- CSS의 `opacity`와 `transition` 속성을 사용하여 세 개의 이미지가 부드럽게 전환 
<br/><br/>
<!-- ![스크린샷 2024-06-25 164043](https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/46791c51-ffc6-45d2-af8a-83606466b3b3) -->
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/46791c51-ffc6-45d2-af8a-83606466b3b3" width="800" height="350"/>
<br/><br/>

- 각 요일의 버튼을 클릭하면 해당 요일의 신작을 확인할 수 있고, 선택된 요일 버튼은 색상이 변하여 시각적으로 강조
-  jQuery, Slick Carousel을 이용하여 5개의 이미지가 보이는 슬라이드 쇼를 구현
- 양옆에 버튼을 추가하여 여러 이미지를 쉽게 볼 수 있음
- `slidesToShow`, `slidesToScroll`, `autoplay`, `autoplaySpeed` 등의 옵션을 JavaScript 객체로 지정하여 슬라이드의 동작 방식을 제어
- `responsive` 속성을 사용해 반응형 설정을 추가
<br/><br/>

<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/a5696f14-0a85-45d3-ae65-953db0d64427" width="800" height="350"/>
<br/><br/>

- Modal.js를 구현 → "업로드 공지" 버튼을 누르면 공지가 화면 가운데에 뜸
<br/><br/>

### 태그검색 페이지
<!-- ![스크린샷 2024-06-25 164412](https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/e814df07-04ca-4d37-bac8-5b7f1a85cb03) -->
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/e814df07-04ca-4d37-bac8-5b7f1a85cb03" width="800" height="350"/>
<br/><br/>

- 페이지를 왼쪽과 오른쪽으로 나누는 두 개의 `<div>`를 정의
- 왼쪽 `<div>`에는 필터 검색을 위한 여러개의 체크박스와 스크롤바를 구현
<br/><br/>

### 요일별 신작 페이지
<!-- ![스크린샷 2024-06-25 164513](https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/d92133c9-4034-4f82-bbd0-4ed4e3b5bc54) -->
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/d92133c9-4034-4f82-bbd0-4ed4e3b5bc54" width="800" height="350"/>
<br/><br/>

- 오늘의 요일을 받아오는 JavaScript를 구현
- 해당 요일의 `<div>`의 배경색만 변경됨
<br/><br/>

### 테마추천 페이지
<!-- ![스크린샷 2024-06-25 164556](https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/7427839b-c87d-41d8-a45d-72602fcdc384) -->
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/e8b38290-0ba8-4a74-a800-c2551f3301f8" width="800" height="350"/>
<br/><br/>

- 이미지와 설명을 보기 쉽게 구성하기 위해 `<figure>` 요소를 사용
- `<figure>` 요소 내부에 `<img>`와 `<figcaption>`을 포함하여 이미지와 설명을 함께 표시
<br/><br/>

### 멤버십 페이지
<!-- ![2024-06-25182901-ezgif com-video-to-gif-converter](https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/5c4373af-b539-428a-83e1-a5e684f4ec61) -->
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/5c4373af-b539-428a-83e1-a5e684f4ec61" width="800" height="350"/>

gif 파일입니다
- `z-index`를 사용해 동영상 위에 버튼의 위치를 조정
- 속도가 다른 두 개의 슬라이드 쇼를 구현하여 여러 개의 이미지를 볼 수 있음   
- 하단에 스크롤로 도달하면 밑에서 위로 글과 이미지가 나타나는 애니메이션 효과 구현
<br/><br/>

### 반응형
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/9cc566cf-b9bb-4ed4-b073-9c968b8027e9" width="800" height="300"/>
<img src="https://github.com/dongju2ee/Laftel_CloneCoding/assets/171718522/e41618b8-78c6-4f2a-b90c-56a5ffa8ac28" width="800" height="300"/>
<br/><br/>

- '@media (min-width: 768px) and (max-width: 992px)'를 사용하여 특정 화면 크기 범위에 대한 CSS를 작성
- 화면 크기에 따라 레이아웃과 스타일을 조정
<br/><br/>