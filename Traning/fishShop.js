function fishland (input){
//     •	Първи ред – цена на скумрията на килограм. Реално число в интервала [0.00…40.00]
// •	Втори ред – цена на цацата на килограм. Реално число в интервала [0.00…30.00]
// •	Трети ред – килограма паламуд. Реално число в интервала [0.00…50.00]
// •	Четвърти ред – килограма сафрид. Реално число в интервала [0.00… 70.00]
// •	Пети ред – килограма миди. Цяло число в интервала [0 ... 100]
let mackrelPriceKg =Number(input[0]);
let sprinklePriceKg=Number(input[1]);

let bonitoKg =Number(input[2]);
let KgSafrid=Number(input[3]);
let KgMussels =Number(input[4]);

 
// •	Паламуд – 60% по-скъп от скумрията
// •	Сафрид – 80% по-скъп от цацата
// •	Миди – 7.50 лв. за килограм
let bonitoPriceKg= bonitoKg - bonitoKg + 1 * (mackrelPriceKg + (mackrelPriceKg * 0.6));
let safridPriceKg= KgSafrid - KgSafrid + 1 * (sprinklePriceKg + (sprinklePriceKg * 0.8));
let musselsPriceKg= 7.50;
//паламуд, сафрид и миди
let finalPrice= (bonitoKg * bonitoPriceKg) + (KgSafrid * safridPriceKg) + (KgMussels * musselsPriceKg)
console.log((finalPrice).toFixed(2))

}
fishland(["5.55", "3.57", "4.30","3.60", "7"])