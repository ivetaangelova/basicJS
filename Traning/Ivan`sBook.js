// Брой страници в текущата книга – цяло число в интервала [1…1000]

// 2. Страници, които прочита за 1 час – цяло число в интервала [1…1000]

// 3. Броят на дните, за които трябва да прочете книгата – цяло число в интервала [1…1000]
function ivanBooks (input){
    let pages = Number(input[0]);
    let pagesForAnHour = Number(input[1]);
    let days = Number(input[2]);
    let final = (pages / pagesForAnHour) / days
    console.log(final)


}
ivanBooks(["212 ", "20 ","2 "])