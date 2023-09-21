function oldBooks (input){
    let index=0;
    let rightBook=input[index];
    index++
    let searchBook=input[index];
    index++;
    let countBook=0;

    while(searchBook!=="No More Books"){
        if (searchBook===rightBook){
            console.log(`You checked ${countBook} books and found it.`);
            return;
        }
        countBook+=1;
        searchBook=input[index];
        index++
    }

    console.log(`The book you search is not here!`);
    console.log(`You checked ${countBook} books.`);
    

}
oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])



