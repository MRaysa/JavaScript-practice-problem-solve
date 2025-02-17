/**
 * Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 

Example:
Input: "DEV ZeroOne is a Next-Gen Programming Learning Platform."
Output: 8

Constraints:
using built-in functions is prohibited
 */


function countWords(str) {
    let count = 0;
    let words = false; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (!words) {
                count++;
                words = true; 
            }
        } 
        else {
            words = false;
        }
    }

    return count;
}


const input = "DEV ZeroOne is a Next-Gen Programming Learning Platform.";
console.log(countWords(input)); 