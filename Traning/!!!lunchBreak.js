function movie(input) {
    let serial = input[0];
    let serialLenght = Number(input[1]);
    let breakLenght = Number(input[2]);
 
    let lunchLenght = 1 / 8 * breakLenght;
    let freeLenght = 1 / 4 * breakLenght;
 
    let freeTime = breakLenght - lunchLenght - freeLenght;
    if (freeTime >= serialLenght) {
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(freeTime - serialLenght)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(serialLenght - freeTime)} more minutes.`)
    }
}