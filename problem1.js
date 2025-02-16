/**
 * Write a JavaScript Function   printNumber  that takes an integer N and prints all the numbers between 0 to N.

Example:
Input: 5
Output: 0 1 2 3 4 5

Constraints: 0 < N 

 */

function printNumber(N) {
    if (N <= 0 || !Number.isInteger(N)) {
        console.log("Please provide a positive integer greater than 0.");
        return;
    }
    let result = ""; 
    for (let i = 0; i <= N; i++) {
        result += i + " "; 
    }
    console.log(result.trim()); 
}

printNumber(5);