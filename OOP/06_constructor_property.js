function createCircle(radius) {
    return {
        radius,
        move() {
            console.log("move function");
        },
    };
}

const circle1 = createCircle(15);


function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        console.log("move");
    }
    return this;
}

const circle2 = new Circle(5);

console.log(circle1);
console.log(circle2);
console.log(circle2.constructor);
// go to developer tools

