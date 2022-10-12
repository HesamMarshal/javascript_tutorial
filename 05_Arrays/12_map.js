// Map  : loop over an array
const numbers = [1, 2, 3, 4, 5, 6];

const doubled1 = numbers.map((n) => n * 2);
console.log("doubled1: ", doubled1);

const doubled2 = numbers.map((n) => {
    // return { value: n * 2 }
    return { value: n, doubled: n * 2 }
});
console.log("\ndoubled2: ", doubled2);


const doubled3 = numbers.map((n) => ({ value: n, doubled: n * 2 }));

console.log("\ndoubled3: ", doubled3);

const users = [
    { name: "Hesam", id: 1, isActive: true },
    { name: "Mahsa", id: 2, isActive: false },
    { name: "Sohrab", id: 3, isActive: false },
    { name: "Tahmine", id: 4, isActive: true },
]

const usersNames = users.map((user) => {
    // return user.name;
    // return { name: user.name };
    return `<li>User Name is: ${user.name}, id : ${user.id}</li>`;

})

console.log("userNames ", usersNames);

// const joinedNames = usersNames.join();
const joinedNames = usersNames.join("");
console.log(joinedNames);
