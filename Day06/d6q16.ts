//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
//Explain & TIP: When you have more space, you can add more guests to your list. You can add guests at the beginning, middle, and end of an array.


//guest List
let guestList: string[] = ["Faisal","Waqar","Mujahid","Salman"];

console.log("Great news! I found a bigger dinner table!");

//Add new Guest in end
guestList.push("Khalid","khursheed");

//Add new Guest in Start
//guestList.splice(0,0,"Hamid","Lateef");
guestList.unshift("Hamid","Lateef");

//Add new Guest in Middle
guestList.splice(guestList.length / 2 ,0,"MiddleName Farhan");


// Print all guest name 
guestList.forEach( guest => {
    console.log(`${guest}, Would you Like to join us for today Dinner. `);

});





