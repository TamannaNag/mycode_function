const input = require('readline-sync');
let test_case = input.questionInt('enter number of test case: ');
function char() {
    let test = [];
let n = input.questionInt('enter array length: ');
for(let i=0; i<n; i++)
    {
        test[i]= input.question('enter number as a string: ');
    };


    let str = '';
    for (let i = 0; i < test.length; i++) {
           let p = test[i];
            switch (p) {
                case 'N':
                    str += 't'                    
                    break;
                case 'G' :
                    str += 'a' 
                    break;
                case 'K':
                    str += 'n'
                    break;
                case 'P':
                     str += 'u'  
                     break;          
                default:
                    break;
            }
            
        }console.log("i love you :) ",str);
        
        
    }  

 for(let j=0; j<test_case; j++) 
    {
        char();
    }

