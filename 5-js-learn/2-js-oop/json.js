// web-AudioParam.html nat chate htr 

const text = '{"name": "khine","age": 20,"gender": "female","status": false}';
// JSON TO OBJ 
// console.log(JSON.parse(text).age);

// OBJ TO JSON 
// const obj = {a:"a", b:"b", c:undefined, d:null};
// console.log(JSON.stringify(obj));

// const btn = document.querySelector(".btn");
// btn.addEventListener("click",run);
// XMLHTTPREQUEST
// function run(){
// // const url = "http://127.0.0.1:5500/data.json";
// const url = "https://dummyjson.com/products";
// btn.innerHTML = `<button class="btn btn-primary" type="button" disabled>
// <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
// <span>Loading...</span>
// </button>`;

// const req =new XMLHttpRequest();
// req.open("GET",url);
// req.send();
// // req.addEventListener("loadstart",() => {
// //     btn.innerHTML = `<button class="btn btn-primary" type="button" disabled>
// //     <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
// //     <span class="visually-hidden">Loading...</span>
// //   </button>`;
// // });

// req.addEventListener("loadend",() => {
//     btn.innerHTML = "Reload";
// })
// req.addEventListener("load",(event) => {
//     console.log(JSON.parse(event.target.responseText));
// })
// }


// FETCH API 
// function run(){
//     // const url = "http://127.0.0.1:5500/data.json";
//     const url = "https://dummyjson.com/products";
//     btn.innerHTML = `<button class="btn btn-primary" type="button" disabled>
//     <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
//     <span>Loading...</span>
//     </button>`;
    
// fetch(url)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
//     btn.innerText = "Reload";
// });
// }

// METHOD CHAINING 
// const str = "abcdefg";
// console.log(str.substring(0,3).toUpperCase().split("").join("-"));

// const arr = [50,100,30];
// console.log(arr
//     .map(el => el / 10)
//     .filter(el => el<10)
//     .reduce((pv,cv) => pv+cv,0));

// const btn = document.querySelector(".btn");
// const run = () => {
//     navigator.geolocation.getCurrentPosition((position) =>{
//         console.log(position);
//         console.log(position.coords.latitude,position.coords.longitude);
//     })
// }
// btn.addEventListener("click",run);

const btn = document.querySelector(".btn");
const num = document.querySelector("#num");
if(localStorage.getItem("num")){
    num.innerText = localStorage.getItem("num");
}
const run = () => {
    const r = parseInt(num.innerText) + 1;
    localStorage.setItem("num",r);
    num.innerText = r;
}
btn.addEventListener("click",run);

const fruits = ["apple","orange","lemon"];
const obj = {a:"a",b:"b",c:"c"};

// ARRAY TWY OBJECT TWY SO USE LOX MA YA STRING PL PYA JSON CHANGE HMA YA 
localStorage.setItem("arr",fruits);
console.log(localStorage.getItem("arr"));
localStorage.setItem("obj",obj);
console.log(localStorage.getItem("obj"));

localStorage.setItem("arr",JSON.stringify(fruits));
console.log(JSON.parse(localStorage.getItem("arr")  ));
localStorage.setItem("obj",JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obj")  ));







  