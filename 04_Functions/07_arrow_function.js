
// 
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));

// 
const add2 = function (a, b) {
    return a + b;
}
console.log(add2(7, 8));


// arrow function
const add3 = (a, b) => {
    return a + b;
}
console.log(add3(9, 10));

// remove return
const add4 = (a, b) => { a + b; }

// Remove {}
const add5 = (a, b) => a + b;


const increment = (a) => a++;

// if only 1 element remove the ()
const increment2 = a => a++;


