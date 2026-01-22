/*1. Write a Function to Convert Celsius to Fahrenheit
Create a function celsiusToFahrenheit(celsius) that converts a temperature from Celsius to Fahrenheit. Formula: (Celsius * 9/5) + 32 = Fahrenheit
*/

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(40));  


/*2. Create a Function to Find the Maximum of Two Numbers
Write a function findMax(num1, num2) that returns the larger of the two numbers. It should work for negative numbers as well.
*/

function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}


console.log(findMax(10, 10.5));   
console.log(findMax(-3, -7));  

/*3. Function to Check if a String is a Palindrome
Create a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forward and backward). You can not use any string function that we have not learned in the series so far.
*/

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome("racecar"))
console.log(isPalindrome("none")); 
console.log(isPalindrome("noon")); 


/*4. Write a Function to Find Factorial of a Number
Create a function factorial(n) that returns the factorial of n. Example 5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(n) {
    let result = 1;

    while (n > 1) {
        result = result * n;
        n--;
    }

    return result;
}


console.log(factorial(5)); 


/*5. Write a function to Count Vowels in a String
Write a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a given string.
*/

function countVowels(str) {
    let count = 0; 

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]; 

        if (
            ch === 'a' || ch === 'e' || ch === 'i' ||
            ch === 'o' || ch === 'u' ||
            ch === 'A' || ch === 'E' || ch === 'I' ||
            ch === 'O' || ch === 'U'
        ) {
            count++;
        }
    }

    console.log("Word checked:", str);
    console.log("Number of vowels:", count);

    return count;
}
countVowels("Mississippi");


/*6. Write a Function to Capitalize the First Letter of Each Word in a Sentence
Write a function capitalizeWords(sentence) that takes a sentence and capitalizes the first letter of each word. You can use the toUpperCase() method of string to convert the lowercase to uppercase.
*/

function capitalizeWords(sentence) {
    let result = "";
    let capitalizeNext = true;

    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];

        if (ch === " ") {
            result += ch;
            capitalizeNext = true;
        } else {
            if (capitalizeNext) {
                result += ch.toUpperCase();
                capitalizeNext = false;
            } else {
                result += ch;
            }
        }
    }

    console.log("Original:", sentence);
    console.log("Capitalized:", result);
}
capitalizeWords("hello world from javascript");


/*7. Use an IIFE to Print “Hello, JavaScript!”
Write an IIFE that prints "Hello, JavaScript!" to the console. Here the Second word must be supplied using paramneter and argument.
*/

(function (word) {
    console.log("Hello, " + word + "!");
})("JavaScript");


/*8. Create a Simple Callback Function
Write a function greet(name, callback), where callback prints a message using the name parameter.
*/

function greet(name, callback) {
    callback(name);
}

function showMessage(name) {
    console.log("Hello " + name);
}

greet("Dele", showMessage);


/*9. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {
    f1();
}
f2();


Start

Call f2()
| f2 |

f2 calls f1()
| f1 |
| f2 |

f1 ends
| f2 |

f2 ends
(empty)
*/


/*10. Create Call Stack Execution Diagram for this flow
function f1() {}
function f2() {}
function f3() {
    f1();
}
f2();
f3();
f1();

START

Call f2()
| f2 |
(empty)

Call f3()
| f3 |
f3 calls f1()
| f1 |
| f3 |
f1 ends
| f3 |
f3 ends
(empty)

Call f1()
| f1 |
(empty)
*/