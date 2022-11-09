const userName = "Hesam";

function greeting() {
    console.log("Hello", userName);
}
function anotherFunc() {
    console.log('Another Function');
}


// module.exports = {
//     userName: userName,
//     greeting: greeting,
// };


module.exports = {
    userName,
    greeting,
};
// console.log(module)