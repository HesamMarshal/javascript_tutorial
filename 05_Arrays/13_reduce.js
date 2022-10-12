// Reduce

const numbers = [1, 2, 3, 4, 5];

let sum1 = 0;

for (let item of numbers) {
    sum1 += item;
}
console.log("Sum1: ", sum1);


// acc is like sum
const sum2 = numbers.reduce(function (acc, cur) {
    return acc + cur;

    // init value of acc (optional)
}, 0);
console.log("Sum2: ", sum2);

const cartItems = [
    { item: "item1", quantity: 1, id: 1, price: 50 },
    { item: "item1", quantity: 3, id: 2, price: 60 },
    { item: "item1", quantity: 2, id: 3, price: 70 },
];

// TODO: explain with for, for of

const cartPrice = cartItems.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
}, 0);
console.log("Cart Price", cartPrice);



const cartItems2 = [
    { item: "item1", quantity: 1, id: 1, price: "50 $" },
    { item: "item1", quantity: 3, id: 2, price: "60 $" },
    { item: "item1", quantity: 2, id: 3, price: "70 $" },
];
const cartPrice2 = cartItems2.reduce((acc, curr) => {
    // return acc + curr.quantity * curr.price;

    // const price = curr.price.split(" ");
    // console.log(price)

    // const price = curr.price.split(" ");
    // console.log(price[0]);


    const price = parseInt(curr.price.split(" ")[0]);
    // console.log(price);

    return acc + curr.quantity * price;
}, 0);
console.log("Cart Price 2", cartPrice2);


