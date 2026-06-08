// // javascript



// // scripting language

// // ghjsdbhfbejbsfjsbhfbjhjkfhbshgkj
// // ljhjgkdnfkjnvdjb


// // // variable


// // // var
// // // let 
// // // const


// // // rules : - 

// // // var rules 


// // // 1. declration

// // // var a 

// // // 2. intialiazation

// // var a = 50


// // // 3. reuse  & 4 . reintialiazation

// //     a = 55

// // // 5. reDeclration

// // var a = 60

// // console.log(a)



// // // let - rules 


// // // 1. declration 

// // // let b 

// // // 2. intialization 

// // let b = 40



// // // 3. reuse & 4. reintialization

// // b = 66

// // // 5. reDeclration 

// // // let b  -- reDeclration not accept

// // console.log(b);


// // // const - constant


// // // declration & intialiazation

// // const c = 10

// // // reuse 

// //     //   c = 23 // reuse and reInti also not accept

// // // reDeclration 

// // // const c = 50  -- not accept reDeclration

// // console.log(c);



// // // example :- 


// // let y = 56

// //     y = 54

// //     console.log(y); // 54


// // // var d = 4 

// // // let y = d 

// // // console.log(y); // syntex error


// // const e = y

    

// // console.log(e); // 54


    


// // printing Statement


// // 1. console.log()

// console.log(100);

// let a = 50

// console.log(a);




// // 2. alert()

// // alert("hello")


// // 3. confirm()

// // confirm("did you know before program ?")


// // 4. prompt()

// // prompt("what is your name ?")


// // 5. document.writeln()

// // document.writeln("hdfhgjshgdjsd")



// // example 


// // let userName = prompt("what is your name :")

// // console.log(userName);


// // let userWish = confirm("did you know before program")

// // alert(userWish);





// // console methods 

// // 1. console.log()


// let a1 = 45

// console.log(a1);


// console.log(100);

// // 2. console.warn()


// console.warn(100);


// // 3. console.error()

// console.error(100);


// // 4. console.clear()

// console.clear();




// // DataType 


// // 1. primitive dataType 

// // types : - 

// // 1. string  - "abc"

// let a2 = "navi"

// console.log(typeof(a2));


// // 2. number 

// let a3 = 123

// console.log(typeof(a3));


// // 3. boolean

// let a4 = false

// console.log(typeof(a4));


// // 4. undefined

// let a5;

// console.log(a5);


// // 5. null

// // let a6 = prompt()

// // console.log(a6);



// // 2. non primitive dataType

// // types :- 


// // 1. array 

// // syntex : []

// let fruit = ["apple","orange","banana","pineapple","peanut"]

// console.log(fruit);

// console.log(fruit[0]);
// console.log(fruit[fruit.length-1]);




// // 2. object 

// // syntex : {}

// let fruitDetials = {
//     redFruit    : "apple",
//     yellowFruit : ["banana","pineApple"],
//     orangeFruit : "orange",
//     nut         : "peanut"
// }


// console.log(fruitDetials);
// console.log(fruitDetials.redFruit);
// console.log(fruitDetials.nut);
// console.log(fruitDetials.yellowFruit[1]);

// console.clear()

// // operators :- 

// // 1. arthmetic operator [methametical operator]


// // addition               + 

// console.log(3 + 5);

// // subraction             -

// console.log(3 - 5);

// // multiplication         *

// console.log(3 * 5);

// // division               /

// console.log(3 / 5);


// // modulus               %


// console.log(10 % 2);


// // Exponencial           **

// console.log(10**2); // 10^2 = 10*10 = 100



// // increament   -          ++    = +1


// // 1. pre Increament       -    ++ var

// // 2. post Increament      -    var ++


// // decreament               --    = -1

// // 1. pre Decreament       -    -- var

// // 2. post Decreament      -    var --




// // example :- 


// let b = 2 

//     --b

//     console.log(b);


//     // your searching Element first come in variable side means that time that value side you can caluculate till the variable only 



// let c = 3      // null

//     c = ++c

//     console.log(c);


//      // your searching Element first come in value side means that time that value side you can caluculate entaire the value .



// let d = 2 

// let e = d++  

// console.log("d :", d);  // 3
// console.log("e :", e);  // 2


