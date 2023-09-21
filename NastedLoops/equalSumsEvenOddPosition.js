function equalSumsEvenOddPosition (input){
    let startNum=Number(input[0]);
    let endNumb=Number(input[1]);
    let result ='';

    for (let curNum=startNum; curNum<=endNumb; curNum++){
        let curNumAsString=curNum.toString()
        let oddNum=0;
        let evenNum=0;
        for(let index=0; index< curNumAsString.length ;index++){
            let position = index+1;
            let digNum=Number(curNumAsString[index]);
            if(position%2===0){
                evenNum+=digNum;

            }else {
                oddNum+=digNum
            }
        
        }
        if (oddNum===evenNum){
            result+=curNum + " ";
        }
    }
    console.log(result);
}
equalSumsEvenOddPosition(["123456",
"124000"])
