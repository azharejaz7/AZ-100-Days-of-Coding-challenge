// check same username
let existUsers: string[] = ["Azhar", "Faizan", "israr", "Admin"];
let newUsers: string[] = ["Dilshad", "Faizan", "ajmal", "Adnan"];

newUsers.forEach((newUser) => {
  if (
    existUsers.some(
      existUser => existUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter new username`)
  }
  else {
    console.log(`${newUser} is available`)
  }
});
