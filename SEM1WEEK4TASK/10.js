// Script to demonstrate the use of logical operators

let isAdult = true;  // Example boolean value
let hasDrivingLicense = false;  // Example boolean value

// Use of logical AND (&&) operator
if (isAdult && hasDrivingLicense) {
    console.log("You are allowed to drive.");
} else {
    console.log("You are not allowed to drive.");
}

// Use of logical OR (||) operator
let hasPermit = true;  // Example boolean value

if (hasDrivingLicense || hasPermit) {
    console.log("You have permission to drive.");
} else {
    console.log("You do not have permission to drive.");
}

// Use of logical NOT (!) operator
let isStudent = false;  // Example boolean value

if (!isStudent) {
    console.log("You are not a student.");
} else {
    console.log("You are a student.");
}