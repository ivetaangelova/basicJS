function smallShop (input){
    // град / продукт	coffee	water	beer	sweets	peanuts 
let product = input[0];
let town = input[1];
let quantity = Number(input[2]);
let sum = 0;
switch(town){
    case "Sofia":
        switch(product){
            case "coffee":
            sum= quantity * 0.50;
            break;
            case "water":
                sum= quantity * 0.80;
                break;
            case "beer":
                sum=quantity * 1.20;
                break;
            case "sweets":
                sum=quantity * 1.45;
                break;
            case "peanuts":
                sum= quantity * 1.60;
                break;

        }

    break;
case "Plovdiv":
    switch(product){
        case "coffee":
            sum= quantity * 0.40;
            break;
            case "water":
                sum= quantity * 0.70;
                break;
            case "beer":
                sum=quantity * 1.15;
                break;
            case "sweets":
                sum=quantity * 1.30;
                break;
            case "peanuts":
                sum= quantity * 1.50;
                break;
//Plovdiv	0.40	0.70	1.15	1.30	1.50
    }

break;
case "Varna":
    switch(product){
        case "coffee":
            sum= quantity * 0.45;
            break;
            case "water":
                sum= quantity * 0.70;
                break;
            case "beer":
                sum=quantity * 1.10;
                break;
            case "sweets":
                sum=quantity * 1.35;
                break;
            case "peanuts":
                sum= quantity * 1.55;
                break;
        
    }
//Varna	0.45	0.70	1.10	1.35	1.55
break;
}
console.log(sum);
}
smallShop(["coffee",
"Sofia",
"2"])
    
