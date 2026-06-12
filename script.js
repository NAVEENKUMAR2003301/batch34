// // // javascript



// // // scripting language

// // // ghjsdbhfbejbsfjsbhfbjhjkfhbshgkj
// // // ljhjgkdnfkjnvdjb


// // // // variable


// // // // var
// // // // let 
// // // // const


// // // // rules : - 

// // // // var rules 


// // // // 1. declration

// // // // var a 

// // // // 2. intialiazation

// // // var a = 50


// // // // 3. reuse  & 4 . reintialiazation

// // //     a = 55

// // // // 5. reDeclration

// // // var a = 60

// // // console.log(a)



// // // // let - rules 


// // // // 1. declration 

// // // // let b 

// // // // 2. intialization 

// // // let b = 40



// // // // 3. reuse & 4. reintialization

// // // b = 66

// // // // 5. reDeclration 

// // // // let b  -- reDeclration not accept

// // // console.log(b);


// // // // const - constant


// // // // declration & intialiazation

// // // const c = 10

// // // // reuse 

// // //     //   c = 23 // reuse and reInti also not accept

// // // // reDeclration 

// // // // const c = 50  -- not accept reDeclration

// // // console.log(c);



// // // // example :- 


// // // let y = 56

// // //     y = 54

// // //     console.log(y); // 54


// // // // var d = 4 

// // // // let y = d 

// // // // console.log(y); // syntex error


// // // const e = y

    

// // // console.log(e); // 54


    


// // // printing Statement


// // // 1. console.log()

// // console.log(100);

// // let a = 50

// // console.log(a);




// // // 2. alert()

// // // alert("hello")


// // // 3. confirm()

// // // confirm("did you know before program ?")


// // // 4. prompt()

// // // prompt("what is your name ?")


// // // 5. document.writeln()

// // // document.writeln("hdfhgjshgdjsd")



// // // example 


// // // let userName = prompt("what is your name :")

// // // console.log(userName);


// // // let userWish = confirm("did you know before program")

// // // alert(userWish);





// // // console methods 

// // // 1. console.log()


// // let a1 = 45

// // console.log(a1);


// // console.log(100);

// // // 2. console.warn()


// // console.warn(100);


// // // 3. console.error()

// // console.error(100);


// // // 4. console.clear()

// // console.clear();




// // // DataType 


// // // 1. primitive dataType 

// // // types : - 

// // // 1. string  - "abc"

// // let a2 = "navi"

// // console.log(typeof(a2));


// // // 2. number 

// // let a3 = 123

// // console.log(typeof(a3));


// // // 3. boolean

// // let a4 = false

// // console.log(typeof(a4));


// // // 4. undefined

// // let a5;

// // console.log(a5);


// // // 5. null

// // // let a6 = prompt()

// // // console.log(a6);



// // // 2. non primitive dataType

// // // types :- 


// // // 1. array 

// // // syntex : []

// // let fruit = ["apple","orange","banana","pineapple","peanut"]

// // console.log(fruit);

// // console.log(fruit[0]);
// // console.log(fruit[fruit.length-1]);




// // // 2. object 

// // // syntex : {}

// // let fruitDetials = {
// //     redFruit    : "apple",
// //     yellowFruit : ["banana","pineApple"],
// //     orangeFruit : "orange",
// //     nut         : "peanut"
// // }


// // console.log(fruitDetials);
// // console.log(fruitDetials.redFruit);
// // console.log(fruitDetials.nut);
// // console.log(fruitDetials.yellowFruit[1]);

// // console.clear()

// // // operators :- 

// // // 1. arthmetic operator [methametical operator]


// // // addition               + 

// // console.log(3 + 5);

// // // subraction             -

// // console.log(3 - 5);

// // // multiplication         *

// // console.log(3 * 5);

// // // division               /

// // console.log(3 / 5);


// // // modulus               %


// // console.log(10 % 2);


// // // Exponencial           **

// // console.log(10**2); // 10^2 = 10*10 = 100



// // // increament   -          ++    = +1


// // // 1. pre Increament       -    ++ var

// // // 2. post Increament      -    var ++


// // // decreament               --    = -1

// // // 1. pre Decreament       -    -- var

// // // 2. post Decreament      -    var --




// // // example :- 


// // let b = 2 

// //     --b

// //     console.log(b);


// //     // your searching Element first come in variable side means that time that value side you can caluculate till the variable only 



// // let c = 3      // null

// //     c = ++c

// //     console.log(c);


