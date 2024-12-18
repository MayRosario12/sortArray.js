let numbersInput = prompt("24,65,21,5,9,32,42,80,57");
let namesInput = prompt("Zenvo,Erica,Jordie,Alicia,Redon");

// Convert the input strings into arrays
let numbers = numbersInput.split(',').map(Number);
let names = namesInput.split(',');

// Merge both arrays into a single array
let mergedArray = numbers.concat(names);
console.log("Merged Array: ", mergedArray);

// Sort numbers in reverse numerical order
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (in reverse order): ", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.sort();
console.log("Sorted Names (alphabetically): ", sortedNames);