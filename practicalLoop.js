// for(i=1;i<=10;i++){
//     console.log(i);
// }
//sustraction table
let sum=0;
for(i=1;i<=10;i++){
    sum+=i;
}
console.log(sum);
//multiplication table of 5
let num=5;
for(i=1;i<=10;i++){

    console.log(`${num} * ${i} = ${num*i}`);
};
let n=100;
for(i=1;i<=10;i++){
    console.log(`${n} - ${i} = ${n-i}`);
}





//even numbers
for(i=1;i<=10;i++){
    if(i % 2 ==0){
        // console.log(i)
    }
};

//odd
for(i=1;i<=10;i++){
    if(i %  2 ==1){
        // console.log(i)
    }
};

//prime number
for(i=2; i<=10; i++){
    let isPrime=true;

    for(let j=2; j<i; j++){
        if( i % j == 0 ){
            isPrime=false;
            break;
        }
    };
    if(isPrime){
        console.log(i);
    }
}


for(let i=20;i <=30; i++){
    isPrime=true;
    for(j=2; j<i; j++){
        if(i % j ==0){
            isPrime=false;
            break;
        }
    };
    if(isPrime){
        console.log(i); //if condition cancel and workout
    }
};

//non prime numbers
for(let i=1;i<=20;i++){
    isnonPrime=true;
    for(j=2;j<i;j++){
        if(i % j == 0){
            isnonPrime=false;
            break;
            
        }

    }
    if(!isnonPrime){
        console.log(i);
    }
};

//prime numbers without last if loop
for(i=2; i <= 10; i++){
    isPrime=true;

    for(j= 2; j < i; j++){
        if(i % j ==0){
            isPrime=false;
            break;   
        }   
    } 
    isPrime && console.log(i)
}









let numm=5;
for(i=1;i<=10;i++){
    let sum=1;
    sum=numm * i;
    // console.log(numm, "*", i, "=" ,sum);
}

let nn=5;
for(i=1;i<=10;i++){
    // console.log(`${nn} * ${i} = ${nn*i} `);
};