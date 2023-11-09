'use strict'; //It shows us the exact line where the buck is hidden. Without this function we will get just an error alert with a general message

let hasDriversLicense = false;
const testPass = true;

if (testPass) hasDriversLicense = true;
if (hasDriversLicense) console.log(`It is allowed to drive for you`);