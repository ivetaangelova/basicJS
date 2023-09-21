function sumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;
    let sumAllPrime = 0;
    let sumAllNonPrime = 0;
    while (command !== 'stop') {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++
            continue;
        }
        let isPrime = true;
        for (let divasior = 2; divasior < num; divasior++) {
            if (num % divasior === 0) {
                isPrime = false;
                break;
            }

        }
        if (isPrime) {
            sumAllPrime += num;
        } else {
            sumAllNonPrime += num;
        }

        command = input[index];
        index++;
    }
    console.log(`Sum of all prime numbers is: ${sumAllPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumAllNonPrime}`);
}
sumPrimeNonPrime
(["30",
"83",
"33",
"-1",
"20",
"stop"])

