// named export
export const userName = "Hesam";


// default export only one default
// export default function greeting() {
//     console.log("Hello", userName);
// }

function greeting() {
    console.log("Hello", userName);
}

function anotherFunc() {
    console.log('Another Function');
}


export default greeting;


// console.log(module) 