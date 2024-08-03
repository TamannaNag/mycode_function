/*Write a function named checknumberslist which takes two lists of integers and checks the numbers of the same index numbers whether they both are even or not. For checking both even or not you can use the function written in the previous question.

If you give these lists [2, 6, 18, 10, 3, 75] and [6, 19, 24, 12, 3, 87] then the output should come like this.

dono even hain

dono even nahi hai

dono even hain

dono even hain

dono even nahi hain

dono even nahi hain


Code Example
 */

function check(arr,Arr1) {
    let i = 0;
     let j = 0;
    while (i<arr.length && j<Arr1.length) {
        if (arr[i]%2==0 &&Arr1[j]%2==0) {
            console.log("dono even hain");
            
        }
        else{
                console.log("dono even nahi hain ");
        }
        i++;
        j++;
    }
    

}
let arr = [2, 6, 18, 10, 3, 75];
let Arr1 = [6, 19, 24, 12, 3, 87] ;
check(arr,Arr1)

