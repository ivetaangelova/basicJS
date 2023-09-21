function newHome(input) {
    flower = input[0];
    flowerCount = Number(input[1]);
    buget = Number(input[2]);
    finalFlowerPrice = 0;

    switch (flower) {
        case "Roses":
            finalFlowerPrice = flowerCount * 5;
            if (flowerCount >= 80) {
                finalFlowerPrice *= 0.9;
            }
            break;
        case "Dahlias":
            finalFlowerPrice = flowerCount * 3.8;
            if (flowerCount >= 90) {
                finalFlowerPrice *= 0.85;
            }
            break;
        case "Tulips":
            finalFlowerPrice = flowerCount * 2.8;
            if (flowerCount >= 80) {
                finalFlowerPrice *= 0.85;
            }
            break;
        case "Narcissus":
            finalFlowerPrice = flowerCount * 3;
            if (flowerCount < 120) {
                finalFlowerPrice *= 1.15;
            }
            break;
        case "Gladiolus":
            finalFlowerPrice = flowerCount * 2.5;
            if (flowerCount < 80) {
                finalFlowerPrice *= 1.20;
            }
            break;

    }
    if (buget >= finalFlowerPrice) {
        let moneyLeft = buget - finalFlowerPrice
        console.log(`Hey, you have a great garden with ${flowerCount} ${flower} and ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        let moneyNeeded = finalFlowerPrice - buget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`)
    }

} newHome(["Gladiolus",
    "64",
    "160"])

