type User={
    username:string;
    password:string;
    isActive:boolean;
}


//If we want to create a particular datatype of our own we can use type alisases

function createUser(user:User){

}
//This funcition accepts the parameter which should be object of type User which contains username,password,isActive inside it

//This gives error string do not accept of type User
//createUser('');

//This will not give any error as the type is User
createUser({username:'Jai',password:'as',isActive:true});