function steps (input){
let index=0;
let command=input[index];
index++;
let sumSteps=0;
let diffrentsBtwSteps=0;
while(command!=="Going home"){
  let  incomingSteps =Number(command);
 if ( sumSteps>=10000){
    diffrentsBtwSteps= sumSteps-10000;
    console.log( "Goal reached! Good job!");
    console.log(`${diffrentsBtwSteps} steps over the goal!`);
    return;
 }
  sumSteps+=incomingSteps;
  command=input[index];
  index++
}
let stepsToHome=Number(input[index]);

sumSteps+=stepsToHome;
if(sumSteps<10000){
diffrentsBtwSteps=10000-sumSteps;
console.log(`${diffrentsBtwSteps} more steps to reach goal.`);
}else{
    diffrentsBtwSteps=sumSteps-10000;
    console.log( "Goal reached! Good job!");
    console.log(`${diffrentsBtwSteps} steps over the goal!`);
}


}
steps(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200"])
