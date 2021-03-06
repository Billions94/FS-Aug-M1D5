/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
function heading(title){
    console.log(`\n//--------------${title}------------------//`)
}
heading("Area of rectangle using l1,l2")

let l1 = 10 
let l2 = 10 
function area(l1, l2) {
    return l1 * l2
}
console.log(area(l1, l2))

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
heading("Function crazySum")

function crazySum(int1, int2) {
        if (int1 === int2) {
            console.log((int1 + int2) * 3)
        }else {
            console.log(int1 + int2)
        }
   }        
crazySum(6,6) // This equals 36, because values are thesame therefore their sum is multiplied by 3

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
heading("Function crazyDiff")

function crazyDiff(givenNumber){
   intGivenNumber = parseInt(givenNumber)
   if (intGivenNumber > 19){
       console.log((intGivenNumber - 19) * 3)
   }
   else {
       console.log(19 - intGivenNumber)
   }
}
(crazyDiff(100))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
heading("Function boundary")

function boundary(n) {
    intN = parseInt(n);
    let ifTrue = intN >= 20 && intN <= 100 || n === 400? true : false;
    console.log(ifTrue)
}
(boundary(600))

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
heading("Function strivify")

function strivify(string){
    if (string === "Strive"){
        console.log("Strive")
    }
    else {
        let inFrontOfStrive = "Strive";
        console.log(inFrontOfStrive.concat("", string))
    }
}
strivify("Strive")
strivify("School")

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
heading("Function check3and7")

function check3and7(positiveNumber) {
     let intPositifNum = parseInt(positiveNumber)

     if (intPositifNum % 3 === 0 || intPositifNum % 7 === 0){
         console.log("Correct! it is multiple of 3 or 7")
     }
     else {
         console.log("Incorrect! Not a multiple of 3 or 7")
     }
}
check3and7(7)

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
heading("Function reverseString")

function reverseString(resString){
     const strReversed = resString.split(/(?:)/u).reverse().join("")
     console.log(strReversed)
}
reverseString("Strive");



/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
heading("Function upperFirst")

function upperFirst(stringUpperCase) {
    let capitalizedstring = stringUpperCase.toLowerCase().split(" ");
  
    for (let i = 0; i < capitalizedstring.length; i++) {
      capitalizedstring[i] =
        capitalizedstring[i].charAt(0).toUpperCase() +
        capitalizedstring[i].substring(1);
    }
    // Directly return the joined string
    return capitalizedstring.join(" ");
  }
  console.log(upperFirst("My name is Alexander Egbedi"))
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
heading("Function cutString")

function cutString(str){
return console.log(str.substring(1, str.length - 1))
}
cutString('James')
cutString('Tucker')
cutString('Jarvis')

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
heading("Function giveMeRandom")

function giveMeRandom(n) {

    let arrWithNumbers = [];

    for (let i = 0; i < n; i++) {
        arrWithNumbers.push(Math.floor(Math.random() * 10));
    }

    return arrWithNumbers;
}

console.log(giveMeRandom(9))
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/