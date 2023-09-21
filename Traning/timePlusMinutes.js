
function timePlusMinutes (input){
    let hours=Number(input[0])
    let minutes=Number(input[1])
    let totalMinutes = hours*60 + minutes+15;
    
    let totalHours= Math.floor(totalMinutes/60)
    let finalMinutes= (totalMinutes%60)
    if (totalHours===24){
        totalHours=0;
    }
    if (finalMinutes<10){
        console.log(`${totalHours}:0${finalMinutes}`)
    }else {
        console.log(`${totalHours}:${finalMinutes}`)
    }

}
timePlusMinutes(["1", "46"])