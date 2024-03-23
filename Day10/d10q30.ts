//Hello Admin Task.

let userNames :String []=["AzharEjaz7","Israr664","Faizan722","Admin","Rims4176"];

userNames.forEach(userName => {
    if(userName==="Admin"){
        console.log(`Hello ${userName}, We Would like to check your status..`)
    }
    else{
        console.log(`Hello  ${userName}, Thank you for loggin in again..`)
    }
});