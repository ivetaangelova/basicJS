function minNumber (input){
let index=0;
let commnad=input[index];
index++
let myMinNumber=Number.MAX_SAFE_INTEGER;
while (commnad!== "Stop"){
    let numb=Number(commnad);
    
    if (myMinNumber>numb){
        myMinNumber=numb;
    }
    commnad=input[index];
    index++
}
console.log(myMinNumber)
}
minNumber(["-100",
"99",
"80",
"-70",
"Stop"])
