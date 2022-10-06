// Ex1:
// obj = { name, age, address: { city, country } }
// showUser()
// for in


function showUser(user) {
    for (const key in user) {
        console.log(user[key]);
        // console.log(typeof user[key]);
        if ((typeof user[key]) == 'object') {
            for (const key2 in user[key]) {
                console.log(user[key][key2]);
            }

        }
    }
}
obj = {
    name: "Hesam",
    age: 38,
    address: {
        city: "Shiraz",
        country: "Iran",
    },
}

showUser(obj);


