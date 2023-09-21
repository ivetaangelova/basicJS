
function depositCalculator(input){
    let depS = Number(input[0]);
    let depTime = Number(input[1]);
    let inPercents = Number(input[2]);
    let fPercents = inPercents / 100 ;

    let finalSum = depS + depTime * ((depS * fPercents ) / 12)
    console.log(finalSum)
}
depositCalculator(["200", "3 ", "5.7 "]);
