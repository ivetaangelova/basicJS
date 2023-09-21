function cinema (input){
    let project=input[0];
    let row= Number(input[1]);
    let collons=Number(input[2]);
    let finalCounts= row * collons;
    let cinemaProfit=0;
    // •	Premiere – премиерна прожекция, на цена 12.00 лева.
    // •	Normal – стандартна прожекция, на цена 7.50 лева.
    // •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
    
    switch(project){
        case "Premiere" :
            cinemaProfit=finalCounts*12.00; break;
        case "Normal":
            cinemaProfit=finalCounts*7.50;break;
        case "Discount":
        cinemaProfit=finalCounts*5.00; break;

    }
console.log(`${(cinemaProfit).toFixed(2)}leva`);

}
cinema(["Discount",
"12",
"30"])



