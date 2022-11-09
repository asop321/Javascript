/* 
    변수의 유효범위 (scope)
    1.전역변수 (window)
    -- 코드블록 밖에서 선언된 변수
    -- 해당 코드 전역에 걸쳐서 접근 가능
    -- 여러개의 서로 다른 함수들이 같은 값을 공유해야 될때 전역변수 사용
    -- 전역변수가 많아지면 전역변수 오염이 발생 (꼭 필요한 경우에만 사용)
    
    2.지역변수 (코드블록)
    -- 코드블럭 안쪽에서 선언된 변수
    -- 해당 코드블록 안에서만 접근가능
    -- 변수값이 해당 코드블록 안에서만 전용 써야 될때 사용

    3.호이스팅 (hoisting)
    -- 블록 안에서 선언된 지역 변수가 코드블록 밖으로 끌어 올라가지면서
    강제로 전역변수화 되는 현상

    4.ES5버전에서의 var 변수 선언방식의 호이스팅 문제 해결법
*/

//호이스팅 확인과 방지
const btns = document.querySelectorAll("ul li");

for (var i = 0; i < btns.length; i++) {
    ((index) => {
        btns[index].addEventListener('click', () => {
            console.log(index);
        });
    })(i)

};

/* 
//전역변수,지역변수의 이해
var num = null;
function test() {
    num = 5;//지역변수
    console.log(num);
};
test();
console.log(num);


//반복 요소 let 변수로 이벤트 연결
const btns = document.querySelectorAll("ul li");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', () => {
        console.log(i);
    })
}; 
*/