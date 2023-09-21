// •	На първи ред: цената в долари за процесора – реално число в интервала [200.00 … 3000.00]
// •	На втори ред: цената в долари за видео карта – реално число в интервала [100.00 … 1500.00]
// •	На трети ред: цената в долари за една RAM памет – реално число в интервала [80.00 ... 500.00]
// •	На четвърти: ред брой RAM памети – цяло число в интервала [1 ... 4]
// •   На пети ред: процент отстъпка – реално число в интервала [0.01 … 0.1]

function pcStore (input){
    let procesorPriceDollar=Number(input[0]);
    let videoCardPriceDollar=Number(input[1]);
    let ramPriceDollar=Number(input[2]);
    let ramCount=Number(input[3]);
    let percentDiscount=Number(input[4]);

    let procesorPriceLeva= procesorPriceDollar*1.57;
    let videoCardPriceleva= videoCardPriceDollar*1.57;
    let ramPriceLeva= ramPriceDollar*1.57;
    let ramTotalPrice= ramCount*ramPriceLeva;

    let procesorAndVideoCardTotalPrice=(procesorPriceLeva+videoCardPriceleva)-((procesorPriceLeva+videoCardPriceleva)*percentDiscount)
    let totalMoneyNeeded= procesorAndVideoCardTotalPrice+ramTotalPrice
    console.log(`Money needed - ${totalMoneyNeeded.toFixed(2)} leva.`);



}
pcStore(["500",
"200",
"80",
"2",
"0.05"])
