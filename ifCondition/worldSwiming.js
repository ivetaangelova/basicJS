function world(input) {
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
 
    let ivanTime = distance * timePerMeter;
    let ivanDelayLoops = Math.floor(distance / 15);
    let ivanDelay = (ivanDelayLoops * 12.5);
    let ivanRecord = ivanTime + ivanDelay;
 
    if (ivanRecord < worldRecord) {
        console.log(` Yes, he succeeded! The new world record is ${ivanRecord.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(ivanRecord - worldRecord).toFixed(2)} seconds slower.`)
    }
}