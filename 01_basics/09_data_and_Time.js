let myDate=new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());
//console.log(typeof myDate);

let myCreatedDate=new Date(2026,6,22);
//console.log(myCreatedDate.toDateString());
let myTmeStamp=Date.now();

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=myDate();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

//`${newDate.getDay()}and the time`

newDate.toLocaleString('default' ,
    {
        weekday: "long"
    }
)

