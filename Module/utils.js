const userName = "Hesam";

function greeting() {
    console.log("Hello", userName);
}
function anotherFunc() {
    console.log('Another Function');
}

module.exports.userName = userName;
module.exports.greeting = greeting;

// console.log(module)