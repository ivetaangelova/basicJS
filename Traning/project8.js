function animals(input){
    let dog =Number(input[0]);
    let cat =Number(input[1]);
    let df =dog * 2.50; ;
    let cf =cat * 4; ;
    let summary = df + cf
    console.log(summary)
}
animals(["5", "4"])