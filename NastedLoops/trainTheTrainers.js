function trainTheTrainers (input){
    let index=0;
    let jury=Number(input[index]);
    index++;
    let command=input[index];
    index++
    let gradeCount=0;
    let presentationGrade=0;
    let sumGrade=0;
    let allGradeCounter=0;

    while(command!=='Finish'){
        let grade=Number(input[index])
       while(gradeCount<jury){
        gradeCount++
        grade=Number(input[index])
        index++
        presentationGrade+=grade;
        sumGrade+=grade;
        allGradeCounter++

       }
       let avarigeGradePresentation=presentationGrade/gradeCount
       console.log(`${command} - ${avarigeGradePresentation.toFixed(2)}.`)
       presentationGrade=0;
       gradeCount=0;
       command=input[index];
       index++
    }
    console.log(`Student's final assessment is ${(sumGrade/allGradeCounter).toFixed(2)}.`);
}
trainTheTrainers
(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])
