//Hello Admin Task.
var userNames = ["AzharEjaz7", "Israr664", "Faizan722", "Admin", "Rims4176"];
userNames.forEach(function (userName) {
    if (userName === "Admin") {
        console.log("Hello ".concat(userName, ", We Would like to check your status.."));
    }
    else {
        console.log("Hello  ".concat(userName, ", Thank you for loggin in again.."));
    }
});
