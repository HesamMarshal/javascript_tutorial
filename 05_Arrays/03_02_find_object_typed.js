//  find object typed items

const data = [
    { name: "Hesam", id: 1 },
    { name: "Sohrab", id: 2 }
]

console.log(data);
console.log(data.indexOf({ name: 'Hesam', id: 1 }));



const numbers = [10, 15, 20, 25, 30, 35]
console.log(numbers);
function search(item) {
    return item > 20;
}
console.log(search(25));

let item = numbers.find(search);
console.log("Number find > 20 : ", item);



item = numbers.find(function (item) {
    return item > 20;

});
console.log("Number find > 20 : ", item);

let position = numbers.findIndex(search);
console.log("Number findIndex > 20 : ", position);

// /////////////////////////////////////
let findeditem = data.find(function (el) {
    return el.id == 1;
});
console.log(findeditem);

findedIndex = data.findIndex(function (el) {
    return el.id == 2;
});
console.log(findedIndex);


// use Arrow Functions

findeditem = data.find(el => el.id == 1);
console.log(findeditem);

findedIndex = data.findIndex(el => el.id == 2);
console.log(findedIndex);








