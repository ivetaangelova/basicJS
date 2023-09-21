function fruitShop (input){
let fruit = input[0];
let dayOfWeek=input[1];
let quantity= Number(input[2]);
let totalPrice=0;
let hasError=false;
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85


if (dayOfWeek === `Monday` || dayOfWeek === `Tuesday`|| dayOfWeek=== `Wednesday`|| dayOfWeek ===`Thursday` || dayOfWeek === `Friday` ){
switch(fruit){
    case `banana`:
        totalPrice= quantity * 2.50;break;
    case `apple`:
        totalPrice=quantity * 1.20;break;
    case `orange`:
        totalPrice=quantity * 0.85;break;
    case `grapefruit`:
        totalPrice=quantity* 1.45; break;
    case `kiwi`:
        totalPrice=quantity * 2.70;break;
    case `pineapple`:
        totalPrice=quantity * 5.50;break;
    case `grapes`:
        totalPrice=quantity*3.85;break;
    default:
        hasError=true;break;
    
}
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20

}else if (dayOfWeek === `Saturday`|| dayOfWeek ===  `Sunday`){
    switch(fruit){
        case `banana`:
        totalPrice= quantity * 2.70;break;
    case `apple`:
        totalPrice=quantity * 1.25;break;
    case `orange`:
        totalPrice=quantity * 0.90;break;
    case `grapefruit`:
        totalPrice=quantity* 1.60; break;
    case `kiwi`:
        totalPrice=quantity * 3.00;break;
    case `pineapple`:
        totalPrice=quantity * 5.60;break;
    case `grapes`:
        totalPrice=quantity*4.2;break;
    default:
        hasError=true;break;
        
    }

}else  {
   hasError=true
    console.log(`error`);
    return;
    
}
if(!hasError){
    console.log(totalPrice.toFixed(2))

}else{
    console.log(`error`)
}
}
fruitShop(["234",
"orange",
"3"])




