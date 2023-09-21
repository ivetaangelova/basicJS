function graduation(input) {
    index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let cLass = 1;
    fails=0;
    finalGrade=0;
    let hasBeenExcluded=false;
    while (cLass <= 12) {
        if (grade<4.00){
            fails++;
            if(fails==2){
               hasBeenExcluded=true;
                break;
            }
            
        }else {
            cLass++;
            finalGrade+=grade;
            grade=Number(input[index]);
            index++
            continue;
        }
     
    }
    if (hasBeenExcluded){
        console.log(`${name} has been excluded at ${cLass} grade`)
    }else{
        console.log(`${name} graduated. Average grade: ${(finalGrade/12).toFixed(2)}`)
    }
   

}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
