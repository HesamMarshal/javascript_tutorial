// apply and call method

function Circle(radius) {
    this.radius = radius;
    this.move = function () {
        console.log("move");
    }
    return this;
}

const cirlce0 = new Circle();
console.log(cirlce0);

const circle1 = Circle.call({}, 5)
console.log(circle1);

const obj = { name: "Hesam" };
const circle2 = Circle.call(obj, 6);
console.log(circle2);


const obj2 = { name: "Hesam" };
const circle3 = Circle.apply(obj2, [7]);
console.log(circle3);

// TODO : explain more
// TODO : Bind