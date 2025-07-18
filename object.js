// let student={
//     name:"riya",
//     age:20,
//     course:"mearn",
//     isActive:true
// }
// // console.log(student.name);
// // console.log(student["age"]);
// student.city="wayanad"//adding new item
// student.age=23;//modify existing key
// // console.log(student);
// let person={
//     name:"asin",
//     address:{
//         city:"wayanad",
//         pin:673577,
//         vehicles:["car","bike","bus"]
//     }
    
// }
// // console.log(person);
// console.log(person.address);
// console.log(person.address.pin);
// console.log(person.address.vehicles[2]);


let course = {
    name:"mern",
    price:10000,
    isActive:true,
    student:{
        name:["riya","asin"]
    }
}
course.city="kalpetta",
course.student.isActive=true;
console.log(course);
console.log(course.student.name[0]);