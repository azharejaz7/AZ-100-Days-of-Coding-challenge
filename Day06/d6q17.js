//Guest List
var guestList = ["Faisal", "Waqar", "Mujahid"];
//1st Method
// Remove guest 
// guestList.splice(0,1);
// guestList.forEach( guest => {
//     console.log(`${guest} Would you like to join us for today dinner.`)
// });
//2nd Method
console.log("Unfortunately, I can only invite two people for dinner.");
//remove last guest from list
while (guestList.length > 2) {
    var RemoveGuest = guestList.pop();
    console.log("Sorry, ".concat(RemoveGuest, ", I can't invite you to dinner."));
}
guestList.forEach(function (guest) {
    console.log("".concat(guest, ", you are still invited."));
});
//for empty array
guestList.splice(0, guestList.length);
console.log(guestList);
