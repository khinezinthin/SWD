const calc = document.getElementById("calc")
const width = document.getElementById("width");
const breadth = document.getElementById("breadth");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");
const store = document.getElementById("store");
const clear = document.getElementById("clear");
const lists = document.getElementById("lists");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const area = width.valueAsNumber * breadth.valueAsNumber;
    result.innerText = area + "sqft";
})

clear.addEventListener("click",function(){
    result.innerText = null;
    // width.value = breadth.value = null;
    form.reset();
})

store.addEventListener("click",function(){
    const tr = document.createElement("tr");
    tr.innerHTML = 
    `<td>${width.valueAsNumber}</td> 
     <td>${breadth.valueAsNumber}</td>
     <td>${result.innerText}</td>`
    lists.append(tr);
    result.innerText = null;
    // width.value = breadth.value = null;
    form.reset();
})