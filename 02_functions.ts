
// In functions we have typecheck for parameters so we require there need to give implicity the data type


// function addTwo(num){

//     return num+2

// }

// addTwo(5);

//In this if we pass addTwo("Hi hello") it does not give error as num is declared but no typecheck so we change it like below

function addTwo(num: number){

    return num+2

}

addTwo(5);

//addTwo("Hi Helo")// This will throw error simimlarly for string etc


let checkLogin=(username:string,password:string,isLogin: boolean)=>{
    console.log(username,password,isLogin)
}
//This will give error checkLogin(1,2,3)
checkLogin("a","b",true);

//We can give as optional Parameter by using ?
let checkOptionPar=(username: string,password?:string)=>{
    console.log(username,password);
}

checkOptionPar("John");



// We if need to pass the function return as particular data type we can using the 


// function isLogin(username: string): string{

//     return true

// }

// We are trying to return function with string but return type is true so it will throw error


function isLogin(username: string): boolean{

    return true

}