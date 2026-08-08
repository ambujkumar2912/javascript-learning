// const favmovie = "dhammal";

//   let guess = prompt("guess my fav movie");

// while ( ( guess != favmovie) && (guess != "quit") ) {

//     guess = prompt("wrong movie please try again or quit");
// }

// if( guess == favmovie){

//     console.log("congratulations you win ");
    
// }
// else {
//       console.log("Thanks for playing ");
// }

let student =  [["aman" , 40 ] , [ "ambuj" , 100] , ["divya" , 50]];

for( let i = 0 ; i < student.length ; i++){
    for( let j = 0 ; j < student[i].length ; j++)
    console.log(student[i][j]);
    
}