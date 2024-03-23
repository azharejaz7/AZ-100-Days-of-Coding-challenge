// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
// Explain & TIP: Arrays are flexible. You can replace an item if someone can't make it, then loop through the list again for new invitations.

let guestList : string [] = ["Israr","Hamdan","Furqan"];

//Not available guest Hamdan which contain in array index 1 thats why replace through index value 
let NotAvaialbleGuset = "Furqan";
console.log(`${guestList[guestList.indexOf(NotAvaialbleGuset)]} , is not availble for today dinner`);
let newGuest = "Shahid";

// Not avaiable Guest name show in Print
guestList[guestList.indexOf(NotAvaialbleGuset)] = newGuest;


// Print new invited guest List
guestList.forEach( gusest => {

    console.log(`${gusest} , Would you like to join us for today dinner....`)
})
