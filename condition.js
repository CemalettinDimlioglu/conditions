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

// const yas = Number(prompt("enter your age"));
// const saglik = confirm("saglik raporun var mı");
// const sinav = +prompt("sınav puanınız")

// const sonuc = yas >= 18 && saglik === true && sinav >= 70;

// // if (sonuc){
// //      console.log(`${sonuc}  basarılı`);
// // }else{
// //      console.log(`${sonuc}  basarısız`);

// // }

// // sonuc ? console.log(`${sonuc}  basarılı`) : console.log(`${sonuc}  basarısız`);

// // sonuc && console.log(`${sonuc}  basarılı`);

// sonuc || console.log(`${sonuc}  basarısız`);

// const not = +prompt("bir not giriniz")

// if(not > 100 || not < 0 ){
//      console.log("lütfen geçerli bir sayı giriniz");
// }else if(not > 90){
//      console.log("AA");
// }
// }else if(not > 80){
//      console.log("BA");
// }
// }else if(not > 70){
//      console.log("CC");
// }
// }else if(not > 60){
//      console.log("CD");
// }
// }else if(not > 50){
//      console.log("DD");
// }
// }else if(not > 40){
//      console.log("FF");
// }

// Ternary 2 şık varsa

// const not =+prompt("rakam")

// // not >=50 ? console.log("gecti") : console.log("kaldi");
// const sonuc = not>= 50 ? "gecti": "kaldı";
// alert(sonuc)
// console.log(sonuc);

// const yas = Number(prompt("enter your age"));
// const saglik = confirm("saglik raporun var mı");
// const sinav = +prompt("sınav puanınız")

// const sonuc =
// yas >= 18 && saglik === true && sinav >= 70 ? "basarılı" :"basarısız"

// //

// const number = 7
// switch (number) {
//      case "3":
//          console.log("case1");
//           break;
//      case 5:
//          console.log("case2");
//           break;
//      case 7:
//          console.log("case3");
//           break;

//      default:
//           console.log("yanlıs numara");
//           break;
// }

// switch yapısı ===  e dikkat edrr tam eşit olmazsa olmaz daha uzun yapılar için kullanılır

// const gunler = +prompt("gün 1-7");

// switch (gunler) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("resmi gün");
//     break;
//   case 6:
//   case 7:
//     console.log("tatil günleri");
//     break;

//   default:
//     break;
// }


// let day = new Date().getDay(); // bugünün haftanın kaçıncı günü olduğunu alır

// switch (day) {
//   case 1:
//     console.log("Pazartesi");
//     break;
//   case 2:
//     console.log("Salı");
//     break;
//   case 3:
//     console.log("Çarşamba");
//     break;
//   case 4:
//     console.log("Perşembe");
//     break;
//   case 5:
//     console.log("Cuma");
//     break;
//   default:
//     console.log("Hafta sonu");
// }

let month = new Date().getMonth(); // bugünün hangi ay olduğunu alır

switch (month) {
  case 11:
  case 0:
  case 1:
    console.log("Kış");
    break;
  case 2:
  case 3:
  case 4:
    console.log("İlkbahar");
    break;
  case 5:
  case 6:
  case 7:
    console.log("Yaz");
    break;
  case 8:
  case 9:
  case 10:
    console.log("Sonbahar");
    break;
  default:
    console.log("Geçersiz ay");
}