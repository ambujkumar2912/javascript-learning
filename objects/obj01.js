let students = {

    name: "Ambuj kumar",
    class: "2nd year",
    branch: "cse",
    extra : "no back"




};
console.log(students);


let student = {
    name: "Ambuj",
    address: {
        city: "Motihari",
        state: "Bihar"
    }
};

console.log(student.address.city);

let persons = {
    name: "Ambuj",

    greet: function() {
        console.log("Hello " + this.name);
    }
};

persons.greet();


let person = {
    name: "Ambuj",
    age: 21,
    city: "Motihari"
};

console.log(Object.keys(person));
console.log(Object.values(person));