// //      // your searching Element first come in value side means that time that value side you can caluculate entaire the value .



// // let d = 2 

// // let e = d++  

// // console.log("d :", d);  // 3
// // console.log("e :", e);  // 2


// // let f = 2    // 
// // let g = --f  // --2 = 1
// // let h = g++  // g    = 1

// // console.log("f :",f); // 1
// // console.log("g :",g); // 2
// // console.log("h :",h); // 1


    
    



// // // 2. assignment operator


// // let e2 = 20

// // let addition = 100

// // // e2 = e2 + addition


// // e2 *= addition

// // console.log(e2);


// // // 3. relative operator


// // // meaning       operator        example     result 

// // // lessThen         <             5 < 6      true

// // // greaterThen      >             11 > 3     true

// // // lessThenEq       <=            12 <= 12   true

// // // greaterThenEq    >=            11 >= 12   false 

// // // loosyTypeEq      ==            10 == "10"  true

// // // loosyNotEq       !=             10 != "10"  false

// // // strictlyTypeEq   ===            10 === "10"  false

// // // strictlyNotEq    !==            10 !==  "10"  true


// // // Question 1
// // console.log(8 < 12);    // true

// // // Question 2
// // console.log(15 >= 15);  // true

// // // Question 3
// // console.log(20 == "20"); // true

// // // Question 4
// // console.log(30 === "30"); // false

// // // Question 5
// // console.log(25 !== "25"); // true






// // console.clear();



// // // 4. logical operator 

// // // AND   - &&

// // // true  && true && true = true 

// // // true  && false && true = false 

// // // OR    - ||

// // // true || false || false = true 

// // // false || false || false = false

// // // NOT   - !

// // // !(true) = false 

// // // !(false) = true

// // // Question 1
// // console.log(true && true && false);   // false

// // // Question 2
// // console.log(false || true || false);  // true

// // // Question 3
// // console.log(!(true));  // false

// // // Question 4
// // console.log((10 > 5) && (20 < 30));  // true  && true = true

// // // Question 5
// // console.log((5 > 10) || (15 < 20));  // false ||  true = true

// // // Question 6
// // console.log(!(10 == "10"));    // false

// // // Question 7
// // console.log((10 === "10") || (5 < 8));  // false || true = true

// // // Question 8
// // console.log((20 >= 20) && (30 !== "30")); // true && true = true

// // // Question 9
// // console.log(!(false || false)); // true

// // // Question 10
// // console.log((10 < 5) && (20 > 10)); // false && true = false




// // // 5. ternary operator


// // // condition ? statement : statement 


// // 5!==5  ? console.log("condition true") : console.log("condition false");



// // console.log(5===5 && 6<8 || !(true));

// // // true && true = true || false = true


// // console.clear();


// // // concatination  +

// // let c1 = "iron"
// // let c2 = "man"

// // console.log(c1+ " hello " +c2);


// // // template string 

// // console.log(`${c1} hello ${c2}`);


// // // type casting method 

// // // Implicit tc


// // // string 

// // // string anything is string

// // console.log(typeof("str" + "str"));
// // console.log(typeof("str" + 1));
// // console.log(typeof("str" + true));
// // console.log(typeof("str" + undefined));
// // console.log(typeof("str" + null));

// // console.log(typeof("str" + [1,2]));
// // console.log(typeof("str" + {k:1}));

// // console.log("number implicit tc");

// // // number

// // console.log(typeof(1 + "str"));
// // console.log(typeof(1 + 1));
// // console.log(typeof(1 + true));
// // console.log(typeof(1 + undefined));
// // console.log(typeof(1 + null));

// // console.log(typeof(1 + [1,2]));
// // console.log(typeof(1 + {k:2}));


// // console.log("boolean implicit tc");

// // console.log(typeof(true + "str"));
// // console.log(typeof(true + 1));
// // console.log(typeof(true + true));
// // console.log(typeof(true + undefined));
// // console.log(typeof(true + null));


// // console.log(typeof(true + [1,2]));
// // console.log(typeof(true + {g : 1}));


// // // Explicit typeCasting 

// // console.log("explicit type casting");

// // // constarctor  - Number()

// // console.log(typeof(Number("1") + 1));

// // console.log(Number());
// // console.log(Number(""));
// // console.log(Number("123"));
// // console.log(Number("abc"));
// // console.log(Number(1));
// // console.log(Number(-1));
// // console.log(Number(true));
// // console.log(Number(false));
// // console.log(Number(undefined));
// // console.log(Number(null));
// // console.log(Number([12,23]));
// // console.log(Number({k:1}));


