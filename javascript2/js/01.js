/* 

    자식요소 탐색 
    : 부모요소.querySelector() 부모요소.children

    형재요소 탐색
    이전형재요소 탐색 : 형제요소.previousElementSibling
    다음형재요소 탐색 : 형제요소.nextElementSibling 

    부모요소 탐색
    :현재요소.parentElement
    :현재요소.closest()  할아버지의 증조할아버지...

    유사배열
    : 배열처럼 보이지만 배열은 아닌 그룹요소

*/

const wrap = document.querySelector("#wrap");
const box2 = wrap.querySelector(".box2");
const children = wrap.children;
//자식요소
console.log(wrap);
console.log(box2);
console.log(children); //유사배열
console.log(children[0]); //유사배열

//형재요소
const prevEl = box2.previousElementSibling;
const nextEl = box2.nextElementSibling;
console.log(prevEl);
console.log(nextEl);

//부모요소
const a = box2.querySelector("a");
const parentEl = a.parentElement;
const grandParentEl = a.closest("#wrap");
console.log(parentEl);
console.log(grandParentEl);