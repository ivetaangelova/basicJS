
function foodDelivary(input){
    let chickenMenu =Number(input[0]);
    let fishMenu = Number(input[1]);
    let veganMenu= Number(input[2]);

    let chickenMenuPrice = chickenMenu * 10.35;
    let fishMenuPrice = fishMenu * 12.4;
    let veganMenuPrice = veganMenu * 8.15;
    let dessertprice= (chickenMenuPrice + fishMenuPrice + veganMenuPrice) *0.2;

    let finalPrice= chickenMenuPrice + fishMenuPrice + veganMenuPrice + dessertprice + 2.5;
    console.log(finalPrice)


}
foodDelivary(["2", "4", "3"])