let a=10;//arithematic operators
let b=20;
console.log("addition", a+b);
console.log("multiplication", a*b);
console.log("substraction", a-b);
console.log("division",b/a);
let addition= a+b;
console.log(addition);

//operation in arrays
let num=[10,20,30];
let sum= num[0]+num[1];
console.log("sum",sum);
let sub= num[2]-num[1];
console.log("sub",sub);

//operators in object
let student={
    name:"riya",
    age:20
}
student.age=student.age+1;

console.log(student);


//operations in functions
function add (a,b) {
   return a+b;
    // console.log(a+b);
}
add(5,10);
let ans = add(10,30);
console.log(ans);

function divide (c,d) {
    return c/d;

}
console.log(divide(20,2));

function mult (a,b) {
    return a*b;
}
console.log(mult(20,4));

function operation (a,b) {
    let sum=a+b;
   return sum-a;
}
console.log("op ans", operation(190754,34562));

//