// // //  Boolean()


// // console.log(Boolean());
// // console.log(Boolean(""));
// // console.log(Boolean("123"));
// // console.log(Boolean("abc"));
// // console.log(Boolean("1"));
// // console.log(Boolean("-1"));
// // console.log(Boolean(0));
// // console.log(Boolean(" "));
// // console.log(Boolean(true));
// // console.log(Boolean(false));
// // console.log(Boolean(undefined));
// // console.log(Boolean(null));
// // console.log(Boolean([1,2]));
// // console.log(Boolean({j:2}));



// // console.clear();


// // // flow control statement 

// // // 1. conditional statement 

// // // 1. if statement 


// // // syntex : - 

// // // if(condition){
// // //     statement
// // // }


// // // flow :- 

// // // condition = true inside allow. 

// // // example 


// // if(0){
// //     console.log("hello batch 34!!!");
    
// // }

// // console.log("everyone");


// // // if - else statement 


// // // syntex : - 

// // // if(condition){
// // //     statement 
// // // }else{
// // //     statement 
// // // }


// // // flow : -  condition true = if inside allow , condition false = else inside allow .

// // let voteAge = 18

// // if(voteAge <= 17){
// //     console.log("i can vote");
    
// // }else{
// //     console.log("i can't vote");
    
// // }



// // // if else if 


// // // session finder


// // let time = prompt("enter current time")


// // if( time >= 1 && time <= 6){
// //     alert("early morning");
    
// // }else if(time >= 7 && time <= 12){
// //     alert("good morning");
    
// // }else if(time >= 12 && time <= 15){
// //     alert("good afternoon");
    
// // }else if(time >= 16 && time <= 18){
// //     alert("Good Evening");
    
// // }else if(time >= 19 && time <= 24){
// //     alert("good night");
    
// // }else{
// //     alert("invalid time");
    
// // }



// // // nested if Statement


// // // police entrance selection application 


// // let age    =  prompt("enter your age ")

// // let height =  prompt("enter your height with cm")

// // let weight = prompt("enter your weight with kg")


// // if(age >= 18){
// //     if(height >= 155){
// //         if(weight >= 55){

// //               alert("congradulation your selected");
              
// //         }else{
// //                 alert("your are not selected bcz ur weight not enough");

// //         }
// //     }else{
// //         alert("your are not selected bcz ur height not enough");

// //     }
// // }else{
// //     alert("your are not selected bcz ur age not enough");
    
// // }



// // switch statement


// // syntex 

// // switch(condition){
// //     case "value" : statement ; break;
// //     case "value" : statement ; break;
// //     case "value" : statement ; break;
// //     case "value" : statement ; break;
// //     case "value" : statement ; break;
// // }


// // traffic light rules 


// let trafficLight = "red"

// switch(trafficLight){
//     case "red" : console.log("stop vechile");break
//     case "yellow" : console.log("start vechile");break
//     case "green" : console.log("go vechile");break
//     default : console.log("have a nice day");
    
    
// }












// // // 2. looping statement 



// // for loop 

// // syntex : - 


// // for(intialization ; condition ; iteration ){
// //     statement 
// // }


// for(let a = 1; a <= 5 ; a++){
//     console.log(a); // 1 2 3 4 5
    
// }


// // flow 

// // a = 1 ; 1 <= 5 = true ; 1++ = 2
// // a = 2 ; 2 <= 5 = true ; 2++ = 3
// // a = 3 ; 3 <= 5 = true ; 3++ = 4
// // a = 4 ; 4 <= 5 = true ; 4++ = 5
// // a = 5 ; 5 <= 5 = true ; 5++ = 6
// // a = 6 ; 6 <= 5 = false.


// // while loop 

// // syntex 

// // intialization 

// // while(condition){
// //     statement 

// //     iteration
// // }


// let value = 3

// while(value>=10){
//     console.log("while value :",value);

//     value--
    
// }


// // flow

// // value = 3 , 3 >= 0 = true , (3) , 3-- = 2
// // value = 2 , 2 >= 0 = true , (2) , 2-- = 1
// // value = 1 , 1 >= 0 = true , (1) , 1-- = 0
// // value = 0 , 0 >= 0 = true , (0) , 0-- = -1
// // value = -1, -1>= 0 = false.


// // do while loop 



// // syntex :- 

// // intialization 

// // do{
// //     statement 

// //     iteration
// // }

