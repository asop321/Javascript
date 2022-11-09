/* 
    Event 
    : 무언가 일어나는 행위, 액션
    -- 사용자가 발생시키는 이벤트
      (click, mouseover, mousemove, mousewheel, scroll)
    -- 시스템이 발생시키는 이벤트
      (load, error ...)

    이벤트 연결 방법
    DOM.onlink = ()=>{}
    DOM.addEventListener = ('이벤트명',()=>{})

*/

const a = document.querySelector("a");
console.dir(a);

/* 
    1번
    a.onclick = () => {
        alert("you clicked!!");
}; 
*/

//2번
a.addEventListener('click', function () {
    alert("you clicked!!");

});