// let f = 2    // 
// let g = --f  // --2 = 1
// let h = g++  // g    = 1

// console.log("f :",f); // 1
// console.log("g :",g); // 2
// console.log("h :",h); // 1


    
    



// // 2. assignment operator


// let e2 = 20

// let addition = 100

// // e2 = e2 + addition


// e2 *= addition

// console.log(e2);


// // 3. relative operator


// // meaning       operator        example     result 

// // lessThen         <             5 < 6      true

// // greaterThen      >             11 > 3     true

// // lessThenEq       <=            12 <= 12   true

// // greaterThenEq    >=            11 >= 12   false 

// // loosyTypeEq      ==            10 == "10"  true

// // loosyNotEq       !=             10 != "10"  false

// // strictlyTypeEq   ===            10 === "10"  false

// // strictlyNotEq    !==            10 !==  "10"  true


// // Question 1
// console.log(8 < 12);    // true

// // Question 2
// console.log(15 >= 15);  // true

// // Question 3
// console.log(20 == "20"); // true

// // Question 4
// console.log(30 === "30"); // false

// // Question 5
// console.log(25 !== "25"); // true






// console.clear();



// // 4. logical operator 

// // AND   - &&

// // true  && true && true = true 

// // true  && false && true = false 

// // OR    - ||

// // true || false || false = true 

// // false || false || false = false

// // NOT   - !

// // !(true) = false 

// // !(false) = true

// // Question 1
// console.log(true && true && false);   // false

// // Question 2
// console.log(false || true || false);  // true

// // Question 3
// console.log(!(true));  // false

// // Question 4
// console.log((10 > 5) && (20 < 30));  // true  && true = true

// // Question 5
// console.log((5 > 10) || (15 < 20));  // false ||  true = true

// // Question 6
// console.log(!(10 == "10"));    // false

// // Question 7
// console.log((10 === "10") || (5 < 8));  // false || true = true

// // Question 8
// console.log((20 >= 20) && (30 !== "30")); // true && true = true

// // Question 9
// console.log(!(false || false)); // true

// // Question 10
// console.log((10 < 5) && (20 > 10)); // false && true = false




// // 5. ternary operator


// // condition ? statement : statement 


// 5!==5  ? console.log("condition true") : console.log("condition false");



// console.log(5===5 && 6<8 || !(true));

// // true && true = true || false = true


// console.clear();


// // concatination  +

// let c1 = "iron"
// let c2 = "man"

// console.log(c1+ " hello " +c2);


// // template string 

// console.log(`${c1} hello ${c2}`);


// // type casting method 

// // Implicit tc


// // string 

// // string anything is string

// console.log(typeof("str" + "str"));
// console.log(typeof("str" + 1));
// console.log(typeof("str" + true));
// console.log(typeof("str" + undefined));
// console.log(typeof("str" + null));

// console.log(typeof("str" + [1,2]));
// console.log(typeof("str" + {k:1}));

// console.log("number implicit tc");

// // number

// console.log(typeof(1 + "str"));
// console.log(typeof(1 + 1));
// console.log(typeof(1 + true));
// console.log(typeof(1 + undefined));
// console.log(typeof(1 + null));

// console.log(typeof(1 + [1,2]));
// console.log(typeof(1 + {k:2}));


// console.log("boolean implicit tc");

// console.log(typeof(true + "str"));
// console.log(typeof(true + 1));
// console.log(typeof(true + true));
// console.log(typeof(true + undefined));
// console.log(typeof(true + null));


// console.log(typeof(true + [1,2]));
// console.log(typeof(true + {g : 1}));


// // Explicit typeCasting 

// console.log("explicit type casting");

// // constarctor  - Number()

// console.log(typeof(Number("1") + 1));

// console.log(Number());
// console.log(Number(""));
// console.log(Number("123"));
// console.log(Number("abc"));
// console.log(Number(1));
// console.log(Number(-1));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number([12,23]));
// console.log(Number({k:1}));


// //  Boolean()


// console.log(Boolean());
// console.log(Boolean(""));
// console.log(Boolean("123"));
// console.log(Boolean("abc"));
// console.log(Boolean("1"));
// console.log(Boolean("-1"));
// console.log(Boolean(0));
// console.log(Boolean(" "));
// console.log(Boolean(true));
// console.log(Boolean(false));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([1,2]));
// console.log(Boolean({j:2}));