// // while(condition)




// let value1 = 3

// do{
//     console.log("do while : ",value1);

//     value1--
    
// }

// while(value1 >= 0)





// // for of loop - string, array, function

// // syntex 


// // for(declration type variable){
// //     console.log(declration name);
    
// // }

// let str = "javascript"


// for(let a of str){
//     console.log(a);
    
// }

// let arr = [1,2,3,"hello",6,7]

// for(let b of arr){
//     console.log(b);
    
// }



// // for in loop - object

// let obj1 = {
//     name1 : "rahul",
//     role  : "trainee",
//     salary: 500000
// }


// for(let c in obj1){
//     console.log(c , obj1[c]);
    
// }





// console.clear();





// // function 


// // syntex : - 


// // function one(parameter){
// //     statement
// //     return 
// //     yield 
// // }


// // one("arguments")


// // example :- 


// function name1(){
//     console.log("naveen");

//     if(true){
//         console.log("hello");
        
//     }

//     for(let a = 1 ; a <= 5 ; a++){
//         console.log(a);
        
//     }
    
// }

// // name1()



// // parameter / argument 


// function para(a,b,c,d,e){

//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
    
    
    

// }


// // para("hi",1,2,3,5)




// // form based function 


// function clgForm(name,age,department){
//     console.log(name);
//     console.log(age);
//     console.log(department);
    
// }

// // clgForm("kavin",23,"ECE")
// // clgForm("john",20,"CSE")



// // global scope access

// let dataDetials = {
//     sNO : 1,
//     name1 : "a",
//     ph    : 123,
//     sNO : 2,
//     name2 : "b",
//     ph    : 456
// }


// function accessOutSide(){
//     console.log(dataDetials.name1);
    
// }

// // accessOutSide()




// // return  


// function salary(account){
//     return account
// }

// let month1 = salary(100000)

// // console.log(month1);


// function reuse(a){
//     console.log(month1+a);
    
// }
// // reuse(1)



// // return example 


// function normalSalary(acc){

//     console.log("normal salary :",acc);
    
//     return acc

// }

// // let ordinary = normalSalary(25000)

// function bonus(extra){

//     console.log("this month bonus for you :",extra);
    
//     console.log(ordinary + extra);
    

// }

// // bonus(5000)





// // Types Function : - 


// // 1. named function 

// named("named function")
// function named(parameter){
//     console.log(parameter);
    
// }




// // 2. annonymous function 

// var annonymous = function(parameter){
//     console.log(parameter);
    
// }

// annonymous("Annonymous function")



// // 3. arrow function


// var arrow = (parameter)=>{
    
//     console.log(parameter);
    
    
// }
// arrow("Arrow function")






// // // scope 


// // // var - global scope / function scope
// // // let , const - block scope / local scope


// // function scopeChecker(){
// //     if(true){
// //         var a5 = "global scope"
// //         let b5 = "block scope"
// //         const c5 = "block scope1"
// //         console.log(b5);
// //         console.log(c5);
// //     }
// //     console.log(a5);

    
// // }

// // scopeChecker()


// // // Hoisting

// // console.log(a);

// // var a = 10



// // let b = 20
// // console.log(b);


// // const c = 30 
// // console.log(c);





// // IIFE (self invoke function)


// // // syntex :- 


// (function(products){

//     alert(`now sales on going ${products} 50% off.`)

// })("shoes")




// Higherorder function & callback function 


function function1(){
    console.log("higher order function");
    
}

function function2(){
    console.log("callback function");
    
}



function1(function2())




// example : - 


let add = function(callback,a,b){ // callback = sub , a = 20 , b = 40

    console.log(a + b);           // 20 + 40  = 60
    
    callback(20,20)               // sub(20,20)
    
}

let sub = (num1,num2)=>{  // num1 = 20 , num2 = 20
    console.log(num1 - num2); // 20 - 20 = 0 
    
}





add(sub,20,40)


// 60,0  correct
// 0,60






// Generator function 


function* gen(){
    yield "cash back offer"
    yield "100% cash back offer"
    yield "30% cash back offer"
    yield "50% cash back offer"
}


let allVal = gen()

// console.log(allVal.next().value);
// console.log(allVal.next().value);
// console.log(allVal.next().value);
// console.log(allVal.next().value);

// if(allVal.next().done){
//     console.log("time limit exiteed try again next time");
    
// }



for(let a of allVal){
    console.log(a);
    
}








// currying stracture 


