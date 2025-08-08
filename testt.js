let num =5;
for (i =1; i <= 10 ; i++) {
    let mult = num * i ;
    for (i=2 ; i <= mult ; i++){
        let isPrime =true;

        for (j=2 ; j<mult; j++){
            if (i % j ==0){
                isPrime = false;
                break;
            }
        }
        if (isPrime){
        console.log(i)
    }
    } 
    
};

let arr =[12,45,7,89,23,54]
let n= arr[0];

for (i = 0 ; i <= arr.length ; i++){
    if (arr[i] > n){
        n = arr[i];
    }
}
console.log(n);

function LargeNum (arr) {
    let n = arr[0]
    for (i = 0 ; i < arr.length ; i++){
        if (arr[i] > n ){
            n = arr[i];
        }
    }
    return n;
}
 arr =[29,4,7,98,55]
console.log(LargeNum(arr));


