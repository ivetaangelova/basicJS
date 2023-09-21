function accountBalance(input) {
    let index = 0;
    let ammount = 0;
    let myInput = input[index];
    index++;
    while (myInput !== "NoMoreMoney") {

        let money=Number(myInput);
        if (money < 0) {
            console.log("Invalid operation!")
            break;
        }
        console.log(`Increase: ${money.toFixed(2)}`)
        ammount += money;
        myInput = input[index];
        index++
       
    }
    console.log(`Total: ${ammount.toFixed(2)}`)


}
accountBalance(["120",
"45.55",
"-150", "100"])

