//Udemy Video 32
'use strict'; //It shows us the exact line where the buck is hidden. Without this function we will get just an error alert with a general message
/*
let hasDriversLicense = false;
const testPass = true;

if (testPass) hasDriversLicense = true;
if (hasDriversLicense) console.log(`It is allowed to drive for you`);
*/

// Function and expressions
//Function declaration: The function can be called befor or after the calculation
const currentAge = ageBesim(1991); //Function called
function ageBesim(calcBirthYear){
return 2023 - calcBirthYear;
}
console.log(currentAge);


//Function expression
//Function can be called just after the calculation
const ageNaile = function(calcBirthYear2){
const naileAge = 2023 - calcBirthYear2;
return naileAge;
}
const currentAgeNaile = ageNaile(1994);
console.log(currentAgeNaile);