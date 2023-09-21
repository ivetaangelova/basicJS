function toyShop (input){

let holydayPrice = Number(input[0]);
let puzzels = Number(input[1]);
let dolls = Number(input[2]);
let puffyBears = Number(input[3]);
let minions = Number(input[4]);
let trucks = Number(input[5]);


let totalPrice= puzzels*2.6 + dolls*3 + puffyBears*4.1 + minions*8.2 +trucks*2;
let totalCountToys= puzzels + dolls +puffyBears+minions+trucks;
if (totalCountToys>=50){
    totalPrice = totalPrice*0.75;
}
let finalProfit= totalPrice *0.9;
if  (finalProfit>=holydayPrice){
let leftMoney = finalProfit-holydayPrice;
    console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`)
}
else {
    let moneyNeeded = holydayPrice-finalProfit;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);

}
}
toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
