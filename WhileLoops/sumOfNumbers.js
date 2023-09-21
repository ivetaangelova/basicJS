function sumOfNumbers (input){
    let index=0;
    let myNumber=Number(input[index]);
    index++
    let numbs=Number(input[index]);
    index++
    while (numbs<myNumber){
        let nextNumber=Number(input[index]);
        index++
        numbs+=nextNumber
       
    }
    console.log(numbs)


}sumOfNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

