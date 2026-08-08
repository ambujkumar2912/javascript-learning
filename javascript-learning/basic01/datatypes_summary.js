let age = 20;      // 1 NUMBERS
let price = 99.99;

console.log(age);
console.log(typeof age);

console.log(price);
console.log(typeof price);  


let name = "Ambuj";    // 2.STRINGS

console.log(name);
console.log(typeof name);


let isStudent = true;   //3 BOOLEN
let isMarried = false;

console.log(typeof isStudent);
console.log(typeof isMarried);


let score;        // UNDEFINED

console.log(score);
console.log(typeof score);



let user = null;       //NULL

console.log(user);
console.log(typeof user);


let bigNumber = 1234567890123456789012345678901234567890n;

console.log(bigNumber);          // BIGLNT
console.log(typeof bigNumber);


let id1 = Symbol("ambuj");
let id2 = Symbol("ambuj");

console.log(id1 === id2);   // SYMBOLS


// non - premitive data types 

const heros = ["shaktiman" , "batman" , "superman"];

let obj = {
    name: "Ambuj",
    age: 20, 
}

const myFunction = function() {
    console.log("hello ji");
    
    
}