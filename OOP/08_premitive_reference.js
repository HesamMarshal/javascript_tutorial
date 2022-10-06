// array, obj, function => address
// string, number , boolean => value

// primitive 

let x = 10;
let y = x;

console.log("x=", x);
console.log("y=", y);

x = 15;
console.log("x=", x);
console.log("y=", y);

// Refernce

const user1 = {
    fname: "Hesam",
}
const user2 = user1;

console.log("user1 =", user1);
console.log("user2 =", user2);

user1.fname = "Sohrab";
console.log("user1 =", user1);
console.log("user2 =", user2);

user2.fname = "Arad";
console.log("user1 =", user1);
console.log("user2 =", user2);
