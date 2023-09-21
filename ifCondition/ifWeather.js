// 26.00 - 35.00	Hot
// 20.1 - 25.9	Warm
// 15.00 - 20.00	Mild
// 12.00 - 14.9	Cool
// 5.00 - 11.9	Cold

function weather (input){
    let celsium=Number(input[0])
    if (celsium >=26.00 && celsium <35.00){
    console.log("Hot");
    }else if (celsium>=20.1&& celsium<= 25.9){
        console.log("Warm");
    }else if (celsium>=15&& celsium<= 20){
        console.log("Mild");
    }else if (celsium>=12&& celsium<= 14.9){
        console.log("Cool");
    }else if (celsium>=5&& celsium<= 11.9){
        console.log("Cold");
    }else {
        console.log("unknown")
    }
}
weather(["10"])
