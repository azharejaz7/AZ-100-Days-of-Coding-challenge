let friendsName : string[] = ["Faizan","Sajid","Ahmed","Afzal","Owais","Daniyal" ];
let message = ", With you by my side, every moment becomes an adventure.";

// console.log(friendsName[0] +message);
// console.log(friendsName[1] +message);
// console.log(friendsName[2] +message);
// console.log(friendsName[3] +message);
// console.log(friendsName[4] +message);
// console.log(friendsName[5] +message);


// 1st method

// for (let i = 0 ; i < friendsName.length ; i++ ){

//     console.log(friendsName[i] + message)
// }


// 2nd method
for (let fName of friendsName){
    console.log(fName   + message)
}