/*Write a function named eligibleforvote which takes age as a parameter and prints if he/she is eligible to vote or not. ( Consider minimum age of voting to be 18. )

Example:

If a user given age as less than 18 prints “not eligible “ or else if a user enters 18 or more than 18 prints “you are eligible”.

Input:

18

16

Output :

“you are eligible”

“not eligible”


Code Example
// please write code here */

const input = require("readline-sync");

function eligibleforvote(he,she) {
    if (she>=18 ) {
        console.log("you are eligible");
        
    }
    else{
        console.log("not eligible");
    }
    if ( he>=18) {
        console.log("you are eligible");
        
    }else{
        console.log("not eligible");
    }
    
}
let he = input.questionInt("enter the he's age :");
let she = input.questionInt("enter the she's age : ");
eligibleforvote(he,she)