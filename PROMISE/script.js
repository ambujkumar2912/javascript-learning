

function addnum(dataa) {
 

 return  new Promise((resolve,  reject)=> {
    let internetspeed = Math.floor(Math.random()*10) + 1;
    if( internetspeed > 4){
        return resolve(" success : DATA WAS SAVED");
    } else {
        return reject("failure : DATA CANT SAVE PLEASE TRY AGAIN LATER" );
    }   }); } 

 addnum("hye sir")
 .then((result) =>  {
console.log(" data1 saved , promised done");
console.log("result is :", result  );

 addnum("hye sir").then((result) => {
    console.log("data 2 saved ");
    console.log("result2 is :", result  );
 })



} ).catch((failure) => {
console.log("promised not  done sorry ");
 console.log("failure is :", failure  );
 
})
