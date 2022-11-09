/* 
    keydown : 특정 키를 누르고 있을때
    keyup : 특정 키를 누르다 손을 땔때
    keypress : 키를 누를고 있을때 (문자관련 키만 동작)
*/

/* 
window.addEventListener('keydown', (e) => {
    console.log("keydown");
});
 */

window.addEventListener('keyup', (e) => {
    console.log("keyup");
    const keyName = e.key;
    console.log(`${keyName}를 눌렀습니다`)
});

