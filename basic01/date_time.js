let now = new Date();
console.log(now.toDateString());
console.log(typeof now);

let mybirthday = new Date( 2027 , 11 , 29)
console.log(mybirthday.toDateString());

let today = new Date();

console.log(mybirthday.getFullYear());

console.log(today.getMonth());

console.log(today.getDate());

console.log(today.getDay());

console.log(today.getHours());

console.log(today.getMinutes());

console.log(today.getMilliseconds());
console.log(Date.now());

let d1 = new Date("2026-01-01");
let d2 = new Date("2026-12-31");

console.log(d1 < d2);


let start = new Date("2026-07-01");
let end = new Date("2026-07-15");

let diff = end - start;

console.log(diff.toLocaleString());


let birth = new Date("2005-12-29");
let todays = new Date();

let age = todays.getFullYear() - birth.getFullYear();

console.log(age.toLocaleString());


let todayes= new Date();

todayes.setDate(todayes.getDate() + 5);

console.log(todayes.toDateString());

setInterval( () => {


console.log("hye i am ambuj");


}, 1000);