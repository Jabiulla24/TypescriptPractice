//In this we learn about unions
//In case if we are not sure about datatype then we can give | and then mention which datatype may come may be string or number etc


type User={
    id:string | number;
    name:string;
    isActive:boolean;
}

let u:User={
    id:'1234',
    name:'John',
    isActive:true
}


let u2:User={
    id:1,
    name:'John',
    isActive:true
}

//u2 does not give error as id is 1 it accepts both string as well as number 


//If we want to give an array which accetps string number and boolean we can declare like this


const values:( string | number| boolean)[]=['1234',5,true];

//This does not give error as we have given all cases