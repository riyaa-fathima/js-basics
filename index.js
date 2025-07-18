// array methods
let fruits=["apple","banana","orange","pineapple"];
let veg=["carrot","tomato","potato"];
let whole=fruits.concat(veg);
fruits.push("kiwi");
veg.pop()
whole.unshift("ginger");
fruits.shift();
console.log(fruits);
console.log(veg);
console.log(whole);
console.log(whole.length);
console.log(whole.indexOf("orange"));
console.log(veg.includes("tomato"));
console.log(whole.slice(3,6));

//object
let course = {
    nmae:"riya",
    age:20,
    parents:{
        father:"Ashraf",
        mother:"Rabiya"
    }
}
console.log("mothers name",course.parents.mother);

