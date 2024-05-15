// 스크롤 이벤트를 감지하여 main2와 main3 섹션을 만났을 때 secDiv의 opacity를 1로 변경
window.addEventListener("scroll", adjustOpacity);

function adjustOpacity() {
  // main2 섹션 요소 가져오기
  let main2Section = document.querySelector(".main2");
  // main3 섹션 요소 가져오기
  let main3Section = document.querySelector(".main3");
  // secDiv 요소 가져오기
  let secDiv = document.querySelector(".secDiv");

  // main2 섹션이 화면에 표시되는 영역의 상단 좌표
  let main2Position = main2Section.getBoundingClientRect().top;
  // main3 섹션이 화면에 표시되는 영역의 상단 좌표
  let main3Position = main3Section.getBoundingClientRect().top;
  // 윈도우의 높이
  let windowHeight = window.innerHeight;
  console.log(main3Position, windowHeight / 2);
  // main2 섹션이 화면에 보일 때
  if (main2Position < windowHeight / 2) {
    // secDiv의 opacity를 1로 변경
    secDiv.style.opacity = "1";
  }
  // main3 섹션이 화면에 보일 때
}