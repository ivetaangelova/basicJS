// •	Първи ред – дни за престой – цяло число в интервала [0...365]
// •	Втори ред –  вид помещение –  "room for one person",  "apartment" или "president apartment"
// •	Трети ред –  оценка - "positive"  или "negative"

function santasHoliday(input){
let daysStaya=Number(input[0]);
let roomKind=input[1];
let grade=input[2];
let priceForStay=0;
let daysStay=daysStaya-1;
// •	"room for one person" – 18.00 лв за нощувка
// •	"apartment" – 25.00 лв за нощувка 
// •	"president apartment" – 35.00 лв за нощувка
switch(roomKind){
    case "room for one person":
      priceForStay= daysStay*18;
    break;

    case "apartment":
        if(daysStay<10){
            priceForStay= (daysStay*25)*0.7;
        }else if(daysStay<=15){
            priceForStay=(daysStay*25)*0.65;
        }else {
            priceForStay=(daysStay*25)*0.5;
        }
    break;
    case "president apartment":
        if(daysStay<10){
            priceForStay= (daysStay*35)*0.9;
        }else if(daysStay<=15){
            priceForStay=(daysStay*35)*0.85;
        }else {
            priceForStay=(daysStay*35)*0.8;
        }
    break;
}
if (grade==="positive"){
    priceForStay*=1.25;

}else{
    priceForStay*=0.9;
}
console.log(priceForStay.toFixed(2));

}
santasHoliday
(["30",
"president apartment",
"negative"])
