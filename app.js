// const grades =  [55,77,56,79,100,33,44];

// let sum = 0;
// for (let i =0 ;i <grades.length; i++){
//      sum +=grades[i];
// }
// // console.log((sum/grades));
// /?-------------- ÖRNEK -------------------
// //? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}
console.log((sum / grades.length).toFixed(2));