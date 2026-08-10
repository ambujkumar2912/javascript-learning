let students = document.querySelector("#students");

students.addEventListener("click", function(event) {
    console.log("Clicked:", event.target.innerText);
});