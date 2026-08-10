let btn = document.querySelector("#btn");

// btn.onclick = function(){
//     let h11 = document.querySelector("#title");
//   console.log( h11.innerText ="I AM AMBUJ");
   
    


btn.addEventListener("keyup" , function(event) {
 let h11 = document.querySelector("#title");
  console.log( h11.innerText ="I AM AMBUJ");
   console.log(event.key); });

   let input = document.querySelector("#name");
let title = document.querySelector("#title"); 
    
input.addEventListener("input", function(event) {
title.innerText = event.target.value; });

console.log(title.innerText);





