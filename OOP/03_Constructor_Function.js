// Constructor function

// PascalCase
function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        console.log("move");
    }
}


const circle1 = new Circle(10);
console.log(circle1)

// New:
//      1. new empty object   {}
//      2. this points to empty object
//      3. return this object