// // stack memory
// let numOne = 50;
// console.log(numOne);
// let numTwo = numOne;
// console.log(numTwo);

// numOne = 10;
// console.log(numOne);
// // numtwo value ma change buu
// console.log(numTwo);

// // heap memory
// let arr1 = ["a","b"];
// console.log(arr1);
// let arr2 = arr1;
// console.log(arr2);

// arr1[2]="c";
// console.log(arr1);
// // arr2 value change twr tl
// console.log(arr2);

// let obj1 = {a:"a",b:"b"}
// let obj2 = obj1;

// console.log(obj1);
// console.log(obj2);

// obj1.c = "c";
// console.log(obj1);
// console.log(obj2);

// let obj = {name:"orange" , price:150};
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// obj.price = 200;
// obj.color = "orange";
// console.log(obj);

// const obj = {};
// obj.a = "a";
// obj.b = "b";
// obj.c = "c";
// obj.a = "aa";
// console.log(obj)

// function run(){
//     console.log("hello")
//     console.log("hello1")
//     return "this is run"
//     console.log("hello2")
// }

// console.log(run())

// function inchesToFeet(inches=0){
//     // console.log(inches);
//     return inches /12 + "ft";
// }

// console.log(inchesToFeet(100));
// console.log(inchesToFeet());

// function calcArea(width=0,breadth=0){
//     console.log(arguments);
//     return (width * breadth) + "sqft";
// }
// console.log(calcArea(40,60));
// console.log(calcArea());

// const run = function(){
//     return "this is run";
// }
// console.log(run());

// (function(){
//     console.log("this is iife");
// })();

// let bdYear = 2002;
// let currentYear = 2022;
// // let text = `my age is ${currentYear - bdYear}`;
// let text = `my age is ${(function(){
//     return currentYear - bdYear;
// })()}`
// console.log(text);

// function showResultInSquareFeet(input){
//     return input + "sqft";
// }
// function calcArea(width=0,breadth=0){
//     // console.log(arguments);
//     return showResultInSquareFeet(width * breadth);
// }
// console.log(calcArea(40,60));

// function a(){
//     let a = "a";
//     console.log(a)
// }
// console.log(a);
// a();

// {
//     let a = "a";
//     console.log(a);
// }
// console.log(a);

// console.log(a);
// var a = "a";

// console.log(run())
// const run = function(){
//     return "run";
// }
// console.log(st())
// function st(){
//     return "st";
// }

// const obj = {
//     a : "a",
//     b : "b",
//     c : function(){
//         console.log(this.a);
//         return "this is c";
//     },
//     d(){
//         return "this is d"
//     }
// }
// console.log(obj.c());
// console.log(obj["c"]());
// console.log(obj.a);
// console.log(obj["a"]);

// if(true){
//     console.log("true")
// }else{
//     console.log("false")
// }
// 5 > 10 ? console.log("true") : console.log("false");

// function canIVote(operator,bill){
//     if(operator === "ooredoo" && bill >=15){
//         return ("you can vote mmidol")
//     }
//     return false;
// }
// console.log(canIVote("mpt",15));
// console.log(canIVote("ooredoo",15));
// console.log(canIVote("atom",15));

// function pickABus(busNo){
//     if(busNo === 60 || busNo === 50 || busNo === 40){
//         return "reach";
//     }return false;
// }
// console.log(pickABus(60));
// console.log(pickABus(20));
// console.log(pickABus(50));

// let news = true;
// console.log(news);
// let mwd = !news;
// console.log(mwd);

// let i = true;
// i = !i;
// console.log(i ? "open" : "close");
// i = !i;
// console.log(i ? "open" : "close");
// i = !i;
// console.log(i ? "open" : "close");

// for(let i = 1; i <=3; i++){
//     console.log("work 1");
//     console.log("work 2");
//     console.log("work 3");
//     console.log("======");
// }

// let i = 1;
// while (i<=3){
//     console.log("work 1");
//     console.log("work 2");
//     console.log("======");
//     i++;
// }

// function numberToStar(number){
//     let result = "";
//     for(let i=1; i<=number; i++){
//         result += "* ";
//     }
//     return result;
// }
// for (let i=1; i<=6; i++){
//     console.log(numberToStar(i))
// }
// console.log("=============================");
// for (let i=6; i>=1; i--){
//     console.log(numberToStar(i))
// }


// function numberToStar(number){
//     let result = "";
//     for(let i=1; i<=number; i++){
//         result += "* ";
//     }
//     return result;
// }
// function looper(max){
//     for(let i = 1; i <=max; i++){
//         console.log(numberToStar(i));
//     }
//     return true;
// }
// looper(5);
// looper(3);
// looper(15);

//    function numberToStar(number){
//         let result = "";
//         for(let i=1; i<=number; i++){
//             result += "* ";
//         }
//         return result;
//     }
//     function looper(start,end){
//         if(start < end){
//             for(let i = start; i <=end; i++){
//                 console.log(numberToStar(i));
//                 }
//         }else{
//             for(let i = start; i >=end; i--){
//                 console.log(numberToStar(i));
//                 }
//         }
//     }
//     looper(1,5);
//     looper(5,1);

// function numberToStar(number,end){
//     let result = "";

    // for(let i=1; i<=number; i++){
    //     if(i%2){
    //         result += "* ";
    //     }else{
    //         result += "= ";
    //     }
    // }

//     for(let i=1; i<=end; i++){
//         if(number%2){
//             result += i%2 ? "* " : "= ";
//         }else{
//             result += i%2 ? "= " : "* ";
//         }
//     }
//         return result;
// }
// function run(end){
//     for(let i=1; i<=end; i++){
//         console.log(numberToStar(i,end));
//     }
// }
// run(10)

// console.log(numberToStar(5))
// console.log(numberToStar(4))
// for(let i=1; i<=6; i++){
//     console.log(numberToStar(7));
//     console.log("============")
// }

