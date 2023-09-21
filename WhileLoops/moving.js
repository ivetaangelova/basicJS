function moving (input){
    // 1.	Широчина на свободното пространство - цяло число в интервала [1...1000]
    // 2.	Дължина на свободното пространство - цяло число в интервала [1...1000]
    // 3.	Височина на свободното пространство - цяло число в интервала [1...1000]
    // 4.	На следващите редове (до получаване на команда "Done") - брой кашони, които се пренасят в квартирата - цели числа в интервала [1...10000];
    // Функцията трябва да приключи прочитането на данни при команда "Done" или ако свободното място свърши.
    index=0;
    let width=Number(input[index]);
    index++;
    let lenght=Number(input[index]);
    index++;
    let hight=Number(input[index]);
    index++;
    let commnad=input[index];
    index++;
    let accomodationSpace=width*hight*lenght;
    while (commnad!=='Done'){
        let boxes=Number(commnad);
        accomodationSpace-=boxes;
        if(accomodationSpace<0){
            
            break;
        }
        commnad=input[index];
        index++
    }
    if (accomodationSpace>=0){
    console.log(`${accomodationSpace} Cubic meters left.`);
    }else{
        console.log(`No more free space! You need ${Math.abs(accomodationSpace)} Cubic meters more.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

