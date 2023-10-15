// const sl = document.createElement("select");

// const op1 = document.createElement("option");
// const text1 = document.createTextNode("Myanmar");
// op1.value = "mm";
// op1.append(text1);
// sl.append(op1);

// const op2 = document.createElement("option");
// const text2 = document.createTextNode("Japan");
// op2.value = "jp";
// op2.append(text2);
// sl.append(op2);

// sl.add(new Option("Myanmar","mm"));
// sl.add(new Option("Japan","jp",undefined,true));
// sl.add(new Option("Korea","kr"));

// document.body.append(sl);

// EVENT 
// REMOVE EVENT LISTENER 
// const btn = document.querySelector("button");
// let count = 0;
// btn.disabled = true;
// btn.addEventListener("click",() => alert("hello"));
// btn 1 khr hnate pee yin alert ma pya tot tr 
// const showAlert = () => {
//     alert("hello");
//     btn.removeEventListener("click", showAlert);
// };
// btn.addEventListener("click",showAlert);

// btn 3 khr hnate pee alert ma pya tot tr 
// const showAlert = () => {
//     alert("hello");
//     count++;
//     if(count >= 3){
//     btn.removeEventListener("click", showAlert);
//     }
// };
// btn.addEventListener("click",showAlert);

// TARGET 
// document.addEventListener("click", (event) => {
//     console.log(event.target);
// })

// EVENT PROPAGATION CONCEPT pine 
document.querySelector(".container").addEventListener("click", () =>{
    console.log("1 u click container");
});

document.querySelector(".row").addEventListener("click", () =>{
    console.log("2 u click row");
});

document.querySelector(".col").addEventListener("click", () =>{
    console.log("3 u click col");
});

document.querySelector(".btn").addEventListener("click", (event) =>{
    event.stopPropagation();
    console.log("4 u click button");
});


// MULTIPLE EVENT 
// const eventLists = ["click", "mouseover", "mouseout"];
// eventLists.forEach((currentEvent) => {
//     // console.log(currentEvent);
//     document.querySelector("button").addEventListener(currentEvent, () => {
//         console.log("hello");
//     })
// })

// li ko multiple select lote tr 
// d lo yay lo ma ya querySelector ka htate sone ta khu pl phan pay 
// const list = document.querySelector("li");
// list.addEventListener("click", () => {
//     console.log(list.innerText);
// })

// const list = document.querySelectorAll("li");
// list.forEach((currentList) => {
//     currentList.addEventListener("click", () => {
//         console.log(currentList.innerText);
//     })
// })

