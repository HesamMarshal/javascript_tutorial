const circle = {
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

console.log(circle);
// Property
console.log(circle.location);
// method
circle.move();

// factory function
// constructor function

