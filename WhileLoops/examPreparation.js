function examPreparation (input){
let index=0;
    let badGrades= Number(input[index]);
    index++
    let exName=input[index];
    index++
    let exGrade=Number(input[index]);
    index++
    let badGradeCount=0;
    let sumGrade=0;
    let problemSolve=0;
    let lastProblemName="";
    while(exName!== "Enough"){
        lastProblemName=exName
        if(exGrade<=4){
            badGradeCount++

        }
        if(badGradeCount===badGrades){
            console.log(`You need a break, ${badGradeCount} poor grades.`);
            return
        }
        problemSolve++
        sumGrade+=exGrade;
        exName=input[index];
        index++
        exGrade=Number(input[index])
        index++
    }
//     o	"Average score: {средна оценка}"
// o	"Number of problems: {броя на всички задачи}"
// o	"Last problem: {името на последната задача}"
let avaregaGrade= sumGrade/problemSolve
    console.log(`Average score: ${avaregaGrade.toFixed(2)}`);
    console.log(`Number of problems: ${problemSolve}`);
    console.log(`Last problem: ${lastProblemName}`);
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])

