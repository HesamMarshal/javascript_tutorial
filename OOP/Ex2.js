// Factory and Constructor , apply, call

function createUser(name, age, city, country) {
    return {
        name,
        age,
        address: {
            city,
            country,
        },
    }
};
const user1 = createUser("Hesam", 30, "Shiraz", "Iran");
console.log(user1);

function User(name, age, city, country) {
    this.name = name;
    this.age = age;
    this.address = {
        city: city,
        country: country,
    };
    return this;
};


const user2 = new User("Soha", 31, "Tehran", "Iran");
console.log(user2);

const user3 = User.apply({}, ["Soha", 31, "Tehran", "Iran"]);
console.log(user3);



const user4 = User.call({}, "Soha", 31, "Tehran", "Iran");
console.log(user4);
