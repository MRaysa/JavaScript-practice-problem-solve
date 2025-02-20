// Write a JavaScript function removeWords  that takes a string as input and returns the remaining string after removing the first three characters.

//       1) If the input is null, undefined, or the empty string, it returns "Invalid input".
//       2) If the string length is three or less, it returns "String too short to remove".
//       3) Do not use any built-in string methods such as .slice() or .substring().

// Input: "Dev Zero One"
// Output: " Zero One"

// Input: "I love programming"
// Output: "ove programming"

// Input: "Hello World"
// Output: "lo World"

// Input: "JS Rocks!"
// Output: "Rocks!"

// Input: "Yes"
// Output: "String is too short to remove"

// Input: ""
// Output: "Input is Invalid"


function removeWords(input) {
    if (!input) {
      return "Invalid input";
    }

    if (input.length <= 3) {
      return "String too short to remove";
    }

    let result = "";
    for (let i = 3; i < input.length; i++) {
      result += input[i];
    }
  
    return result;
  }

  console.log(removeWords("Dev Zero One"));         
  console.log(removeWords("I love programming"));    
  console.log(removeWords("Hello World"));           
  console.log(removeWords("JS Rocks!"));             
  console.log(removeWords("Yes"));                 
  console.log(removeWords(""));                    
  console.log(removeWords(null));                 
  console.log(removeWords(undefined));             
  