function everest(input) {
    let index = 0;
    let command = input[index];
    index++;
    let daysCount = 1;
    let metersTillEnd = 8848;
    let sumMetersDistance = 5364;
    while (command !== "END") {
      
        if (command == "Yes") {
            daysCount++
        }
        if (daysCount > 5) {
            console.log("Failed!");
            console.log(sumMetersDistance);
          return;
        }
        let metersDistace = Number(input[index]);
        index++
        sumMetersDistance += metersDistace;
        if (sumMetersDistance >= metersTillEnd) {
            console.log(`Goal reached for ${daysCount} days!`);
           return
        } 


        command = input[index];
        index++;
        
    }
        console.log("Failed!");
        console.log(sumMetersDistance);
      
    
}
everest
(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])





