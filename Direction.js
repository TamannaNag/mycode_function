
 function Direction(direct) {
  let str = '';
    switch (direct) {
        case 'N':
            str += "You move North"
            
            break;
        case 'S' :
            str +=  "You move South"
            break;
        case 'E':
            str += "You move East"
            break;
        case 'W':
            str += "you move West"
            break;
        case 'A':
            str += "Invalid direction. Try again."
            break ;
        default :
             str += "not a direction "
            break;
    }
    
    
return str
}
const input=require("readline-sync");
let direct = input.question("enter : ")
console.log(Direction(direct));