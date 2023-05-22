
const p1 ={
    firstName: "Elife",
    lastName: "k",
    gender: "Female"
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