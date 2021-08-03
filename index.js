








const date = prompt("Please enter your upcomming birthday in following format  \n 1 Jan 2021 ");


var bornday = date; 
var presentDate = new  Date()+31536000000 ;
console.log(presentDate);





function countdown(){
    const bornYear = new Date(date);
    const currentDate = new Date();
   const miliSec = bornYear-currentDate;
   const tsec = Math.floor(miliSec/1000);
   
   
   
   const sec = Math.floor(tsec%60);
   const min = Math.floor((tsec/60)%60);
   const hour= Math.floor((tsec/3600)%24);
   const days = Math.floor((tsec/3600)/24);

  $("#sec").html(sec);
  $("#min").html(min);
  $("#hour").html(hour);
  $("#day").html(days);




 








}




countdown();


setInterval(countdown,1000)