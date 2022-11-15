/* // Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10

const num = parseInt(prompt("Enter a positive number:"));
var sum = 0;
var add = 0;
if (num <= 0) {
    console.log(`Incorrect input`);
} 
else {
    while (add < num) {
        add = add + 1;
        sum = sum + add;
    }
    console.log(`The summation of every number from 1 to ${num} is ${sum}`);
} */

/* // Request two numbers and find only their largest common divisor.

const numOne = parseInt(prompt("Enter first number:"));
const numTwo = parseInt(prompt("Enter second number:"));
var n1 = Math.abs(numOne);
var n2 = Math.abs(numTwo);
var gcd = 1;
for (let i = 1; i <= n1 && i <= n2; i++) {
    if (n1 % i == 0 && n2 % i == 0)
        gcd = i;
}
console.log(`The largest common divisor for ${numOne} and ${numTwo} is ${gcd}`); */

/* // Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

const num = parseInt(prompt("Enter a number:"));
const a = Math.abs(num);
for (let i = a; i >= 1; i--) { // added 1 as a divisor too
    if (a % i === 0) {
        console.log(`${i} is a divisor of ${num}`);
    }
} */

/* // Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

const num = parseInt(prompt("Enter a number:"));
const nd = Math.max(Math.floor(Math.log10(Math.abs(num))), 0) + 1;
console.log(`${num} has ${nd} digits`); */

/* // Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user. 

const array = prompt("Enter 10 numbers seperated by spaces:");
var str = array;
str = array.trim();
var arrayLength = array.length;
var count = 0;
var numStr;
var num;
for (let i = 0; i <= (arrayLength - 1); i++) {
    if (str[i] === ' ') {
        numStr = str.slice(count, i);
        num = parseInt(numStr);
        count = i + 1;
        console.log(`${numStr} is:`);
        if (num < 0) {
            console.log(`negative`);
        }
        else if (num === 0) {
            console.log(`zero`);
        }
        else {
            console.log(`positive`);
        }

        if (num % 2 === 0) {
            console.log(`even`);
        }
        else {
            console.log(`odd`);
        }
    }
}
var lastNumStr = str.slice(((-str.indexOf(' ')) + 1), arrayLength);
var lastNum = parseInt(lastNumStr);
console.log(`${lastNumStr} is:`);
if (num < 0) {
    console.log(`negative`);
}
else if (num === 0) {
    console.log(`zero`);
}
else {
    console.log(`positive`);
}

if (num % 2 === 0) {
    console.log(`even`);
}
else {
    console.log(`odd`);
} */

/* // Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses.

var ask = true;
while (ask) {
    const numOne = parseInt(prompt("Enter first number:"));
    const numTwo = parseInt(prompt("Enter second number:"));
    const sign = prompt("Enter sign:");
    var res = 0;
    switch (sign) {
        case '+':
            res = numOne + numTwo;
            break;
        case '-':
            res = numOne - numTwo;
            break;
        case '*':
            res = numOne * numTwo;
            break;
        case '/':
            res = numOne / numTwo;
            break;
        default:
            alert( "I don't know such signs" );
    }
    console.log(`${res}`);
    ask = confirm('Do you want to try again?');
} */

/* // Request a number from a user and ask by how many digits to move it. Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

const num = parseInt(prompt("Enter number:"));
const digits = parseInt(prompt("Enter digits:"));
var numStr = num + '';
const numLength = numStr.length;
var str;
var move;
if (digits < (numLength - 1) && digits >= 0) {
    move = numStr.slice(0, digits);
    str = numStr.slice(digits, numLength);
    numStr = str + move;
}
console.log(`${numStr}`); */

/* // Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

var ask = true;
var day;
var today = new Date().getDay();
while (ask) {
    switch (today) {
        case 0:
          day = "Sunday";
          break;
        case 1:
          day = "Monday";
          break;
        case 2:
           day = "Tuesday";
          break;
        case 3:
          day = "Wednesday";
          break;
        case 4:
          day = "Thursday";
          break;
        case 5:
          day = "Friday";
          break;
        case 6:
          day = "Saturday";
    }
    ask = confirm('Day of the week. Would you like to see the next one?');
    if (today === 6) {
        today = 0;
    }
    else {
        today = today + 1;
    }
}
console.log(`${day}`); */

/* // Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 

var result = '';
var res;
for (let i = 2; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
        res = i * j;
        result += res + ' ';
    }
    result += '\n'
}
console.log(result); */

/* // “Guess the number” game. Suggest a user to think of a number from 0 to 100 and guess it in the following way: every loop iteration needs to divide the range of numbers in half, you represent the result as N and ask the user “Your number > N, < N or == N?” Depending on what the user said, narrow down the range. So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 

const num = parseInt(prompt('Choose a number from 0 to 100: '));
var min = 0;
var max = 100;
var mid;
if (num < 0 || num > 100) {
    alert(`The number you have chosen is out of bounds`);
}
else if (num >= 0 && num <= 100) {
    while (mid != num){
        mid = Math.floor((max + min)/2);
        if(mid === num){
            console.log(mid);   
        }
        else if (num > mid){
            min = mid;
        }
        else {
            max = mid;   
        }
    }
}
else {
    alert(`Incorrect input`);
} */