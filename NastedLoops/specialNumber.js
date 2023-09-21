function specialNumber(input) {
    let n = Number(input[0]);
    let startRange = 1111;
    let endRange = 9999;
    let allSpecNum = "";


    for (let sR = startRange; sR <= endRange; sR++) {
        let rangeAsString = sR.toString();
        let index = 0;
        let isValid = true;
        while (index < rangeAsString.length) {
            let individualNum = Number(rangeAsString[index]);

            if (n % individualNum === 0) {
                index++
                continue;
            } else {
                isValid = false;
                break;
            }

        }
        if (isValid) {
            allSpecNum += sR + " ";
        } else {
            continue;
        }
    }
    console.log(allSpecNum)

}
specialNumber(["11"])