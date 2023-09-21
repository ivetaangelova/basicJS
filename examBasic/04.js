function exam (input){
    let studentCount=Number(input[0])
    let gradeSum=0;
    let poorGrade=0;
    let goodGrade=0;
    let veryGoodGrade=0;
    let excelentGrade=0;
    
    // оценка между 2.00 и 2.99, между 3.00 и 3.99, между 4.00 и 4.99, 5.00 или повече. 
    for (let i=1;i<=studentCount; i++){
        let grade=Number(input[i]);
        gradeSum+=grade;
        if(grade<=2.99){
            poorGrade++;
        }else if(grade<=3.99){
            goodGrade++;
        }else if(grade<=4.99){
            veryGoodGrade++
        }
        else{
            excelentGrade++
        }

    }
    let excelentGradePercent=(excelentGrade/studentCount)*100
    let veryGoodGradePercent=(veryGoodGrade/studentCount)*100
    let goodGradePercent=(goodGrade/studentCount)*100
    let poorGradePercent=(poorGrade/studentCount)*100
    let averageGrade=gradeSum/studentCount
    console.log(`Top students: ${excelentGradePercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${veryGoodGradePercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${goodGradePercent.toFixed(2)}%`);
    console.log(`Fail: ${poorGradePercent.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);



    
}
exam
(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])
