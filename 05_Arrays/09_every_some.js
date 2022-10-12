
const numbers = [1, 2, -3, 4, 5];

//  all items > 0???

const isAllPositive = numbers.every((value) => {
    console.log(value)
    return value >= 0;
});
console.log(isAllPositive);
// Stops on first false 





// at least one of items > 0
// stops on first true
const isOnePositive = numbers.some((value) => {
    console.log(value)
    return value >= 0;
});

console.log(isOnePositive);