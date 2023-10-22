//async makes a function return a promise thus we can return the promises acts as a asyn function though direct promise can eveb used but we can see clearly less letter less texy
async function file(){
    let fileload = true;
    if(!fileload){
        return "File is Loaded";
    }
    else {
        throw "file is not loaded";
    }
}

file().then((value)=>console.log(value)).
       catch((value)=>console.log(value));