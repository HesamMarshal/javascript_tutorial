const numbers = [1, 2, 3, 4, 5, 6, 7];


// Reomve from end
console.log(numbers);
let num = numbers.pop();
console.log(numbers);

// Remove from Start 

let start = numbers.shift();
console.log(numbers);

// Remove from middle

let middle = numbers.splice(2, 1);
console.log(numbers);
// Check for array
console.log(middle);

// Mutation : Change the original item



