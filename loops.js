//! loops
//! klasik göngüler

//!for while do while


//? 10 defa merhaba

// for(let i =11 ; i<=10 ; i++){
//      console.log(`${i} Merhaba`);
// }

// // console.log("devam");

// for (let i = 1; i <= 10; ++i) {
//   console.log(`${i} Merhaba`);
// }

// let a = 1

// console.log(a++);
// console.log(a);

//?-----
// let x = 3;
// const y = x++;
// console.log(x);
// x is 4; y is 3
// let x2 = 3n;
// const y2 = x2++;
// // x2 is 4n; y2 is 3n
// 11:45
// let x = 3;
// const y = ++x;
// // x is 4; y is 4
// let x2 = 3n;
// const y2 = ++x2;
// // x2 is 4n; y2 is 4n
//? 1-50 arası çift sayıları listeleme

// for(let i= 1 ; i<=50 ; i++){
//      if(i%2!==0){
//           console.log(i);
//      }
// }

//? 

const n = +prompt("number");
let toplam = 0;

for(let i=1; i<=n ; i++){
     console.log(i);
     toplam += i;
     console.log(toplam);
}
console.log(toplam);
