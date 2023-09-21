function divideby9 (input){
    // Напишете функция, която получава две числа и принтира  на конзолата, всички 
    // числа в диапазона, които се делят на 9 без остатък, както и тяхната
    //  сума.  На първия ред отпечатайте сумата на числата, а на следващите редове
    //   отговарящите на условието числа.
    let n1=Number(input[0]);
    let n2=Number(input[1]);
   let  sum=0;
   let sumOfNumbers=``;

    for(let i=n1;i<n2; i++){
        if (i%9===0){
            sumOfNumbers;
            sum+=i;
            
        }
        
        
    }
    console.log(`The sum: ${sum}`)
    console.log(sumOfNumbers);
}
divideby9(["100", "200"])