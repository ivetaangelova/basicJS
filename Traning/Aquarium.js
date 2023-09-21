// // За рождения си ден Любомир получил аквариум с формата на паралелепипед. Първоначално 
// прочитаме от конзолата на отделни редове размерите му – дължина, широчина и височина в сантиметри.
//  Трябва да се пресметне колко литра вода ще събира аквариума, ако се знае, че определен процент от вместимостта му
//   е заета от пясък, растения, нагревател и помпа.

// Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/.
function aquarium (input){
  let  length=Number(input[0]);
  let width=Number(input[1]);
  let hight=Number(input[2]);
  let percents=Number(input[3]) / 100;

  let triangleSumDm= (length * width * hight) / 1000
 let final = triangleSumDm - (triangleSumDm * percents)
  console.log(final)



}
aquarium(["85", "75", "47", "17"])