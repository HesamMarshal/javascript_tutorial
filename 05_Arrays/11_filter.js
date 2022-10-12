// 

const numbers = [10, 15, 20, 25, 30, 35];

// filter needs a function

const filteredItems = numbers.filter(function (number) {
    // returns a array
    return number >= 20;
});

console.log("filteredItems: ", filteredItems);


const filteredItems2 = numbers.filter(number => number >= 20);
console.log("filteredItems2: ", filteredItems2);

// ////////////////////////

const users = [
    { name: "Hesam", id: 1, isActive: true },
    { name: "Mahsa", id: 2, isActive: false },
    { name: "Sohrab", id: 3, isActive: false },
    { name: "Tahmine", id: 4, isActive: true },
]

const activeUsers = users.filter((user) => {
    return user.isActive;

});

console.log(activeUsers);