// console.clear();


// // flow control statement 

// // 1. conditional statement 

// // 1. if statement 


// // syntex : - 

// // if(condition){
// //     statement
// // }


// // flow :- 

// // condition = true inside allow. 

// // example 


// if(0){
//     console.log("hello batch 34!!!");
    
// }

// console.log("everyone");


// // if - else statement 


// // syntex : - 

// // if(condition){
// //     statement 
// // }else{
// //     statement 
// // }


// // flow : -  condition true = if inside allow , condition false = else inside allow .

// let voteAge = 18

// if(voteAge <= 17){
//     console.log("i can vote");
    
// }else{
//     console.log("i can't vote");
    
// }



// // if else if 


// // session finder


// let time = prompt("enter current time")


// if( time >= 1 && time <= 6){
//     alert("early morning");
    
// }else if(time >= 7 && time <= 12){
//     alert("good morning");
    
// }else if(time >= 12 && time <= 15){
//     alert("good afternoon");
    
// }else if(time >= 16 && time <= 18){
//     alert("Good Evening");
    
// }else if(time >= 19 && time <= 24){
//     alert("good night");
    
// }else{
//     alert("invalid time");
    
// }



// // nested if Statement


// // police entrance selection application 


// let age    =  prompt("enter your age ")

// let height =  prompt("enter your height with cm")

// let weight = prompt("enter your weight with kg")


// if(age >= 18){
//     if(height >= 155){
//         if(weight >= 55){

//               alert("congradulation your selected");
              
//         }else{
//                 alert("your are not selected bcz ur weight not enough");

//         }
//     }else{
//         alert("your are not selected bcz ur height not enough");

//     }
// }else{
//     alert("your are not selected bcz ur age not enough");
    
// }



// switch statement


// syntex 

// switch(condition){
//     case "value" : statement ; break;
//     case "value" : statement ; break;
//     case "value" : statement ; break;
//     case "value" : statement ; break;
//     case "value" : statement ; break;
// }


// traffic light rules 


let trafficLight = "red"

switch(trafficLight){
    case "red" : console.log("stop vechile");break
    case "yellow" : console.log("start vechile");break
    case "green" : console.log("go vechile");break
    default : console.log("have a nice day");
    
    
}












// // 2. looping statement 



// for loop 

// syntex : - 


// for(intialization ; condition ; iteration ){
//     statement 
// }


for(let a = 1; a <= 5 ; a++){
    console.log(a); // 1 2 3 4 5
    
}


// flow 

// a = 1 ; 1 <= 5 = true ; 1++ = 2
// a = 2 ; 2 <= 5 = true ; 2++ = 3
// a = 3 ; 3 <= 5 = true ; 3++ = 4
// a = 4 ; 4 <= 5 = true ; 4++ = 5
// a = 5 ; 5 <= 5 = true ; 5++ = 6
// a = 6 ; 6 <= 5 = false.


// while loop 

// syntex 

// intialization 

// while(condition){
//     statement 

//     iteration
// }


let value = 3

while(value>=10){
    console.log("while value :",value);

    value--
    
}


// flow

// value = 3 , 3 >= 0 = true , (3) , 3-- = 2
// value = 2 , 2 >= 0 = true , (2) , 2-- = 1
// value = 1 , 1 >= 0 = true , (1) , 1-- = 0
// value = 0 , 0 >= 0 = true , (0) , 0-- = -1
// value = -1, -1>= 0 = false.


// do while loop 



// syntex :- 

// intialization 

// do{
//     statement 

//     iteration
// }

// while(condition)




let value1 = 3

do{
    console.log("do while : ",value1);

    value1--
    
}

while(value1 >= 0)





// for of loop - string, array, function

// syntex 


// for(declration type variable){
//     console.log(declration name);
    
// }

let str = "javascript"


for(let a of str){
    console.log(a);
    
}

let arr = [1,2,3,"hello",6,7]

for(let b of arr){
    console.log(b);
    
}



// for in loop - object

let obj1 = {
    name1 : "rahul",
    role  : "trainee",
    salary: 500000
}


for(let c in obj1){
    console.log(c , obj1[c]);
    
}





































// // Explicit tc






















// // 3. function 

// // 4. date

