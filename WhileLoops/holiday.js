function holiday(input) {
    let index = 0;
    let moneyNeededForHolyday = Number(input[index]);
    index++;
    let capital = Number(input[index]);
    index++;
    let command = input[index];
    index++;
    let moneySpendSave = Number(input[index]);
    let spendRow=0;
    let daysCount=0;
    let lastAdd=0;
    while (command==="save" || command==="spend") {
        lastAdd= moneyNeededForHolyday
        daysCount++;
        if (command === "spend") {
            capital -= moneySpendSave;
           spendRow++;
        
            if(capital<0){
                capital=0;
            }else if(spendRow===5){
            
                break;
            }
            
        } else if (command === "save") {
            spendRow=0;
            capital += moneyNeededForHolyday;
            
            
        }
        
        moneySpendSave = Number(input[index]);
        index++
        command=input[index];
        index++;
    }
   if (spendRow===5){
    console.log("You can't save the money.");
    console.log(`${daysCount}`)
   }else{
    console.log(`You saved the money for ${daysCount} days.`)
   }
}
holiday(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])







