let key = document.querySelector(".key");
let display = document.querySelector(".display");
let operator = ["+","-","*","/","="];

let adjustFontSize = () => {
    if (display.innerText.length <= 8) {
        display.classList.remove("font-55");
        display.classList.add("font-75");
    } else {
        display.classList.remove("font-75");
        display.classList.add("font-55");
    }
};
document.addEventListener("DOMContentLoaded", adjustFontSize);


let filter = (x) =>{
    let current = display.innerText;
    let lastChara = current[current.length-1];
    if(current == "0" && x != "."){
        clearLast();
    }

    if(operator.includes(x)){
        if(operator.includes(lastChara)){
            return false;
        }
    }
    return true;
}
let show = (x) => {
    if(filter(x) && display.innerText.length<15){
        display.innerText += x;
        adjustFontSize();
    }
}
let calculate = _ => {
    let current = display.innerText;
    let lastChara = current[current.length-1];
    if(lastChara != "+" && lastChara != "-" && lastChara != "*" && lastChara != "/"){
        display.innerText = eval(display.innerText);
        adjustFontSize();
    }
}

let clearAll = _ => display.innerText = "";

let clearLast = _ => display.innerText = display.innerText.substring(0,display.innerText.length-1);