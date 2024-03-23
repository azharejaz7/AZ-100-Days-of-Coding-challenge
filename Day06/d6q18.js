// Question 18: Seeing the World: Think of at least five places you’d like to visit.
//Explain & TIP: Arrays can be ordered and reordered in various ways without altering the original list, useful for planning and organizing information.
var FavPlaces = ["Pakistan", "india", "Canada", "South Africa", "Makkah", "America United State", "zimbabwe"];
// ///This method i tried without checking sir code 
// ///A-Z sorting
// FavPlaces.sort();
// console.log("this is sorting A-Z");
// FavPlaces.forEach(places =>  {
//     console.log(`My Favorite Place Name is : ${places} `);
// });
// ///Z-A sorting
// FavPlaces.reverse();
// console.log("this is sorting Z-A");
// FavPlaces.forEach(places =>  {
//     console.log(`My Favorite Place Name is : ${places} `);
// });
///This method use after checking sir code 
// console.log("This is orginal order.", FavPlaces);
// console.log("This is Alphabetic order." , [...FavPlaces].sort());
// console.log("This is orginal order." , FavPlaces);
// console.log("This is Reverse Alphabetic order." , [...FavPlaces].sort().reverse());
// console.log("This is orginal order." , FavPlaces);
FavPlaces.reverse();
console.log("Reversed order:", FavPlaces);
FavPlaces.reverse();
console.log("Original order:", FavPlaces);
FavPlaces.sort();
console.log("Alphabetical order:", FavPlaces);
FavPlaces.reverse();
console.log("Reverse alphabetical order:", FavPlaces);
