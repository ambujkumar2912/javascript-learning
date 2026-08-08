let odd = function(n) {
console.log( !(n%2 == 0)); 

}
let even = function(n) {
console.log( (n%2 == 0)); 

}

 function  oddorEvenFactory(Request) {

    if( Request == "odd"){
       let odd = function(n) {
          console.log( !(n%2 == 0));  
    }
    return odd; }
    else if (Request == "even"){
         let even = function(n) {
          console.log( (n%2 == 0));
    }
    return even;
}  else {
    console.log("wrong request");
    
} let funzi = oddorEvenFactory(request);
    }

 
     
let request = "odd";