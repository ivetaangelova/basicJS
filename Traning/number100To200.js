// •	под 100 отпечатайте: "Less than 100"
// •	между 100 и 200 отпечатайте: "Between 100 and 200"
// •	над 200 отпечатайте: "Greater than 200"
function number100To200 (input){
    let myNumber =Number(input[0]);
   
    if (myNumber<=99){
        console.log("Less than 100")
    }
    else if(myNumber>=100 && myNumber<=200){
        console.log("Between 100 and 200")
    }
    else if (myNumber>200){
        console.log("Greater than 200")
    }

}
number100To200(["150"])