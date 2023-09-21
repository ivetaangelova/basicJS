function cinemaTicket(input) {
    let index = 0;
    let command = input[index];
    index++
    let totalTicked = 0;
    let totalStudTick = 0;
    let totalStandTick = 0;
    let totalKidTick = 0;

    while (command !== "Finish") {
        let movieName = command
        let spaceCapcity = Number(input[index]);
        index++;
        let kidTickets = 0;
        let standardTickets = 0;
        let stundetsTickets = 0;
        let command1 = input[index];
        index++
        let spaceTaken = 0;
        while (command1 !== "End") {
            if (spaceTaken === spaceCapcity) {
                break;
            }
            let ticketType = command1;
            switch (ticketType) {
                case "kid":
                    kidTickets++;
                    spaceTaken++; break;
                case "standard":
                    standardTickets++;
                    spaceTaken++; break;
                case "student":
                    stundetsTickets++;
                    spaceTaken++; break;
                default: break;

            }
            totalTicked++;
            command1 = input[index];
            index++
        }
        totalKidTick += kidTickets;
        totalStandTick += standardTickets;
        totalStudTick += stundetsTickets;
        let capacyFull = (kidTickets + standardTickets + stundetsTickets) / spaceCapcity * 100
        console.log(`${movieName} - ${capacyFull.toFixed(2)}% full.`);
        if (command1 == "Finish") {
            break;
        }
        command = input[index];
        index++
    }
    let totalStudTickInPerc = (totalStudTick / totalTicked) * 100;
    let totalStandTickInPerc = (totalStandTick / totalTicked) * 100;
    let totalKidTickInPerc = (totalKidTick / totalTicked) * 100
    console.log(`Total tickets: ${totalTicked}`)
    console.log(`${totalStudTickInPerc.toFixed(2)}% student tickets.`);
    console.log(`${totalStandTickInPerc.toFixed(2)}% standard tickets.`);
    console.log(`${totalKidTickInPerc.toFixed(2)}% kids tickets.`);




}
cinemaTicket(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])

