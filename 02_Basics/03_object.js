// object literals
//const mySym=Symbol("key1");
const jsUser={
    name:"yunush",
    last_name:"alam",
   [mySym]:"mykey1",
    email:"yunushalam@gmail.com",
    isLoggedIn="yes"
}
console.log(jsUser.email);
console.log(jsUser[mySym]);

jsUser.email="yunushalam21@hmail.com"

jsUser.greeting=function () {
    console.log(`Hello js user,${this.name}`);
}

console.log(jsUser.greeting());


