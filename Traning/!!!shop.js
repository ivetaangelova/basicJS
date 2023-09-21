function shop(input) {
    let budget = Number(input[0]);
    let videoCardsN = Number(input[1]);
    let processorN = Number(input[2]);
    let ramN = Number(input[3]);
 
    let videoPrice = videoCardsN * 250;
    let processorPrice = 0.35 * videoPrice * processorN;
    let ramPrice = 0.1 * videoPrice * ramN;
 
    let price = videoPrice + processorPrice + ramPrice;
 
    if (videoCardsN > processorN) {
        price = price * 0.85;
    }
 
    if (price <= budget) {
        console.log(`You have ${(budget - price).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva more!`);
    }
}