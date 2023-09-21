function maxNumber (input){
    let index=0;
    let commnad=input[index];
    index++;
    let myMaxNumber= Number.MIN_SAFE_INTEGER;
    while (commnad !== "Stop"){
        let numb=Number(commnad);
        if(myMaxNumber<numb){
            myMaxNumber=numb
            
        }
        commnad=input[index];
        index++
    }
    console.log(myMaxNumber)
}
maxNumber(["-45",
"-20",
"-7",
"-99",
"Stop"])

