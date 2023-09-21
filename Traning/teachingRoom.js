function teachingRoom (input){
    let w =Number(input[0]);
    let h =Number(input[1]);
        let converWidthToCM = h * 100;
        let convertHeighToCM = w * 100;
       let widthWithoutHall = converWidthToCM - 100;
       let workSpaceOnWidth = widthWithoutHall /70;
      
       let heighWithoutHall = convertHeighToCM/120;
       
       let workSpaceExactCountHeight = Math.floor(workSpaceOnWidth);

       let workSpaceExactCountWidth = Math.floor(heighWithoutHall);
       let totalWorkSpace = (workSpaceExactCountHeight * workSpaceExactCountWidth) - 3;
       console.log(totalWorkSpace);
       




    

}
teachingRoom(["15", "8.9"])
