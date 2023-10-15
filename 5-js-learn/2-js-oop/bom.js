// console.log(window);
// console.log(this);

// window.addEventListener("resize",() => {
//     console.log(window.innerWidth,window.innerHeight);
//     console.log(window.outerWidth,window.outerHeight);
// })

// window.addEventListener("scroll",() => {
//     console.log(window.scrollY);
// })

// window.addEventListener("online",() => console.log("you are online"));
// window.addEventListener("offline",() => console.log("you are offline"));

// const btn = document.querySelector("button");
// const run = (x,y) => {
//     console.log("i am setTimeout", x + y);
// };

// setTimeout(run,3000,1,1);
// const ts = setTimeout(run,3000,1,1);
// btn.addEventListener("click",() => clearTimeout(ts));

// setInterval(run , 3000 , 1,1)
// const it = setInterval(run , 3000 , 1,1);
// btn.addEventListener("click",() => clearInterval(it));


// const btn = document.querySelector(".btn");
// const h1 = document.querySelector("h1").getBoundingClientRect();
// // console.log(getComputedStyle(btn).width);
// // console.log(getComputedStyle(btn).height);
// // console.log(document.querySelector("h1").getBoundingClientRect());
// btn.addEventListener("click",() => {
//     scrollTo(0, h1.top - 100);
// });