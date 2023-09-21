function project9 (input) {
    let dc =Number(input[0]);
    let price= dc * 7.61; ;
    let discount = 0.18 * price;
    let fprice = price - discount
    console.log(`The final price is: ${fprice} lv. 
The discount is: ${discount} lv.`)
}
project9(["550"])