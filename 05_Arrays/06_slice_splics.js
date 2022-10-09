const numbers = [1, 2, 3, 4, 5, 6];

// Slice : no mutatation, 
// splice: mutatation, inplace
// End is Exclusive, not inclusive
const slice1 = numbers.slice(2, 4)
console.log("Numbers: ", numbers);
console.log("Slice1 : ", slice1);

const splice1 = numbers.splice(2, 2);
console.log("Numbers: ", numbers);
console.log("Splice1 : ", splice1);