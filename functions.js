// //basic structure of a function
// function great(name="riya") {
//     console.log("hello",name);
// };
// great();//calling function

// function greatTwo(name) {

//     console.log(name)
// };
// greatTwo("riya");

// //arrow functions
// let sayHi= () => {
//     console.log("hi");
// }
// sayHi();

function wishes(name="riya") {
    console.log("good morning",name);
    console.log("heyy",name,"how are you");
    console.log(["car","bus"]);
}
wishes();
let sayHello =() => {
    console.log("hello")
}
sayHello();

//conditional functions
function checkPass (mark) {
    if (mark>=50) {
        console.log("pass");
    }
    else {
        console.log("fail");
    }
}
checkPass(30);

function grade (mark) {
    if (mark>=90) {
        console.log("A");
    }
    else if(mark>=70) {
        console.log("B");
    }
    else {
        console.log("C");
    }
}
grade(70);