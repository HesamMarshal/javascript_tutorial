// ES6
// TODO: Edit the outputs
// 1. Combine arrays
// 2. clone or shallow copy

const first = [1, 2, 3];
const second = [4, 5, 6];

console.log(first);
console.log(...first);

// first.push(second);
// console.log(first);

// use in push
// first.push(...second);
// console.log(first);

// copy
// const third = first
// third[1] = "x";
// console.log(first);
// console.log(third);

// const forth = [...first];
// console.log(forth);

const concat1 = first.concat(second);
console.log(first);
console.log(concat1);

const concat2 = [...first, ...second];
console.log("concat2 : ", concat2);


const concat3 = [...first, "x", ...second, "y"];
console.log("concat3 : ", concat3);




