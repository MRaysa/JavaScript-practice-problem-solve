// Write a JavaScript function filterIntegers  that takes an array that contains string and integer elements, and returns a new array with only integer elements.

// Example 1:
// Input: [ 3, 6, “hello”, 4, “3”,  8]
// Output: [ 3, 6,  4,  8]

// Constraints:
// Array length cannot be zero or negative.
function filterIntegers(arr) {
    const result = []; 
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof element === 'number' && Number.isInteger(element)) {
            result.push(element); 
        }
    }
    return result;
}


const input = [3, 6, "hello", 4, "3", 8];
const output = filterIntegers(input);
console.log(output); 