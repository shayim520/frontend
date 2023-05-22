let prices = [17, 87, 54, 85, 10]; 
let pp =[];
let lowPrices = prices.filter( each=> each < 70 );

console.log(lowPrices);




const spartans = [
    {
      "id": 3,
      "name": "Test1",
      "gender": "Male",
      "phone": 7684567890
    },
    {
      "id": 4,
      "name": "Paige",
      "gender": "Female",
      "phone": 3786741487
    },
    {
      "id": 6,
      "name": "Tedmund",
      "gender": "Male",
      "phone": 2227140732
    },
    {
      "id": 7,
      "name": "Hershel",
      "gender": "Male",
      "phone": 5278678322
    }
]

spartans.filter(each=> each.gender=="Male")
        .map(each=>each.name)
        .forEach(each=> console.log(each));
