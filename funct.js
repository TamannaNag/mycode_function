
const input = require("readline-sync");

function countvowels (str){
    let count = 0;
 
    for(const char of str){
        if(char == "a" ||
         char == "e" || 
         char == "i" || 
         char == "o" || 
         char == "u"||
         char == "A"||
         char == "E"||
         char == "I"||
        char == "O"||
        char == "U")
         {
            count++;
        }

        
    }console.log(count);
    
}
let str = input.question("enter the value : ")
countvowels(str)
