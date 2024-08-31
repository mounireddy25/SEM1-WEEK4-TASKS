// Simple script to compare two numbers and log the greater number

let num1 = 10;  // First number
let num2 = 20;  // Second number

if (num1 > num2) {
    result=console.log(num1);
} else if (num2 > num1) {
    result=console.log(num2);
} else {
    result=console.log("Both numbers are equal.");
}
document.getElementById('result').innerText=result;
console.log(result);


