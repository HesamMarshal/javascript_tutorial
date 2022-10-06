// factory function

function createCircle() {
    const circle = {
        radius: 10,
        location: {
            x: 1,
            y: 2,
        },
        isVisible: true,
        move: function () {
            console.log("move function");
        }
    };
    return circle
}

function createCircleV2() {
    return {
        radius: 10,
        location: {
            x: 2,
            y: 3,
        },
        isVisible: true,
        move: function () {
            console.log("move function");
        }
    };
}


function createCircleV3(radius, x, y) {
    return {
        radius: radius,
        location: {
            x: x,
            y: y,
        },
        isVisible: true,
        move: function () {
            console.log("move function");
        }
    };
}

function createCircleV4(radius, x, y) {
    return {
        // key and value is same
        radius,
        location: {
            x,
            y,
        },
        isVisible: true,

        // new function define
        move() {
            console.log("move function");
        },

    };
}


console.log(createCircle());
let circle1 = createCircle();
let circle2 = createCircleV2();

console.log(circle1);
console.log(circle2);
// change 2

let circle3 = createCircleV3(1, 10, 11);
console.log(circle3);

let circle4 = createCircleV4(4, 10, 11);
console.log(circle4);