// datatypes


//primitive => call by value
//7types : String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference (Non primitive datatypes) => call by reference
//Array, Object, Function

const id =Symbol("123");
const anotherid =Symbol("123");
console.log(id===anotherid);

//const bigNumber=234567890n

//Array, Object, Function

const arrheros=["shaktiman","naagraj","doga"]
let myObj={
    name:"yunush",
    age:22,

}

const myFunction=function(){
    console.log("yunush");
    
}


console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof arrheros);





