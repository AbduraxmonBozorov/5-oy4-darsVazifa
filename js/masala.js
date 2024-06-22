// // 1-masala
// const students=[
//     {ism: "Ali", yosh: 20, baholari: [90, 92, 96]},
//     {ism: "Vali", yosh: 22, baholari: [95, 97, 90]},
//     {ism: "Sammi", yosh: 21, baholari: [88, 92, 84]},
// ]

// function bestStudent(arr){
//     arr.forEach(element => {
//         let average=0;
//         let sum=0;
//         element.baholari.forEach(baho=>{
//             sum+=baho;
//         })
//         average=sum/element.baholari.length;
//         // console.log(average);
//         element.baholari=average;
//     });

//     let ball=arr[0].baholari;
//     let student=arr[0];
//     arr.forEach(item=>{
//         if(ball<item.baholari){
//             student=item;
//         }
//     })
//     return student
// }
// console.log(bestStudent(students));

// 2-masala
// let products = [
//   { nomi: "Kompyuter", narxi: 1000, mavjud: false },
//   { nomi: "Telefon", narxi: 700, mavjud: false },
//   { nomi: "Planshet", narxi: 500, mavjud: true },
//   { nomi: "Monitor", narxi: 300, mavjud: true },
// ];

// function isExist(arr = []) {
//   let newProducts = arr.filter((item) => {
//     return item.mavjud == true;
//   });
//   let product = newProducts[0];
//   newProducts.forEach((item) => {
//     if (item.narxi > product.narxi) {
//       product = item;
//     }
//   });
//   return product;
// }
// console.log(isExist(products));


// 3-masala
// const students=[
//     {ism: "Ali", yosh: 20, fanlari: ['Matematika', 'Fizika']},
//     {ism: "Vali", yosh: 22, fanlari: ['Matematika', 'Fizika']},
//     {ism: "Sammi", yosh: 21, fanlari: ['Fizika', 'Informatika']}
// ]

// function counter(arr=[]){
//     let fanlar=arr.map(item=>{
//         return item.fanlari
//     })
//     fanlar=fanlar.flat();
//     let m=0, f=0, i=0;
//     fanlar.forEach(item=>{
//         if(item=='Matematika'){
//             m++;
//         }else if(item=='Fizika'){
//             f++;
//         }else if(item=='Informatika'){
//             i++;
//         }
//     })
//     let fan={
//         matematika: m,
//         fizika: f,
//         inforrmatika: i
//     }
//     return fan;
// }
// console.log(counter(students));


// 4-masala
// const workers=[
//     {ism: "Ali", lavozim: 'Dasturchi', maosh: 2000},
//     {ism: "Vali", lavozim: 'Dizayner', maosh: 1800},
//     {ism: "Sammi", lavozim: 'Dasturchi', maosh: 2200},
//     {ism: "Qodir", lavozim: 'PM', maosh: 2500},
// ]

// function lavozim(arr=[]){
//     let odam=arr[0];
//     arr.forEach(user=>{
//         if(user.maosh>odam.maosh){
//             odam=user;
//         }
//     })
//     console.log("Eng yuqori maosh lavozimi: "+odam.lavozim);
//     let count=arr.length;
//     return "Ishchilar soni: "+count;
// }
// console.log(lavozim(workers));

// 5-masala
// const produts=[
//     {nomi: "Kompyuter", kategoriya: "Elektronika", narxi: 1000},
//     {nomi: "Telefon", kategoriya: "Elektronika", narxi: 700},
//     {nomi: "Stol", kategoriya: "Mebel", narxi: 200},
//     {nomi: "Stul", kategoriya: "Mebel", narxi: 100},
//     {nomi: "Lampochka", kategoriya: "Elektronika", narxi: 10},
// ]

// function averageKategoriya(arr=[]){
//     let elektr=arr.filter(item=>{
//         return item.kategoriya == 'Elektronika';
//     })
//     let mebel=arr.filter(item=>{
//         return item.kategoriya == 'Mebel';
//     })

//     let sumElektr=0;
//     elektr.forEach(item=>{
//         sumElektr+=item.narxi
//     })
//     let averageElektr=sumElektr/elektr.length;
//     let sumMebel=0;
//     mebel.forEach(item=>{
//         sumMebel+=item.narxi
//     })
//     let averageMebel=sumMebel/mebel.length;

//     return {
//         averageElektr, averageMebel
//     }
// }
// console.log(averageKategoriya(produts));