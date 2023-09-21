// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на
//  височината към нея

function areaOfFigures (input){
let figure = input[0];
let result=0;

if (figure === "square" ){
    let side =Number(input[1])
    result = side * side
}else if (figure === "rectangle" ){
    let side =Number(input[1]);
    let sideB=Number(input[2]);
    result = side * sideB
}else if (figure === "circle" ){
    let r =Number(input[1]);
    result = Math.PI * (Math.pow(r,2))
}else  {
let side =Number(input[1]);
let h=Number(input[2]);
result = side * h /2
}
console.log(result.toFixed(3))
}

areaOfFigures(["square", "5"])