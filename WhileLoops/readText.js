function readName(input) {
 let index=0;
 let name =input[index];
 index++
 while(name!=="Stop"){
    console.log(name);
    name=input[index];
    index++
 }
}
readName(["Nakov",
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld"])
