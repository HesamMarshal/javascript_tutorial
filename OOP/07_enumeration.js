const user1 = {
    fName: "Hesam",
    lName: "Akrami",
};

console.log("#########################");
console.log("User1 = ", user1);

console.log("#########################");
const keys = Object.keys(user1);
console.log("Keys = ", keys);

console.log("#########################");
const values = Object.values(user1);
console.log("Values = ", values);

console.log("#########################");
const entries = Object.entries(user1);
console.log("Entries = ", entries);
// Use Developer tools

console.log("#########################");
for (let key in user1)
    console.log(key, user1[key])

console.log("#########################");
for (let key of Object.keys(user1))
    console.log(key, user1[key])

console.log("#########################");
console.log("color" in user1);
console.log("fName" in user1);