// 1.	x – височината на къщата – реално число в интервала [2...100]
// 2.	y – дължината на страничната стена – реално число в интервала [2...100]
// 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]
function housePainting(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    
    
    
    

let frontWall = (x * x) - (1.2*2)
let backWall = x*x ;
let sideWallByOne= (x*y) - (1.5*1.5);
let bluePaintNeededWall = (frontWall+backWall+(2 * sideWallByOne)) / 3.4;


let roofTop = (x*y)*2;

let roofSide=2 * (x*h / 2);
let RedPaintNeededRoof = (roofSide + roofTop) / 4.3;
console.log((bluePaintNeededWall).toFixed(2));
console.log((RedPaintNeededRoof).toFixed(2));

}
housePainting(["6", "10","5.2"]);
