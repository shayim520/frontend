let num = 100;

// Arithmetic operator + - * / %
    // ++ --
    console.log(num + 5 );
    console.log(num - 5 );
    console.log(num * 5 );
    console.log(num / 5 );
    console.log(num % 5 );


    console.log("--------------------------");
    // Assignment Operators
    //  =  +=  -=  *=  /=  %=
    console.log(num += 100);
    console.log(num -= 50);
    console.log(num *= 2);
    console.log(num /= 2);

    console.log("--------------------------");
    // Relational(Comparison) Operators
    //  ==   ===  !=  !==  >   >=   <  <=
    let price = 99;
    let strPrice = '99';

    console.log(price == strPrice); // this one give us True / just check for content equality
    console.log(price === strPrice); // this one give us False / check for content and type equality
    console.log(price !=99); // false

    console.log("--------------------------");

// Logical Operators  && ||   & , |
// check is the price value between 50 - 100
console.log(price<100 && price>50);