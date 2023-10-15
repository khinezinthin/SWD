class Parent {
    x = "xx";
    y = "yy";

    a(){
        return "this is a"
    }
    b(){
        return "this is b"
    }

}
const p = new Parent;
console.log(p);

class Child extends Parent{
    c = "cc";
}
const c = new Child;
console.log(c);