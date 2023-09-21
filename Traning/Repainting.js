


function repainting (input){
    let naylonQuantity = Number(input[0]) + 2;
    let painQuantity = Number(input[1]);
    let tinnerQuantity = Number(input[2]);
    let hoursQuantity = Number(input[3]);

    let supPaintQuantity = painQuantity + (painQuantity * 0.1);
    let supPainPrice = supPaintQuantity * 14.5;
    let naylonQuantityPrice = naylonQuantity * 1.5;
    let tinnerQuantityPrice =tinnerQuantity * 5;
    let hoursQuantityPrice = ((supPainPrice + naylonQuantityPrice + tinnerQuantityPrice + 0.4)* 0.3) * hoursQuantity
   
    
    let finalPrice = supPainPrice + naylonQuantityPrice +tinnerQuantityPrice + hoursQuantityPrice + 0.4;
    console.log(finalPrice)



}
repainting(["10", "11", "4", "8"])