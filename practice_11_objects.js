
const p1 ={
    firstName: "Elife",
    lastName: "K",
    gender: "Female",
    age: 18
}

// console.log(p1.firstName);

// let {firstName, lastName, gender } = p1;

// console.log(firstName);
// console.log(lastName);
// console.log(gender);


// function printPerson (thePerson){

//     console.log(thePerson.firstName);
//     console.log(thePerson.lastName);
// }

function printPerson ({firstName, lastName}){

    console.log(firstName);
    console.log(lastName);
}

printPerson( p1);
let p2 = {
    firstName: "Ali",
    lastName: "S",
    age: 18
}

printPerson(p2)