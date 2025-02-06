

//Here in this we see how to pass object in function and return function in function

function isLogin({username: string}): {username: string}{
    
    return {username:"John"}

}

isLogin({username:"Rohan"});

//Here the input of param is string and return type is object
let checkUsernameinObj=((a:string):{}=>{

return{}
});


