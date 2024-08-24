//C-TASK

const moment = require("moment");
const time = moment().format("HH:mm");

console.log("Bizda non, lagmon, cola bor");

class Shop {
  non;
  cola;
  lagmon;
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    return `Hozir ${time} da sizda ${this.non} ta non va ${this.lagmon} ta lagmon va ${this.cola} ta cola bor;`
  }

  sotish(nomi, soni) {
    if (nomi === "non") {
      if (this.non === 0) {
        return "Non qolmadi";
      } else if (this.non >= soni) {
        this.non -= soni;
        return `Hozir ${time} da  ${soni} non oldingiz!;`
      } else {
        return "Bunday miqdorda non mavjud emas";
      }
    } else if (nomi === "lagmon") {
      if (this.lagmon === 0) {
        return "Lagmon qolmadi";
      } else if (this.lagmon >= soni) {
        this.lagmon -= soni;
        return `Hozir ${time} da  ${soni} lagmon oldingiz!;`
      } else {
        return "Bunday miqdorda lagmon mavjud emas";
      }
    } else if (nomi === "cola") {
      if (this.cola === 0) {
        return "Cola qolmadi";
      } else if (this.cola >= soni) {
        this.cola -= soni;
        return `Hozir ${time} da  ${soni} cola oldingiz!;`
      } else {
        return "Bunday miqdorda cola mavjud emas";
      }
    } else {
      return "Mahsulot mavjud emas";
    }
  }

  qabul(nomi, soni) {
    if (nomi === "non") {
      this.non += soni;
      return `Hozir ${time} da  ${soni} non qabul qildingiz!;`
    } else if (nomi === "lagmon") {
      this.lagmon += soni;
      return `Hozir ${time} da  ${soni} lagmon qabul qildingiz!;`
    } else if (nomi === "cola") {
      this.cola += soni;
      return `Hozir ${time} da  ${soni} cola qabul qildingiz!;`
    } else {
      return "Mahsulot mavjud emas";
    }
  }
}

const story = new Shop(23, 55, 7);
console.log(story.qoldiq());
console.log(story.qabul("lagmon", 10));
console.log(story.qoldiq());






// //B TASK 

// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countDigits("YSJGDK7HDSGD5SAVXADH4"));










// A-TASK

// function atask(e, soz) {
//     let count = 0;
  
//     for (let i = 0; i < soz.length; i++) {
//       if (soz[i] === e) {
//         console.log("before", count);
//         count++;
//       }
//     }
//     console.log("after", count);
//     return count;
//   }
  
//   console.log(atask("e", "engineer"));








// console.log('Jack Ma maslaxatlari');

// const list = [
//     "yaxshi talaba bo'ling", //  0-20
//     "togri boshliq tanlang va ko'proq xato qiling", //  20-30
//     "uzingizga ishlashni boshlang",  //  30-40
//     "siz kuchli bolgan narsalarni qiling" , //    40-50
//     "yosshlarga investetsiya qiling",   // 50-60
//     "endi dam oling, foydasi yoq",   // 60
// ];

// async function maslaxatBering(a) {
//     if (typeof a !== "number") throw new Error("insert a number", null);
//     else if (a <= 20) return list[0];
//     else if (a < 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//              resolve(list[5]);
//             }, 5000);   
//         })
         
//     }
// }

// // then, catch
// console.log("passed here 0");

// maslaxatBering(20).then(data => {
//   console.log("javob:", data);
// })
// .catch((err) => {
//     console.log("ERROR:", err)
// });
// console.log("passed here 1");

// //async await
// async function run() {
//     let javob = await maslaxatBering(25);
//     console.log(javob);
//     // javob = await maslaxatBering(70);
//     // console.log(javob);
//     // javob = await maslaxatBering(41);
//     // console.log(javob);

// }
// run();













// console.log('Jack Ma maslaxatlari');

// const list = [
//     "yaxshi talaba bo'ling", //  0-20
//     "togri boshliq tanlang va ko'proq xato qiling", //  20-30
//     "uzingizga ishlashni boshlang",  //  30-40
//     "siz kuchli bolgan narsalarni qiling" , //    40-50
//     "yosshlarga investetsiya qiling",   // 50-60
//     "endi dam oling, foydasi yoq",   // 60
// ];

// function maslaxatBering(a, callback) {
//     if (typeof a !== "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a < 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function(){
//         callback(null, list[5])    

//         }, 5000);
        
//     }
// }

// console.log("passed here 0");
// maslaxatBering(65, (err, data) => {
//  if(err) console.log('ERROR:', err);
//  else {
//     console.log('javob:', data);
//  }
 
// });
  