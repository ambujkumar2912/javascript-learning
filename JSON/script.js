// let student = {
//     name: "Ambuj",
//     age: 20,
//     skills: ["C++", "JavaScript"]
// };


// console.log( JSON.stringify(student));
 

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function(response){

//      return response.json();

    
// })
// .then(function(data){

//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].name);
//     console.log(data[0].email);
    
    
    
// })

// async function getusers() {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users");

//     let data = await response.json();
//     console.log(data);
    
// }
// getusers();

// async function adduser() {
//      try {
//     let api =  await fetch("https://jsonplaceholder.typicode.com/users" , {
//         method : "POST",
//         headers : {
//             "content-type" : "application/json"},
//             body : JSON.stringify ( 
//                 {
//     name: "Ambuj Kumar",
//     email: "ambuj@gmail.com"
// })
//         });

//         let data = await api.json();
//         console.log(data);
        
//     }
//     catch (error) {

//         console.log(error);

//     } }
//     adduser();
// let fruits = ["Apple", "Mango", "Banana"];

// // let [ first , second , third] = fruits;

// // console.log(first);
// // console.log(second);


// let newarr = [...fruits];

// console.log(newarr);

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// let c = [...a , ...b];
// console.log(c);

// let user = {
//     name: "Ambuj",
//     age: 20
// };

// let newUser = {
//     ...user,
//     city: "Roorkee"
// };

// console.log(newUser);


// let d = { name: "Ambuj" };
// let e = { age: 20 };

// let f = { ...d, ...e };

// console.log(c);

// let student = {
//     name: "Ambuj"
// };
// console.log(student.address?.city);

import { multiply} from "./math.js";
console.log(multiply(5, 4));