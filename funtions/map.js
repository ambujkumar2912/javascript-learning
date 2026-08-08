let student = [ { 

     name : "ambuj",
     roll : 6 } , { 

        name : "chiku",
        roll : 3 
     },  ];


let rol = student.map( (el) => {

  return el.roll /3;
} );