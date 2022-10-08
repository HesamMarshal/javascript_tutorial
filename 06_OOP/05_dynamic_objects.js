const circle = {
    radius: 1,
};

console.log(circle);

circle.color = "red";
console.log(circle);


circle.draw = function () {
    console.log("Draw");
}
console.log(circle);

delete circle.color
console.log(circle);
