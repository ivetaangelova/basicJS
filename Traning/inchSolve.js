function degrees(input){
    let rR =Number(input[0]);
   //градус = радиан * 180 /
    let C = rR * 180 / Math.PI
    
    console.log(C)
}
degrees(["3.1416"])