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
// Property : no parantheses
console.log(circle.location);


// method : has parantheses
circle.move();

// Todo: change the name to lowercase



