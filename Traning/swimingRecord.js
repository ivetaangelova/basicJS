function swimingRecord (input){

let recordInSeconds =Number(input[0]);
let distanceInMeters=Number(input[1]);
let timeInSeconds=Number(input[2]);
 let ivanTime = timeInSeconds * distanceInMeters;
 let ivanDelay= Math.floor(distanceInMeters / 15) * 12.5;
 let ivanRecord = ivanDelay + ivanTime;
 if (ivanRecord<recordInSeconds){
    let win = recordInSeconds - ivanRecord;
    console.log(`Yes, he succeeded! The new world record is ${win.toFixed(2)} seconds.`);



    //     Отпечатването на конзолата зависи от резултата:
// •	Ако Иван е подобрил Световния рекорд (времето му е по-малко от рекорда) отпечатваме:
// o	" Yes, he succeeded! The new world record is {времето на Иван} seconds."
// •	Ако НЕ е подобрил рекорда (времето му е по-голямо или равно на рекорда) отпечатваме:
// o	"No, he failed! He was {недостигащите секунди} seconds slower."
// Резултатът трябва да се форматира до втория знак след десетичната запетая.

 }else if ( ivanRecord>recordInSeconds){
    let lost = ivanRecord-recordInSeconds;
    console.log(`No, he failed! He was ${lost.toFixed(2)} seconds slower.`);

 }
}
swimingRecord(["10464",
"1500",
"20"])
