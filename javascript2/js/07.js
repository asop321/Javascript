const btns = document.querySelectorAll(".list li");
/* 
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.preventDefault();
        console.log(i);
    });
};
 */

/* 
for (let btn of btns) {
    btn.addEventListener('click', (e) => {
        console.log(e.currentTarget);
    })
} 
*/
btns.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
        //contains() 해당요소에 클래스 on이 있다면 true 나 false 를 반환
        let isOn = e.currentTarget.classList.contains("on");
        if(isOn) return;//강제중지
        // console.log(index)
        //on을 다 제거
        for (let item of btns)item.classList.remove("on");

        //클릭한 순간 on추가
        btns[index].classList.add("on");
    })
});