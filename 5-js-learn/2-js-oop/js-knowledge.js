// const a = 20;
// const b = "hein";

// const af = () => {
//     x = 5;
//     y = 5;
//     z = x + y;
//     return "this is af"+ z;
// }

// function fs(){
//     const j = "jjj";
//     const k = "kkk";
//     return "this is fs"+ j + k;
// }
// af();
// fs();


const p = new Promise((resolve,reject) => {
    if(false){
        resolve("aung p");
    }else{
        reject("kya tal");
    }
});
console.log(p);

p.then((data) => console.log(data));
p.catch((data) => console.log(data));