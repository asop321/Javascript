/* 
    이벤트가 발생한 대상 알아보기

    e.target : 
    이벤트가 발생했을때 마우스 포인터가 위치해있는 요소를 반환
    e.currentTarget :
    이벤트가 발생했을때 이벤트문상에서 선택자 요소를 반환
*/

const main = document.querySelector('main');

main.addEventListener('click', (e) => {
    //console.log(e.target);
    console.log(e.currentTarget);
});