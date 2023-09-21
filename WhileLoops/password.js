function password(input){
    let index=0;
    let name=input[index];
    index++;
    let pass=input[index];
    index++;
    let tempPaswword=input[index];
    index++
    while (pass !== tempPaswword){
        tempPaswword=input[index];
        index++
    }
    console.log(`Welcome ${name}!`)
}
password(["Gosho",
"secret",
"secret"])

