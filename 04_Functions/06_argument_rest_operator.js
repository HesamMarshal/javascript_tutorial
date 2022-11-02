

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));


// arguments 
function sum2(a, b) {
    console.log(arguments);
    let total = 0
    for (let value of arguments) {
        total += value;
    }
    return total

}
console.log(sum2(10, 20, 30, 40));


// reset operator
function sum3(...args) {
    console.log(args)
    return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum3(7, 8, 9, 10, 11));

// 
function sum4(discount, ...args) {
    console.log(args)
    const total = args.reduce((acc, curr) => acc + curr, 0);
    total = total * (1 * discount);
    return total;
}

console.log(sum4(0.1, 7, 8, 9, 10, 11));