function combination(input){
//x1 + x2 + x3 = n
let magicNumber=Number(input[0]);
let validCombinationsCoun=0;
for (let x1 =0; x1<=magicNumber; x1++){
    for(let x2=0; x2<=magicNumber; x2++){
        for (let x3=0;x3<=24; x3++){
            if (x1+x2+x3 === magicNumber){
                validCombinationsCoun++
                
            }

        }
    }
}
console.log(validCombinationsCoun)

}combination(["25"])