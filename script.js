//Udemy Video 32
'use strict'; //It shows us the exact line where the buck is hidden. Without this function we will get just an error alert with a general message
/*
let hasDriversLicense = false;
const testPass = true;

if (testPass) hasDriversLicense = true;
if (hasDriversLicense) console.log(`It is allowed to drive for you`);


// Udemy_Video 34: Function and expressions
const currentAge = ageBesim(1991); //Function declaration: The function can be called befor or after the calculation
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



//Udemy_Video 35: Arrow Function: Special form of an expression function
const calcAge3 = birthyear => 2023 - birthyear; //Just one line of code
const age3 = calcAge3(1991);
console.log(age3);


const yearsUntilRetirement = (birtYear, firstName) => {  //More then one line of code
    let age = 2023 - birtYear;
    let rertirement = 67 - age;
    //return rertirement;
    return `${firstName} geht in ${rertirement} Jahren in den Ruhestand`;
} 
console.log(yearsUntilRetirement(1991, "Besim"));


//Udemy_Video 36: Functions callin other functions

const cutPieces = function (fruit){                 //Sub function
    return fruit * 4;
}


const fruitProcessor = function(apples){            //Main function
    const applePieces = cutPieces(apples);              //Sub function -> called in the main function
    const juice = `we have ${applePieces} pieces of the apple`;
    return juice;
}
console.log(fruitProcessor(5));         


// Udemy_Video 37: Function challenge

const calAvearge = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const scoreDolphins = calAvearge(44,23,71);
const scoreKoalas = calAvearge(65,54,49);

function checkWinner(scoreDolphins, scoreKoalas)
{if (scoreKoalas < scoreDolphins){ return console.log(`The winner is Team Dolphins with ${scoreDolphins} vs ${scoreKoalas}`);}
    else  return console.log(`The winner is Team Koalas with ${scoreKoalas} vs ${scoreDolphins}`);}
*/

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(`Dolphins: ${scoreDolphins}`,`Koalas: ${scoreKoalas}`);
 

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};

checkWinner(scoreDolphins, scoreKoalas);