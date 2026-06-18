let score = "33";
console.log(typeof score); // string
let scoreValue = Number(score);
console.log(scoreValue);
console.log(typeof scoreValue);
console.log(scoreValue );

//"33" -> 33 
//"33abc" => NaN
//true => 1; false=> 0

let isLoggedIn="1"
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
// "1" => true  
// "" => false
// "0" => true
// "false" => true

let stringNumber = String(isLoggedIn);
console.log(stringNumber);
console.log(typeof stringNumber);