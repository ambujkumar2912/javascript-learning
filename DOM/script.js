// Write your DOM practice code here
// Example:
// document.getElementById("main-heading").textContent = "Amazing Spider Man";


// let h11 = document.querySelector("#title");

// h11.innerText = "Ambuj kumar";

let p11 = document.querySelectorAll(".message");

p11.forEach(function(msg) {
  msg.innerText = "I AM THE BEST";
});


//p11.innerText = " I AM THE BEST";

let bttn = document.querySelector("button");
bttn.innerText = "chick to krle";


let b = document.querySelectorAll(".text")

b.forEach(function(y) {
    y.innerText = " i am god";
});

let box = document.querySelector("#box");

//console.log(box.innerText);
//console.log(box.textContent);
 console.log(box.innerHTML);


let linkji = document.querySelector("#link");

linkji.getAttribute("href"  );

linkji.setAttribute("href", "https://youtube.com");


let title = document.querySelector("#title");





title.classList.add("active");

title.classList.add("ambuja");

title.classList.remove("active");

console.log(title.classList.contains("active"));
title.classList.toggle("active");
console.log(title.classList);

let me = document.querySelector("#box");

//console.log(me.parentElement);

//me.parentElement.style.color = "red";

//console.log(me.children);
console.log(me.firstElementChild);
console.log(me.lastElementChild);

