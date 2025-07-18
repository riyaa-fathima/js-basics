// *
// * *
// * * * 
// * * * *
//reverse this
//* * * *
//* * *
//* * 
//*
for(i=1;i<=4;i++) {
    let row= "";
    for(j=1;j<=i;j++){
        row += "*"; 
        
    };
    // console.log(row);
    
};
// * * * * 
// * * * *
// * * * *
// * * * *

for(i=1;i<=4;i++){
    let row="";
    for(j=1;j<=4;j++){
        row += "*";
    }
    // console.log(row);
}

// * * * *
// * * *
// * *
// *
for(i =4; i >=1; i--){
    let row="";

    for(j =1;j <= i; j++){
        row += "*";
    }
    // console.log(row);
};

//      *

//    * * *

//  * * * * *

for(i=1;i<=3;i++){
    let row="";

    for(j=1;j<= 3-i;j++){
        row += " ";
    }
    for(k=1;k<= 2*i-1;k++){
        row += "*";
    }
    console.log(row);
}

//       *
//     * *
//   * * *
// * * * *
for(i=1 ;i<=4;i++){
    let line="";
    for(j=1;j<=4-i;j++){
        line +=" ";
    }
    for(let k =1;k <=i;k++){
        line+= "*";
    }
    // console.log(line);
}

// *****
// *   *
// *   *
// *   *
// *****
// let row=5;
// for(let i=1;i<=row;i++){
//     let line ="";
//     for(let j=1; j<=row; j++){
//         if(i==1 || i==row || j==1 || j==row ){
//             line += "*";
//         }
//         else{
//             line += " ";
//         }
//     }
//     console.log(line);
// }
// 1
// 12
// 123
// 1234
 
let r=4;
for(i= 1; i <=r; i++){
    let line="";
    for(j=1; j <=i; j++){
        line += j;
    }
    console.log(line);
}
// 12345
// 1234
// 123
// 12
// 1
let num=5;
for (i=num; i >=1; i--){
    let line="";
    for(j=1; j <=i; j++){
        line += j;
    }
    console.log(line);
};
//     1
//    12
//   123
//  1234
// 12345

let n=5;
for(i=1;i <=5; i++){
    let line="";
    for (j=1; j <=n-i; j++){
        line += " ";
    }
    for(k=1; k <=i; k++){
        line += k;
    }
    console.log(line);
}
//   *
//  ***
// *****
//  ***
//   *
for (let i =1; i<=3; i++){
    let line="";
    for (let j=1; j <=3-i; j++){
        line += " ";
    }
   

    for(let k =1; k <= 2*i-1; k++){
        line += "*";
    }
     console.log(line);
}
    for(i=2; i >=1; i--){
        let line="";
        for(j=1;j <=3-i;j++){
            line +=" ";
        }
        for(k=1; k <= 2*i-1; k++){
            line += "*";
        }
        console.log(line)
    }



//     *
//    * *
//   *   *
//  *     *
// *********
let row=5;
for(i=1; i <=row; i++){
    let line="";
    for(j = 1 ;j <= row-i; j++){
        line += " ";
    }
    for(k = 1; k <=2*i-1;k++){
        if(k==1 || i==row || k==2*i-1){
            line += "*";
        }
        else{
            line +=" ";
        }
    }
    console.log(line);
}


//      *
//     * *
//    *   *
//   *     *
//  *       *
//   *     *
//    *   *
//     * *   
//      *
let rows=5;
for(let i=1; i <= rows; i++){
    let line="";
    for(let j=1; j<=rows-i; j++){
        line += " ";
    }
    for(let k=1; k<=2*i-1; k++){
        if (k==1 || k== 2*i-1){
        line += "*";
        }
        else{
            line += " ";
        }
    }
    console.log(line);
};
for(i=4; i >= 1; i--){
    let line="";
    for (j=1; j <= rows-i; j++){
        line += " ";
    }
    for(k=1; k <= 2*i-1; k++){
        if (k==1|| k== 2*i-1){
            line += "*";
        }
        else{
            line += " ";
        }
    }
    console.log(line);
}