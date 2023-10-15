// class MySelf {
//     // properties
//     myName = "khine zin thin";
//     age = 20;
//     // method
//     teach (){
//         return this.myName + "can teach";
//     }
// }
// const myself = new MySelf();
// console.log(myself);
// console.log(myself.teach())

// class Student {
    // name = "kyaw kyaw";
    // age = 20;
    // birthYear(){
    //     return "birth year";
    // }
//     static run = "this is run"
//     static test(){
//         return "this is test";
//     }
//     constructor(inputName,inputAge,gender){
//        this.name = inputName;
//        this.age = inputAge;
//        this.gender = gender;
//     //    profit
//     this.prefix = this.gender === "male"? "mg" : "ma";
//     this.fullName = this.prefix + " " + this.name;
//     this.birthYear = 2022 - this.age;
//     }

//     showDetail(){
//         return `I'm ${this.fullName} and ${this.age} ${this.age>1 ? "years" : "year"} old`;
//     }
// }
// let st1 = new Student("kyaw kyaw",15,"male");
// console.log(st1);
// console.log(st1.showDetail());

// let st2 = new Student("hal hla",1,"female");
// console.log(st2);
// console.log(st2.showDetail());
// console.log(Student.test());
// console.log(Student.run);

// const date = new Date();
// console.dir(date);
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());

// const d = new Date();
// d.setFullYear(2050);
// d.setDate(25);
// console.dir(d);
// console.log(d.getDay());

// const d = new Date("2025-03-25");
// console.dir(d);
// console.dir(d.getFullYear());
// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleDateString());

// console.log(Math.PI)
// function sub(x,y){
//     return x-y;
// }
// console.log(sub(5,10));

// function diff(x,y){
//     return Math.abs(x-y);
// }
// console.log(diff(5,10));

// console.log(Math.pow(16,2));
// console.log(16 ** 2);
// console.log(Math.floor(1.5));
// console.log(Math.ceil(1.1));
// console.log(Math.floor(Math.random() * 100));


// let age = Number("20 ");
// console.log(age);
// console.dir(Number);
// console.log(isNaN(5 / "h"));

// let myWeight = "80.45lb";
// console.log(typeof myWeight);
// console.log(Number(myWeight));
// console.log(parseInt(myWeight));
// console.log(parseFloat(myWeight));

// console.log(eval("1+1+1"));

// const st1 = new String("min ga lar par");
// console.log(st1);
// console.log(st1[0]);
// console.log(st1[1]);
// console.log(st1[3]);
// console.log(st1.length);
// console.log(st1.toUpperCase());
// console.log(st1.split(" "));

// let arr1 = [];
// console.log(arr1);

// let obj1 = {};
// console.log(obj1);

// function run(x,y){
//     console.log(arguments);
//     return x+y;
// }
// run(1,2);
// const fun = new Function();
// console.dir(fun);

// let d = new Date();
// console.log(d);
// console.log(d.toDateString());
// console.log(d.toTimeString());
// console.log(d.toJSON());
// console.log(d.toString());

// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getMonth());

// let d = new Date("2050-1-1");
// console.log(d);

// let currentDate = new Date();
// console.log(currentDate);

// let next300Hours = new Date();
// next300Hours.setHours(currentDate.getHours() + 300);
// console.log(next300Hours);

// let nextBloodDonate = new Date();
// nextBloodDonate.setMonth(nextBloodDonate.getMonth() + 4);
// console.log(nextBloodDonate);

// let totalSWDHours = 50;
// let learnhours = 2;

// function calcLearningFinishDay (total,perday){
//     let learnDays = total / perday;
//     const currentDate = new Date();
//     const learningFinishDay = new Date();
//     learningFinishDay.setDate(currentDate.getDate() + learnDays);
//     console.log(learningFinishDay.toDateString());
// }
// calcLearningFinishDay(50,2);

// let text = new String("apple, banana, orange");
// console.dir(text);
// console.log(text[7]);
// console.log(text[13]);
// let part = text.slice(7,13);
// console.log(part); 

//output
// console.log("hello");
// window.alert("hello");
// document.write("hello");

// input
// let myName = window.prompt("your name");
// window.alert(myName);
// console.log(myName);
// document.write(myName);

// let firstNum = window.prompt("first number");
// let secondNum = window.prompt("second number");
// console.log(typeof firstNum, typeof secondNum)
// window.alert(parseFloat(firstNum) + parseFloat(secondNum));

// function area(width,breadth){
//     return (width * breadth) + "sqft";
// }

// let width = window.prompt("input width");
// let breadth = window.prompt("input breadth");
// window.alert(area(width,breadth));

function clacCost(){
    let amount = window.prompt("amount of pate sa")
    let price = 300;
    let cost = amount * price;
    let tax = cost * 0.05;
    let total = cost + tax;
    alert(`cost : ${cost} mmk \n tax : ${tax} mmk \n total : ${total} mmk`)
}
clacCost();
