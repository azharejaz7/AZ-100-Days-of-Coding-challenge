
// Day 01  Questtion 2 coding Solved.
let StudentName: string = "waQas asghar";
console.log("This is all Big letter name "  + StudentName.toUpperCase() );

let ChangeNameinLower = StudentName.toLowerCase();
console.log(`This is all small letter name  ${ChangeNameinLower}`);

console.log("This is Title Case name " + StudentName.charAt(0).toUpperCase() + StudentName.slice(1).toLowerCase());

//my own working and remarks
// Remarks :  there is no builtin title case function in typeScript we have to use own methods for print title case in TypeScript

