// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

// Explain & TIP: Use age to check the life stage. This practice shows how to handle multiple conditions with an if-else chain
let personAge: number = 27;
if (personAge > 0.9 && personAge < 3) {
  console.log(`Determine person’s life stage is: "Toddler".`);
} else if (personAge >= 3 && personAge < 5 ) {
  console.log(`Determine person’s life stage is: "PreSchooler"`);
} else if (personAge >= 5 && personAge < 13) {
  console.log(`Determine person’s life stage is: "Primary School Boy"`);
} else if (personAge >= 13 && personAge < 19) {
  console.log(`Determine person’s life stage is: "Teenager"`);
}else if(personAge >=19 && personAge < 55) {
console.log(`Determine person’s life stage is: "Adult"`)
}else if(personAge >= 55 ){
console.log(`Determine person’s life stage is: "Old Person"`)
}
else {
console.log("Incorrect Data put in person Age...")
}
