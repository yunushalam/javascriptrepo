//this print current contex
const user={
    username:"yunush",
    price:999,

    welcomeMessage:function(){
        //console.log(`${this.username}, welcome to website`);
          
        
    }
}

user.welcomeMessage();
user.username="alam"
user.welcomeMessage();

//this function canot work in function contex 
// this is work in current object contex
// function chai() {
//     let username="yunush"
//     console.log(this.username);
    
    
// }
// chai()

// const chai=function(){
//     let username="yunush"
//     console.log(this.username);
// }


//arrow function
const chai= () =>{
let username="yunush"
    console.log(this);
}

// const addtwo=(num1,num2)=>{
//     return num1+num2

// }

//const addtwo=(num1,num2) =>  num1+num2;

// implicit 
const addtwo=(num1,num2) =>  (num1+num2);
console.log(addtwo(3,4));

