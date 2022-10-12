const numbers = [10, 20, 30, 40, 50, 60];

// for
console.log("For :");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// for of
console.log("\nFor of :");
for (let item of numbers) {
    console.log(item);
}

// forEach
console.log("\nForEach :");
numbers.forEach((num) => {
    console.log(num)
});


// forEach
console.log("\nForEach 2 :");
numbers.forEach(num => console.log(num));