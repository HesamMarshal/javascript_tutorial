// Ex2
// create a function
// takes 2 params:  array, target
// if item is available in the array returns true else returns false;


function isInclude(arr, target) {

    for (let item of arr) {
        if (item == target) {
            return true;
        }
    }
    return false;
}

const numbers = [1, 2, 3, 4, 5];

console.log(isInclude(numbers, 3));
console.log(isInclude(numbers, 8));
