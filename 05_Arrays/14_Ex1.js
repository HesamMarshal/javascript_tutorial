// Excercise 1: 
//  create a function that returns an array with the items form min to max

function inRange(min, max) {
    const result = [];
    for (let i = min; i < max; i++) {
        result.push(i);
    }
    return result;
}

console.log(inRange(-2, 3));