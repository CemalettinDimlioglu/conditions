//? function declaration
// selam()
// function selam(){
//      console.log("hello");
// }

// selam()
// selam()

// function tanısma(firstName, lastName ){

//      console.log(` Hİ! ${firstName} ${lastName} ${NaN}`);
// }
// tanısma("cemalettin", "d", "2023");
// tanısma("selahaddin", "d")

// const name = prompt("your name:");
// const surname =prompt ("your surnane");

// tanısma(name, surname)

//? expession
// const selam = function(){
//      console.log("hello")
// }

// selam()
// selam()

// let num = function (n) {
//   return n % 2  ? "tek" : "cift";
// };

// // console.log(num(4));
// let num = function (n) {
//   return n % 2  ? "tek" : "cift";
// };

// console.log(num(4));

//? Arrow functiom

// const yas = (date) => new Date().getFullYear() - date;

// console.log(yas(1990));

// const num = (n) => (n % 2 === 0 ? "çift" : "tek");
// console.log(num(76));

// const isimler = ["ali", "veli", "deli"];
// const array = [1, 2, 3];
// const newArr = [];
// for (let i = 0; i < isimler.length; i++) {
//   newArr[i] = isimler[i] + " " + array[i];

// // console.log(newArr);
// const isimler = ["ali", "veli", "deli"];
// const array = [1, 2, 3];
// const newArr = [];
// for (let i = 0; i < isimler.length; i++) {
//   newArr[i] = isimler[i] + " " + array[i];
// }
// console.log(newArr);
const isimler = ["ali", "veli", "deli" ,"fatma"];

console.log(isimler.pop());

console.log(isimler);
console.log(isimler.push("cemalettin"));
console.log(isimler);

console.log(isimler.shift());
console.log(isimler);
console.log(isimler.unshift("necati"));
console.log(isimler);

console.log(isimler.splice(1,0, "abuzer"));
console.log(isimler);
console.log(isimler.splice(2,1, "aişe"));
console.log(isimler);
console.log(isimler.splice(0,5, "abidin"));
console.log(isimler);
