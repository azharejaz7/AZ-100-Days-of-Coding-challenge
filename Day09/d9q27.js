//Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
// Explain & TIP: This exercise introduces you to handling multiple specific conditions in an if-else chain.
var alien_color = "Red";
//condition true block
if (alien_color == "Yellow") {
    console.log("Congratulation! You Killed Yellow Allien and Earned 45 Points");
}
else if (alien_color == "Green") {
    console.log("Congratulation! You Killed Green Allien and Earned 40 Points");
}
else if (alien_color == "Red") {
    console.log("Congratulation! You Killed Red Allien and Earned 35 Points");
}
else {
    console.log("oops! You have killed Wrong Allien");
}
//condition false block
alien_color = "Black";
if (alien_color == "Yellow") {
    console.log("Congratulation! You Killed Yellow Allien and Earned 45 Points");
}
else if (alien_color == "Green") {
    console.log("Congratulation! You Killed Green Allien and Earned 40 Points");
}
else if (alien_color == "Red") {
    console.log("Congratulation! You Killed Red Allien and Earned 35 Points");
}
else {
    console.log("oops! You have killed Wrong Allien");
}
