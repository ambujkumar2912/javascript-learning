const num = 4000000
console.log( num);

const scorenum = new Number(500)
console.log( scorenum);


console.log(scorenum.toString().length )
console.log(scorenum.toFixed(2));

console.log(num.toLocaleString());

//++++++++++++++++ MATH++++++++++++++++

console.log(Math);

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.9)); // 5

console.log(Math.floor(4.9)); // 4

console.log(Math.ceil(4.1)); // 5

console.log(Math.trunc(4.9)); // 4

console.log(Math.abs(-10)); // 10

console.log(Math.max(5, 9, 2, 18, 7)); // 18

console.log(Math.min(5, 9, 2, 18, 7)); // 2

console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3);         // 8 (modern syntax)

console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(81)); // 9

console.log(Math.cbrt(27)); // 3

console.log(Math.random());

let random = Math.floor(Math.random() * 9);

console.log(random);

const min = 10;
const max = 20 ;

console.log(Math.floor(Math.random() * (max - min + 1)) + min );
