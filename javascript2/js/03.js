/* 
  이벤트 발생시 연결된 인수로 전달되는 이벤트 객체
  preventDefault() : 이벤트를 막아줌
*/

const a = document.querySelector("a");
a.addEventListener('click', (event) => {
  event.preventDefault();
  console.log("you clicked");
});

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  console.log(e);
  console.log(`현재 마우스 x축 위치 : ${e.pageX}`);//브라우저기준
  console.log(`현재 마우스 y축 위치 : ${e.pageY}`);//브라우저기준
  console.log(`offsetX : ${e.offsetX}`);//박스기준
  console.log(`offsetY : ${e.offsetY}`);//박스기준
});

window.addEventListener("scroll", (e) => {
  console.log(e);
});

window.addEventListener("mousewheel", (e) => {
  console.log(e.deltaY);

  if (e.deltaY > 0) {
    console.log("wheel down");
  };
  if (e.deltaY < 0) {
    console.log("wheel up");
  };
});