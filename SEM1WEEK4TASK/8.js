// Simple Calculator Script

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    if (y === 0) {
        return "Error! Division by zero.";
    }
    return x / y;
}

function calculator() {
    const operation = prompt("Select operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");

    if (['1', '2', '3', '4'].includes(operation)) {
        const num1 = parseFloat(prompt("Enter first number:"));
        const num2 = parseFloat(prompt("Enter second number:"));

        let result;
        switch (operation) {
            case '1':
                result = add(num1, num2);
                alert(`${num1} + ${num2} = ${result}`);
                break;
            case '2':
                result = subtract(num1, num2);
                alert(`${num1} - ${num2} = ${result}`);
                break;
            case '3':
                result = multiply(num1, num2);
                alert(`${num1} * ${num2} = ${result}`);
                break;
            case '4':
                result = divide(num1, num2);
                alert(`${num1} / ${num2} = ${result}`);
                break;
        }
    } else {
        alert("Invalid operation selected!");
    }
}

// Call the calculator function
calculator();