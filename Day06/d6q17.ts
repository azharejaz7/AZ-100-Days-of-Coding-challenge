//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
//Explain & TIP: Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list is straightforward but should be done thoughtfully.



//Guest List
let guestList: string[] = ["Faisal","Waqar","Mujahid"];


//1st Method
// Remove guest 
// guestList.splice(0,1);

// guestList.forEach( guest => {
//     console.log(`${guest} Would you like to join us for today dinner.`)
// });

//2nd Method
console.log("Unfortunately, I can only invite two people for dinner.");


//remove last guest from list
while (guestList.length > 2){
    let RemoveGuest = guestList.pop();
    console.log(`Sorry, ${RemoveGuest}, I can't invite you to dinner.`);
}

guestList.forEach(guest => {

    console.log(`${guest}, you are still invited.` )
    
});

//for empty array
guestList.splice(0,guestList.length);

console.log(guestList);


