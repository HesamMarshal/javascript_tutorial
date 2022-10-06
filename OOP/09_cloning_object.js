// Cloning 

const user1 = {
    fname: "Hesam",
}
const user2 = user1;
console.log("#########################");
console.log("user1 =", user1);
console.log("user2 =", user2);

console.log("#########################");
user1.fname = "Sohrab";
console.log("user1 =", user1);
console.log("user2 =", user2);

// 1. Copy properties
console.log("######################### 1. Copy properties");
const user3 = {}
for (let key in user1) {
    user3[key] = user1[key];
}
console.log("user1 =", user1);
console.log("user2 =", user2);
console.log("user3 =", user3);

console.log("######### Change User 3 name");
user3.fname = "Afra";
console.log("user1 =", user1);
console.log("user2 =", user2);
console.log("user3 =", user3);

// 2. Assign
console.log("######################### 2. Assign");
const user4 = Object.assign({}, user1);
user4.fname = "Sodabeh";
console.log("user1 =", user1);
console.log("user4 =", user4);

// 3. Spread Operator ECMA 6
console.log("######################### 3. Spread Operator");
const user5 = { ...user1 };
user5.fname = "Roham";
console.log("user1 =", user1);
console.log("user5 =", user5);