function a(a){  // 10
    return function (b){ // 20
        return function (c){ // 30
            console.log(a+b+c);
            
        }
    }
}
 a(10)(20)(30)


//  uncurrying stracture

function a11(a,b,c){

    console.log(a+b+c);
    

}

a11(10,20,30)

console.clear();




// DataStarcture

// spread operator

// array spread operator - [...]

// example 


let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let totalArr = [...arr1,...arr2,9,10]

console.log(totalArr);
console.log(totalArr);


// object spread operator - {...}


let obj1 = {
    name1 : "surya",
    role  : "javadeveloper",
    salary: 500000
}
let obj2 = {
    name11 : "ravi",
    role1  : "SAPdeveloper",
    salary1: 600000
}


let totalObj = {...obj1,...obj2}

console.log(totalObj);




// rest operator

// function - (...)

// example 


function memoryManagement(a,b,...c){
    console.log(a + b + c[0]);
    console.log(c);
    
    
    
}

memoryManagement(1,2,3,4,5,6,7,8,9)




// deStracture

// array


let random = [1,2,3,4]

let a1 = random[0]
let a2 = random[1]
let a3 = random[2]
let a4 = random[3]

console.log(a1, a2 , a3 ,a4);

// destracture 


let [b1,b2,b3,b4] = random

console.log(b1 , b2 , b3 , b4);


// nested value 

let nested = [1,2,[3,4,[5,6,[7]]]]

let c1 = nested[0]
let c2 = nested[1]
let c3 = nested[2][0]
let c4 = nested[2][1]
let c5 = nested[2][2][0]
let c6 = nested[2][2][1]
let c7 = nested[2][2][2][0]

console.log(c1,c2,c3,c4,c5,c6,c7);


// destracture 

let [d1,d2,[d3,d4,[d5,d6,[d7]]]] = nested

console.log(d1,d2,d3,d4,d5,d6,d7);



// object destracture 


let objVal = {
    fruit : "apple",
    nutrician : "b12",
    benefits  : "increase blood"
}


let e1 = objVal.fruit
let e2 = objVal.nutrician
let e3 = objVal.benefits

console.log(e1,e2,e3);


// destracture 


let {fruit,nutrician,benefits} = objVal

console.log(fruit,nutrician,benefits);














console.clear();



// Array Advance Concept 

let array = [1,2,3,4,5,6,"string",true,undefined,null,[1,2,3],{j:9}]

console.log(array);

console.log(array[0]);
console.log(array[3]);


console.log(array[array.length-1]);

// homogenous 

// hetrogenous

// flexible


// Array manipulation method 

// if you use add method u can add multiple value.
// if you use remove method u can remove only one value.


let random1 = [1,2,3]

// push() - we can array of last value add

random1.push(4,5,6,7,8)
// pop()  - we can array of last value remove
random1.pop()
// shift()- we can array of first value remove
random1.shift()
// unshift() - we can array of first value add
random1.unshift(0,1)
console.log(random1);
// splice() - we can array whatever place add or remove

let random2 = [1,2,3,50,60,7,8]

// splice()// startingIndex , removeCount , add value

random2.splice(3,2,4,5,6)

console.log(random2);



// Array merge method

// concat()

let ar1 = [1,2,3,4,5]
let ar2 = [6,7,8,9,10]

let TotalAr = ar1.concat(ar2,11,12)

console.log(TotalAr);


// slice()

let random4 = [1,2,3,50,60,7,8]

let particular = random4.slice(3,5) // si , ei + 1

console.log(particular);


// flat()

let nested1 = [1,2,3,[4,5,[6,7,[8]]]]

let flatVal = nested1.flat(Infinity)

console.log(flatVal);


// fill()

let random5 = [1,2,3,4] // 1,2,3,"four"

random5.fill("four",3,4) // value , si , ei+1

console.log(random5);


// includes()

let random6 = [1,6,3,9,56,34]

let inVal = random6.includes(6)

console.log(inVal);


// indexOf()

let random7 = [1,2,3,4,3,2,1]

let indexOfVal = random7.indexOf(2,3)

console.log(indexOfVal);


// lastIndexOf()

let lastVal = random7.lastIndexOf(2,4)

console.log(lastVal);


// sort()

let random8 = [1,2,3000,4897,9,0,73000,8] // 7.3000 < 9 

let sortVal1 = random8.sort()

console.log(sortVal1);


// reverse()


let random9 = [2,5,7,8,6,2]

console.log(random9.reverse());
















// // // 4. date

