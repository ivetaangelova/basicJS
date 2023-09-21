


function maidenParty(input){
    let moneyNeededForParty=Number(input[0]);
    let loveStories=Number(input[1]);
    let VosachniRoses=Number(input[2]);
    let keychains=Number(input[3]);
    let karikaturi=Number(input[4]);
    let luckSuprise=Number(input[5]);

    let sumCount=loveStories+VosachniRoses+keychains+karikaturi+luckSuprise;
    let loveStoriesPrice= loveStories*0.6;
    let VosachniRosesPrice=VosachniRoses*7.2;
    let keychainsPrice= keychains*3.6;
    let karikaturiPrice= karikaturi*18.2;
    let luckSuprisePrice=luckSuprise*22;

    let totalPrice= (loveStoriesPrice+VosachniRosesPrice+keychainsPrice+karikaturiPrice+luckSuprisePrice)
    if (sumCount>=25){
        totalPrice*=0.65;
    }
    let profit= totalPrice*0.9;
    if (profit>=moneyNeededForParty){
        let moneyLeft= profit-moneyNeededForParty
        console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`);
    }else{
        let moneyNeeded= moneyNeededForParty-profit;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }

    
    
    


}
maidenParty
(["40.8",
"20",
"25",
"30",
"50",
"10"])
