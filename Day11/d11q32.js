// check same username
var existUsers = ["Azhar", "Faizan", "israr", "Admin"];
var newUsers = ["Dilshad", "Faizan", "ajmal", "Adnan"];
newUsers.forEach(function (newUser) {
    if (existUsers.some(function (existUser) { return existUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter new username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
