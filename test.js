// //check if a number is odd or even using function
// function isOddEven (num) {
//     if (num % 2==0) {
//         console.log (num,"is even");
//     }
//     else {
//         console.log (num,"id odd");
//     }
// }
// isOddEven(10007);

// //find the biggest number
// let a=200;
// let b=40;
// let c=90;
// if (a>=b && a>=c) {
//     console.log(a,"is bigger");
// }
// else if (b>=a && b>=c) {
//     console.log(b,"is bigger");
// }
// else  {
//     console.log(c,"is bigger");
// }

// //creat an array of 5 numbers and and print the sum using loop
// let numbers=[3,4,5,6,2];
// let sum=0;
// for (i=0;i<numbers.length;i++){
//      sum += numbers[i];
//     console.log(numbers[i]);
//     console.log("answer is",sum);
// }

// //reverse a stringe using a loop
// let strig = "javascript";
// let reversed = " ";
// for (i=strig.length -1; i>=0;i--) {
//     reversed += strig[i];
// }
//     console.log(reversed);

// //function of a factorial of a number
//  function factorial(num) {
//      let result =1;
//      for ( i=1;i<=num;i++){
//          result *= i;
//      }
//         return  result;

// }
//     console.log("factorial is",factorial(5));

//     //skipping multiples of 3

//     for (i=1;i<=50; i++) {
//         if (i %3 ==0) {
//             continue;
//         }
//         console.log(i);
//     }

//     //creat an object for a product

//     let product={
//         name:"iphone",
//         model:16,
//         price:100000
//     }
//     console.log(product);
//     console.log(product.name);
//     console.log(product.model);
//     console.log(product.price);

//     //sort an array
    //let a=[1,8,4,9,6,7]
    //for(i=0;i<=a.length;i++){
      //  for(j=0;j<a.length-1-i;j++) {
         //   if(a[j]>a[j+1]){
           //     let temp=a[j];
             //   a[j]=a[j+1];
               // a[j+1]=temp;
        //    }
        //}
    // }
//console.log(a);

// function ps(n) {
//   if (n >=0){
//     return n;
//   }
// }
// console.log(ps(8,9,0,-6));
// //prime numbers
// for(i=2; i <= 10; i++){
//   isPrime=true;
//   for(j=2;j<i;j++){
//     if(i%j===0)
//     isPrime=false;
//     break;
//   }
//   isPrime&&console.log(i)
// }

let rows=5;
for(let i=1; i <= rows; i++){
    let line="";
    for(let j=1; j<=rows-i; j++){
        line += " ";
    }
    for(let k=1; k=2*i-1; k++){
        if(k==1 || k== 2*i-1){
        line += "*";
        }
        else{
            line += " ";
        }
    }
    console.log(line);
};