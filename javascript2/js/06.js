const a = document.querySelector("a");

//속성값을 구하고 싶을때
const a_href = a.getAttribute("href");
const a_title = a.getAttribute("title");
console.log(a_href);
console.log(a_title);
console.log(a.innerText);

//속성값을 변경하고 싶을때
a.setAttribute("href","https://www.nate.com");
a.setAttribute("target","_self");
a.setAttribute("title","네이트로이동");
a.innerText = "네이트";
