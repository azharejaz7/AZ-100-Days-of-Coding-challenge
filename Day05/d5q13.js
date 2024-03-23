// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// Explain & TIP: Arrays help you group related items, like types of transportation. This way, you can talk about each one using a loop.
var favoriteTransport = ["Honde CD 125", "yamaha Heavy Bike", "Honda Civic 2020 Car"];
favoriteTransport.forEach(function (favTransport) {
    console.log("i would Like to own : ".concat(favTransport));
});
