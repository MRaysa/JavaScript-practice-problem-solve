// Write a JavaScript function multiplicationTable that takes a number as input and prints its multiplication table up to 10.

// Requirements:
// The function should accept a number as input.

// Example: Input:  5:
// Output: 
// 5 x 1 = 5  
// 5 x 2 = 10  
// 5 x 3 = 15  
// 5 x 4 = 20  
// 5 x 5 = 25  
// 5 x 6 = 30  
// 5 x 7 = 35  
// 5 x 8 = 40  
// 5 x 9 = 45  
// 5 x 10 = 50 

function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++) {
        const product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}


multiplicationTable(5);