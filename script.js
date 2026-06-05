// javascript



// scripting language

// ghjsdbhfbejbsfjsbhfbjhjkfhbshgkj
// ljhjgkdnfkjnvdjb


// // variable


// // var
// // let 
// // const


// // rules : - 

// // var rules 


// // 1. declration

// // var a 

// // 2. intialiazation

// var a = 50


// // 3. reuse  & 4 . reintialiazation

//     a = 55

// // 5. reDeclration

// var a = 60

// console.log(a)



// // let - rules 


// // 1. declration 

// // let b 

// // 2. intialization 

// let b = 40



// // 3. reuse & 4. reintialization

// b = 66

// // 5. reDeclration 

// // let b  -- reDeclration not accept

// console.log(b);


// // const - constant


// // declration & intialiazation

// const c = 10

// // reuse 

//     //   c = 23 // reuse and reInti also not accept

// // reDeclration 

// // const c = 50  -- not accept reDeclration

// console.log(c);



// // example :- 


// let y = 56

//     y = 54

//     console.log(y); // 54


// // var d = 4 

// // let y = d 

// // console.log(y); // syntex error


// const e = y

    

// console.log(e); // 54


    


// printing Statement


// 1. console.log()

console.log(100);

let a = 50

console.log(a);




// 2. alert()

// alert("hello")


// 3. confirm()

// confirm("did you know before program ?")


// 4. prompt()

// prompt("what is your name ?")


// 5. document.writeln()

// document.writeln("hdfhgjshgdjsd")



// example 


// let userName = prompt("what is your name :")

// console.log(userName);


// let userWish = confirm("did you know before program")

// alert(userWish);





// console methods 

// 1. console.log()


let a1 = 45

console.log(a1);


console.log(100);

// 2. console.warn()


console.warn(100);


// 3. console.error()

console.error(100);


// 4. console.clear()

console.clear();




// DataType 


// 1. primitive dataType 

// types : - 

// 1. string  - "abc"

let a2 = "navi"

console.log(typeof(a2));


// 2. number 

let a3 = 123

console.log(typeof(a3));


// 3. boolean

let a4 = false

console.log(typeof(a4));


// 4. undefined

let a5;

console.log(a5);


// 5. null

// let a6 = prompt()

// console.log(a6);



// 2. non primitive dataType

// types :- 


// 1. array 

// syntex : []

let fruit = ["apple","orange","banana","pineapple","peanut"]

console.log(fruit);

console.log(fruit[0]);
console.log(fruit[fruit.length-1]);




// 2. object 

// syntex : {}

let fruitDetials = {
    redFruit    : "apple",
    yellowFruit : ["banana","pineApple"],
    orangeFruit : "orange",
    nut         : "peanut"
}


console.log(fruitDetials);
console.log(fruitDetials.redFruit);
console.log(fruitDetials.nut);
console.log(fruitDetials.yellowFruit[1]);

console.clear()

// operators :- 

// 1. arthmetic operator [methametical operator]


// addition               + 

console.log(3 + 5);

// subraction             -

console.log(3 - 5);

// multiplication         *

console.log(3 * 5);

// division               /

console.log(3 / 5);


// modulus               %


console.log(10 % 2);


// Exponencial           **

console.log(10**2); // 10^2 = 10*10 = 100



// increament   -          ++    = +1


// 1. pre Increament       -    ++ var

// 2. post Increament      -    var ++


// decreament               --    = -1

// 1. pre Decreament       -    -- var

// 2. post Decreament      -    var --




// example :- 


let b = 2 

    --b

    console.log(b);


    // your searching Element first come in variable side means that time that value side you can caluculate till the variable only 



let c = 3      // null

    c = ++c

    console.log(c);


     // your searching Element first come in value side means that time that value side you can caluculate entaire the value .



let d = 2 

let e = d++  

console.log("d :", d);  // 3
console.log("e :", e);  // 2


let f = 2    // 
let g = --f  // --2 = 1
let h = g++  // g    = 1

console.log("f :",f); // 1
console.log("g :",g); // 2
console.log("h :",h); // 1


    
    



// 2. assignment operator


let e2 = 20

let addition = 100

// e2 = e2 + addition


e2 *= addition

console.log(e2);


// 3. relative operator


// meaning       operator        example     result 

// lessThen         <             5 < 6      true

// greaterThen      >             11 > 3     true

// lessThenEq       <=            12 <= 12   true

// greaterThenEq    >=            11 >= 12   false 

// loosyTypeEq      ==            10 == "10"  true

// loosyNotEq       !=             10 != "10"  false

// strictlyTypeEq   ===            10 === "10"  false

// strictlyNotEq    !==            10 !==  "10"  true


// Question 1
console.log(8 < 12);    // true

// Question 2
console.log(15 >= 15);  // true

// Question 3
console.log(20 == "20"); // true

// Question 4
console.log(30 === "30"); // false

// Question 5
console.log(25 !== "25"); // true






console.clear();



// 4. logical operator 

// AND   - &&

// true  && true && true = true 

// true  && false && true = false 

// OR    - ||

// true || false || false = true 

// false || false || false = false

// NOT   - !

// !(true) = false 

// !(false) = true

// Question 1
console.log(true && true && false);   // false

// Question 2
console.log(false || true || false);  // true

// Question 3
console.log(!(true));  // false

// Question 4
console.log((10 > 5) && (20 < 30));  // true  && true = true

// Question 5
console.log((5 > 10) || (15 < 20));  // false ||  true = true

// Question 6
console.log(!(10 == "10"));    // false

// Question 7
console.log((10 === "10") || (5 < 8));  // false || true = true

// Question 8
console.log((20 >= 20) && (30 !== "30")); // true && true = true

// Question 9
console.log(!(false || false)); // true

// Question 10
console.log((10 < 5) && (20 > 10)); // false && true = false




// 5. ternary operator


// condition ? statement : statement 


5!==5  ? console.log("condition true") : console.log("condition false");



console.log(5===5 && 6<8 || !(true));

// true && true = true || false = true




















// 3. function 

// 4. date

