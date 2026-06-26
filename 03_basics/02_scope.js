//scope
let a=300;
if(true){
    let a=20;
    const b=30;
   // console.log("INNER",a);
}
// console.log("INNER",a);
//console.log(a);

function one(){
    const username="yunush"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
   // console.log(website);
    two()
    
}
//one()

if(true){
    const username="yunush"
    if(username==="yunush"){
        const website="youtube"
       // console.log(username+website);
        
    }
   // console.log(website);
}
//console.log(username);

function addone(num){
return num+1
}

addone(5)


//++++++++++++Interesting ++++++++++

//function decleration method
// in which we can,t declare before initialize


const addtwo=function(num){
    return num+2
}

addtwo(5)




