// Initialize the array
let numbers = [29, 77, 30, 3, -5, 88, 41, 2];
console.log("Initial array: " + numbers);

// Function to add a number to the array
function addNumber(number) {
    numbers.push(number);
    console.log("After adding " + number + ": " + numbers);
}

// Function to remove a number from the array by index
function removeNumber(index) {
    if (index >= 0 && index < numbers.length) {
        numbers.splice(index, 1);
        console.log("After removing index " + index + ": " + numbers);
    } else {
        console.log("Index out of range");
    }
}

// Function to sort the numbers in ascending order
function sortNumbers() {
    numbers.sort((a, b) => a - b);
    console.log("Sorted array: " + numbers);
}

// Function to calculate the sum of the numbers in the array
function calculateSum() {
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    console.log("Sum of numbers: " + sum);
    return sum;
}

// Function to calculate the average of the numbers in the array
function calculateAverage() {
    let sum = calculateSum();
    let average = sum / numbers.length;
    console.log("Average of numbers: " + average);
    return average;
}

// Main program to demonstrate each function
addNumber(4);
removeNumber(2);
sortNumbers();
calculateSum();
calculateAverage();
