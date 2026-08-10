function one(){
    return 1 ;
}

function two(){

    return one()+ one();
}
function three() {
   let  ans =  one() + two() + two();
  console.log(ans);
  
}
