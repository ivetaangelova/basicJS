function cake(input){
let index=0;
let width=Number(input[index]);
index++;
let lenght=Number(input[index]);
index++
let command=input[index];
index++
let cakePieces=width*lenght;
while(command!== "STOP"){
    piecesOfCake=Number(command);
    cakePieces-=piecesOfCake;
    if (cakePieces<=0){
        console.log(`No more cake left! You need ${Math.abs(cakePieces)} pieces more.`)

        return;
    }
    command=input[index];
    index++
}

console.log(`${Math.abs(cakePieces)} pieces are left.`)
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])

