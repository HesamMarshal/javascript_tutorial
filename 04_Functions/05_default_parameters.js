

function sum(a, b, c) {

}

function scale(students, point, addedValue) {
    console.log(students, point, addedValue);

    if (!point) {
        point = 13;
    }
    console.log(students, point, addedValue);

    if (!addedValue) {
        addedValue = 1;
    }
    console.log(students, point, addedValue);

}

scale(25);
console.log("////////");
scale(25, 15);
console.log("////////");
scale(25, 15, 2);

console.log("////////");
function scale2(students, point = 13, addedValue = 1) {
    console.log(students, point, addedValue);


}
scale2(25);

// order is important