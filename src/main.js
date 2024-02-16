// window = global object (브라우저에서 기본적으로 제공하는 객체 - 삭제가능)
// window.document.querySelector


// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  // 스크롤되는 Y 좌표가 headerHeight보다 크다면 다른 스타일링
  const y = window.scrollY;
  if (y > headerHeight) {
    // .header 클래스에 .header--dark 라는 클래스 추가
    header.classList.add('header--dark'); 
  } else {
    // .header 클래스에 .header--dark 라는 클래스 제거
    header.classList.remove('header--dark');
  }
})

// Home 섹션을 아래로 스크롤시 투명하게 처리함
// 스크롤시 투명도 Opacity 1(불투명)에서 0(완전투명)으로 
const home = document.querySelector('.home__container');
const homeHeight = home.offsetHeight;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})

// 홈 화면에서 Arrow-up 버튼 숨기기
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY < homeHeight / 2) {
    arrowUp.style.opacity = 0;
  } else {
    arrowUp.style.opacity = 1;
  }
})
