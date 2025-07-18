// let fruits=["orange","apple","mango"];
// // fruits.push("kiwi");
// fruits.pop();
// fruits.unshift("banana");
// fruits.shift();
// console.log(fruits);
// let phoneNumber=[7,7,0,5,8];
// console.log(phoneNumber);
// let array=[[0],[1],[2]];//array positioning
// console.log(array);
// let length=fruits.length;
// console.log(fruits.length)
// let veg=["carrot","potato"];
// console.log(veg);
// let food=fruits.concat(veg);
// console.log(food.indexOf("carrot"));
// console.log(food.includes("potato"));
// console.log(food.includes("kiwi"));
// let colors=["blue","orange","white","black","greean"];
// console.log(colors.slice(1,4));

let vehicles=["car","bus","bike","lorry","van","train"];
let vehiclesOne=["helicopter","plane","rocket"];
vehicles.push("scooty");
vehicles.pop();
vehicles.unshift("scooty");
let vehicle= vehicles.concat(vehiclesOne);
console.log(vehicles);
console.log(vehiclesOne);
console.log(vehicle);
console.log(vehicles[2]);
console.log(vehicles.length);
console.log(vehicle.length);
console.log(vehicle.indexOf("bus"));
console.log(vehicle.includes("bus"));
console.log(vehicle.slice(1,6));
