const name="yunush";
const lastName="halam";
const fullName=name+lastName;

console.log(fullName);
console.log(`my name is ${name} ${lastName}`);//this is the best approach to write the string concatination

//another method to write the string

const gameName = new String('yunush');
console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("n"));

const newstring=gameName.substring(0,4);
console.log(newstring);

const anotherstring=gameName.slice(-8,4);
console.log(anotherstring);

const newStringOne="  yunush    ";
console.log(newStringOne);
console.log(newStringOne.trim());
console.log(newStringOne.trimEnd());
console.log(newStringOne.trimStart());

console.log(newStringOne.replace("yu" , "al"));

//split method









