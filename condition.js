// var button = document.getElementById("submit");
// var a = document.getElementById("input1");
// var b = document.getElementById("input2");
// var result = document.getElementById("result");
// function add(a, b) {
//     return a + b;
// }
// button.addEventListener("click", function () {
//     console.log("clicked");
//     result.innerText = "".concat(add(+a.value, +b.value));
// });
// console.log("hello world");

// const gun = 10;

// if(gun <= 10){
//      console.log("günaydın");
// }else{
//      console.log("tünaydın");
// }

// const sayi = 20202033

// if (sayi % 2 ===0){
//      console.log(`${sayi}:çift sayidir`);
// }else{
//      console.log(`${sayi}:tek sayidir`);

// }

const yas = Number(prompt("enter your age"));
const saglik = confirm("saglik raporun var mı");
const sinav = +prompt("sınav puanınız")

const sonuc = yas >= 18 && saglik === true && sinav >= 70;

// if (sonuc){
//      console.log(`${sonuc}  basarılı`);
// }else{
//      console.log(`${sonuc}  basarısız`);

// }

// sonuc ? console.log(`${sonuc}  basarılı`) : console.log(`${sonuc}  basarısız`);



sonuc && console.log(`${sonuc}  basarılı`);

// sonuc || console.log(`${sonuc}  basarısız`);
