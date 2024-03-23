//Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
// Explain & TIP: Expanding on the previous exercise, if-else chains allow you to handle multiple conditions.
var alien_color = "Red";
//condition tru block
if (alien_color == "Red") {
    console.log("Congratulation! You Killed Red Allien and Earned 25 Points");
}
else {
    console.log("You Missed All Alliens");
}
//condition false block
alien_color = "Yellow";
if (alien_color == "Red") {
    console.log("Congratulation! You Killed Red Allien and Earned 25 Points");
}
else {
    console.log("You Missed Alliens just earn 5 poins");
}
