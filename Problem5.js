// Write a JS function reverseArray that takes an array and returns a reverse array.

// Example 1:
// Input: [ 3, 6, 5, 4, 8]
// Output: [ 8, 4, 5, 6, 3 ]

// Constraints:
// The function cannot change the main array.
// Cannot use array methods for reverse.

function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}


const inputArray = [3, 6, 5, 4, 8];
const reversedArray = reverseArray(inputArray);
console.log(inputArray); 
console.log(reversedArray); 
   