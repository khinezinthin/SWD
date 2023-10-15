const uploader = document.querySelector("#uploader");
const uploaderUI = document.querySelector("#uploaderUI");
const output = document.querySelector("#output");

uploaderUI.addEventListener("click",() => {
    uploader.click();
});

// uploader.addEventListener("change",(event) => {
//     // console.log(event.target.files[0]); 
//     const fileReader = new FileReader(event.target);
//     fileReader.readAsDataURL(event.target.files[0]);
//     fileReader.addEventListener("load",(event) => {
//         // console.log(event.target.result);
//         output.src = event.target.result;
//     })
// })

// uploader.addEventListener("change",(event) => {
//     // console.log(event.target.files);
//     [...event.target.files].forEach(el => {
//         const fileReader = new FileReader(event.target);
//         fileReader.readAsDataURL(el);
//         fileReader.addEventListener("load",(event) => {
//             // console.log(event.target.result);
//             const img = new Image();
//             img.src = event.target.result;
//             output.append(img);
//         })
//     })
    
// })

// const sounds = [
//     {
//         id : 1,
//         sound : "C4",
//         key : "a",
//     },
//     {
//         id : 2,
//         sound : "D4",
//         key : "s",
//     },
//     {
//         id : 3,
//         sound : "E4",
//         key : "d",
//     },
//     {
//         id : 4,
//         sound : "F4",
//         key : "f",
//     },
//     {
//         id : 5,
//         sound : "G4",
//         key : "j",
//     },
//     {
//         id : 6,
//         sound : "A4",
//         key : "k",
//     },
//     {
//         id : 7,
//         sound : "B4",
//         key : "l",
//     },
//     {
//         id : 8,
//         sound : "C5",
//         key : ";", 
//     },
// ];

// const keyboard = document.querySelector("#keyboard");

// const createKey =(name) =>{
// const div = document.createElement("div");
// div.classList.add("border","col","text-center","p-4","key");
// div.innerText = name;
// div.setAttribute("sound",name)
// return div;
// };

// sounds.forEach(el => keyboard.append(createKey(el.sound)));

// const playSound = (sound) => {
//     const audio = new Audio("../sound/"+ sound +".mp3");
//     audio.play();
// }
// [...document.querySelectorAll(".key")].forEach(el => {
//     el.addEventListener("click",(event) => {
//         console.log(event.target);
//         playSound(event.target.getAttribute("sound"));
//     })
// });

// document.addEventListener("keyup",(event) => {
//     // console.log(event.key);
//     const current = sounds.find(el => el.key === event.key);
//     if(current){
//         playSound(current.sound);
//         const currentKey = document.querySelector("[sound=" + current.sound +"]")
//         currentKey.classList.add("active");
//         setTimeout(() => {
//             currentKey.classList.remove("active")
//         }, 100);
//     }
// })
// ["sound='name'"]