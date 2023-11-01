//promises = object that encapsules the result of an asyn operation and helps return like syn process
const promiseb = new Promise((res, rej) => {
    let fileloaded = true;

    if(!fileloaded){
        res("file Loaded");
    }
    else if(fileloaded){
        rej("File NOT Loaded");//there can only be if statment thus it will not do anything 
    }
});//this is producing code
promiseb.then((value) => {console.log(value)}).
        catch((value) => console.log(value));
        //this is consuming code here then is if promise is resolved and catch is for rej\

//another example of promises

const promise1 = time => new Promise(resolve => {
    setTimeout(resolve, time);
})

promise1(3000).then(() => console.log("Thanks"));