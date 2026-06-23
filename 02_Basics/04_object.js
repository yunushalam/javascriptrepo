//singloton
//const tinderUser=new Object();

const tinderUser={

}

tinderUser.id="23456789"
tinderUser.name="yunush"
console.log(tinderUser);

const regularUser={
    email:"yunush@alam",
    fullName:{
        userfullName:{
            firstname:"yunush"
        }
    }
}

//console.log(regularUser.fullName.userfullName.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3={obj1,obj2}


//const obj3=Object.assign({}, obj1,obj2)
//console.log(obj3);


//most used method for assign
//const obj3={...obj1,...obj2}

    //const users=[
      //  {
      //      id:101,
      //      name:"yunush"
      //  },
      //  {
       //     id:102,
      //      name:"alam"
      //  },
   // ]
//console.log(users[1].name);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("name"));

