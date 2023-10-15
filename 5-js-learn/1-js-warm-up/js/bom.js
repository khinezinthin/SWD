// browser object model
// window
// input , output

// const input = window.prompt("num one",123);
// console.log(input);

// bool ==> true or false lo chin yin comfirm
// const input = window.confirm("ser pp lar");
// console.log(input, input ? "ser pp" : "ma ser ya ty buu");

// console.log(window);
// console.log(window.console , window.document , window.history , window.navigator);
// window.close();

// document ==> DOM (html,css, ko js nat control)
// document.write("<h1>min ga lar par</h1>");
// document.write("<h1 style=color:red>min ga lar par</h1>");

// select an element in DOM
// const heading = document.getElementById("heading");
// heading.innerText = "khine zin thin";
// heading.style.backgroundColor = "gray";
// heading.style.color = "pink";
// heading.style.padding = "20px";
// heading.style.fontSize = "40px";
// console.dir(heading);
// heading.remove();

// const para = document.getElementById("para");
// para.innerHTML = "new para";
// console.dir(para);

// const link = document.getElementById("link");
// console.log(link.innerText);
// link.href = "https://youtube.com";
// link.target = "_blank";
// link.kzt = "khine zin thin";
// link.setAttribute("kzt","khine zin thin");
// link.setAttribute("one","111");
// link.setAttribute("two","222");
// console.log(link.href);

// const myName = document.getElementById("myname");
// const myPassword = document.getElementById("mypassword");
// const mySalary = document.getElementById("mysalary");
// mySalary.valueAsNumber; input type ka number phit hma use
// myName.value ="kzt";
// console.dir(myName);
// console.dir(myName.value);

// function showAlert(){
//     alert("i am alert");
// }

// function run(){
// const myName = document.getElementById("myname"); 
// alert(myName.value);
// const heading = document.getElementById("heading");
// heading.innerText = myName.value;
// }

// function exchange(){
//     // select
//     const amount = document.getElementById("amount");
//     const to = document.getElementById("to");
//     const output = document.getElementById("output");

//     // calculation
//     let result = amount.valueAsNumber * to.value;

//     output.innerText = result + "mmk";
// }

// select
// html colletion tag name || class name
// const h1 = document.getElementsByTagName("h1");
// console.log(h1);
// element tan ya tl id so
// const one = document.getElementById("one");
// console.log(one);
// id lo pl ta khu pl phan
// document.querySelector("input");
// document.querySelector(".input");
// document.querySelector("#input");
// node list nat pya
// document.querySelectorAll("input")

// const img = new Image(200,200);
// img.src("https://cdn4.buysellads.net/uu/1/126868/1670626209-Frontend-Masters-React18.png")
// console.log(img);
// document.body.append(img);

// attribute change
// document.querySelector("h1").title = "bbbb"
// document.querySelector("img").src = "https://www.w3schools.com/js/pic_bulbon.gif"
// 'https://www.w3schools.com/js/pic_bulbon.gif';
// document.querySelector("a").innerHTML = "youtube";
// document.querySelector("a").href = "https://youtube.com";
// document.querySelector("a").getAttribute("kzt");
// document.querySelector("a").setAttribute("kzt","hello");

// classlist
// const li = document.querySelector("li");
// li.classList;
// li.classList.add("p-5")
// li.classList.add("p-5",text-danger)
// li.classList.remove("p-5")
// class shi ma shi contain nat sit
// li.classList.contains("aa")


// creat element
// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// li1.innerText = "apple";
// const li2 = document.createElement("li");
// li2.innerText = "orange";
// const li3 = document.createElement("li");
// li3.innerText = "mango";

// const text = document.createTextNode("khine zin thin");
// console.log(text);

// insert element
// ul.append(li1);
// ul.append(li2);
// ul.prepend(li3);
// document.body.append(ul);
// document.body.prepend(text);
// remove element
// document.querySelectorAll("li")[1].remove();
// li1.remove();


// event

// attribute yay nee
{/* <button id="btn" onclick="console.log('hello')">click me</button> */}

// const btn = document.getElementById("btn");
// properties yay nee
// btn.onclick = function(){
//     console.log("u click");
// }

// btn.ondblclick = function(){
//         console.log("u click");
//     }

// method yay nee
// btn.addEventListener("click",function(){
//     console.log("u click");
// })

// const heading = document.getElementById("heading");
// heading.onmouseover = function(){
//     console.log("u mouseover")
// }

// heading.onmouseout = function(){
//     console.log("u mouseout")
// }

// heading.onmousemove = function(){
//     console.log("u mousemove")
// }

// document.onkeypress = function(){
//     console.log("keypress");
// }

// document.onkeyup = function(){
//     console.log("keyup");
// }

// document.onkeydown = function(){
//     console.log("keydown");
// }

// const input = document.querySelector("input");
// input.onchange = function(){
//     console.log("u change");
// }

// input.onkeyup = function(){
//     console.log("u keyup");
// }

// const select = document.querySelector("select");
// select.onchange = function(){
//     console.log("u change");
// }

// heading.onmousemove = function(event){
//     console.clear();
//     console.log("u mousemove")
//     console.log(event);
// }

// document.onclick = function(event){
//     console.clear();
//     console.log(event.target);
// }