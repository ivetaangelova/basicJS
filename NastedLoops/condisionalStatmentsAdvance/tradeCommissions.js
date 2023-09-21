function tradeCommissions(input){
let town= input[0];
let buget= Number(input[1]);
let commisionPrice=0;
let hasError=false;

 if(buget>0 && buget<= 500){
  switch(town){
    case `Sofia`:
        commisionPrice=buget*0.05;
    break;
    case `Varna`:
        commisionPrice=buget*0.045;
    break;
    case`Plovdiv`:
    commisionPrice=buget*0.055;
    break;
    default:
        hasError=true;break;
  }
	
 }else if(buget>0 &&buget<= 1000){
    switch(town){
        case `Sofia`:
            commisionPrice=buget*0.07;
        break;
        case `Varna`:
            commisionPrice=buget*0.075;
        break;
        case`Plovdiv`:
        commisionPrice=buget*0.08;
        break;
        default: hasError=true;break;
    }


 }else if(buget>0 &&buget<= 10000){
    switch(town){
        case `Sofia`:
            commisionPrice=buget*0.08;
        break;
        case `Varna`:
            commisionPrice=buget*0.10;
        break;
        case`Plovdiv`:
        commisionPrice=buget*0.12;
        break;
        default: hasError=true;break;
    }

 }else if(buget>0 &&buget> 10000){
    switch(town){
        case `Sofia`:
            commisionPrice=buget*0.12;
        break;
        case `Varna`:
            commisionPrice=buget*0.13;
        break;
        case`Plovdiv`:
        commisionPrice=buget*0.145;
        break;
        default: hasError=true;
    }

 }else{
    hasError=true;
 }
 if (!hasError){
    console.log(commisionPrice.toFixed(2));
 }else{
    console.log(`error`)
 }
 
}
tradeCommissions(["Plovdiv",
"-50"])




