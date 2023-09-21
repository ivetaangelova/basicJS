function clock (){
    for(let h = 0; h<24; h++){
        for (m = 0 ; m<60; m++){
            let buffer="";
            if (h<10){
               buffer= "0" + h;
            }else {
            buffer=h;
            }
            buffer+=':'
            if (m<10){
                buffer+= "0" +m
                
            }else{
                buffer+= m
            }
            console.log(buffer)
        }
        
    }
}clock ()