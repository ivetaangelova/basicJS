function godzillaVsKong (input){

let budget =Number(input[0]);
let extras =Number(input[1]);
let outfit =Number(input[2]);
let decor= budget*0.1;

if (extras>150){
    extras = extras*0.9;
}

let priceDecorAndOutfits = decor + (outfit*extras);
if (priceDecorAndOutfits>budget){
    let moneyNeeded= priceDecorAndOutfits-budget
    console.log("Not enough money!")
    console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
}else{
    let moneyLeft= budget-priceDecorAndOutfits;
    console.log("Action!");
    console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
}
}
godzillaVsKong(["20000",
"120",
"55.5"])

