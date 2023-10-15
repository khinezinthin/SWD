const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const ulList = document.getElementById("ulList");

const creatLi = (text) => {
    const li = document.createElement("li");
    li.className ="list-group-item d-flex justify-content-between align-items-center border-dark";
    li.innerHTML = `<div class="form-check">
                        <input onchange="check(event)" class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label textLabel" for="flexCheckDefault">
                        ${text}
                        </label>
                    </div>
                    <div class="btn-group">
                        <button onclick="del(event)" class="btn btn-sm btn-outline-dark">
                            <i class="bi bi-trash3 pe-none"></i>
                        </button>
                        <button onclick="edit(event)" class="btn btn-sm btn-outline-dark">
                            <i class="bi bi-pencil pe-none"></i>
                        </button>
                    </div>`;
    return li;
}
// pointer event ko none lite yin thu ko hnate tr htae ma twat pe-none

const check = (event) => {
    const text = event.target.nextElementSibling;
    text.classList.toggle("text-decoration-line-through");
}

const del = (event) => {
    // console.log(event.target);
    if(confirm("Are You Sure To Delete ?")){
        // event.target.parentElement.parentElement.remove();
        event.target.closest("li").remove();
    }
    listCounter();
}

const edit = (event) =>{
    // const currentElement = event.target.parentElement.parentElement.querySelector(".textLabel");
    const currentElement = event.target.closest("li").querySelector(".textLabel");
    let newText = prompt("new text to update",currentElement.innerText);
    currentElement.innerText = (newText);

}
// addBtn.addEventListener("click",()=> {
//     console.log(inputText.value);
//     ulList.append(creatLi(inputText.value));
//     inputText.value = null;
    
// })


// list counter
const listCounter = () => {
    const total =ulList.children.length;
    if(total){
        listCount.innerText = "Count : " + ulList.children.length;
    }else{
        listCount.innerText = null;
    }
}

const btnClick = ()=> {
    // console.log(inputText.value);
    if(inputText.value.trim()) {
        ulList.append(creatLi(inputText.value));
        inputText.value = null;
        listCounter();
    }
}

// creat p with before 
const p = document.createElement("p");
p.innerText = "Your Lists";
ulList.before(p);


// creat list count with after
const listCount = document.createElement("p");
// listCount.innerText = 123;
listCount.classList.add("mt-3");
ulList.after(listCount);



addBtn.addEventListener("click",btnClick);
inputText.addEventListener("keyup",(event) => {
    console.log(event.key , event.keyCode);
    if(event.keyCode === 13) {
        btnClick();
    }
})