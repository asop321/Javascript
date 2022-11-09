const box = document.querySelector(".box");

//스타일 속성 바꾸기
box.addEventListener('click', (e) => {
    e.currentTarget.style.backgroundColor = "hotpink";
    e.currentTarget.style.width = 200 + "px";
});

//스타일 속성 구하기
const box2 = document.querySelector(".box2");
box2.addEventListener('click', (e) => {
    const bg = getComputedStyle(e.currentTarget).backgroundColor;
    const wid = getComputedStyle(e.currentTarget).width;
    console.log(bg);
    console.log(wid);
});