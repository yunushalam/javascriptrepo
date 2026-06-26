//Immediately Involed function Expression(iife)

(function chai(){
    console.log("DB CONNECTED");
    
})();


//to immidiate return function
// global scope ke polution se problem hoti hai
//  kai baar toh global scope ke variable ko polution ko hatane ke
//  IIFE ka use karte hai

//named iife
(function chai(){
   console.log("DB CONNECTED");
   
}
)();


//unnamed iife
((name)=>{
    console.log("DB CONNECTED");
})("yunush");