
let names = ["Clark", "Bruce", "Barry", "Diana", "John"];

// function printStuff(stuff){
//     console.log(stuff);
// }

//const printStuff =stuff =>console.log(stuff);

names.forEach(stuff =>console.log(stuff));

names.push('Snow');
console.log(names);

// store the first and second item into a variable a,b
// let[a,b] = names;
// console.log(a + ' ha scharacter count of ' + a.length);
// console.log(b + ' ha scharacter count of ' + b.length);
// let charCountArray = [];
// for(let each of names){
//     charCountArray.push(each.length);

// }

let charCountArray =names.map( (each) =>each.length );

 console.log(charCountArray);
