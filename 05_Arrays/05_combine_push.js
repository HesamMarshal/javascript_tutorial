// 

const first = [1, 2, 3];
const second = [4, 5, 6];

// Concat vs push

// add
const add = first + second;
console.log(add);
console.log(typeof add);

// push
// first.push(second);
// const len = first.push(second);
// console.log(len);
// console.log(first);

const concat1 = first.concat(second);
console.log(concat1);

const concat2 = second.concat(first);
console.log(concat2);







