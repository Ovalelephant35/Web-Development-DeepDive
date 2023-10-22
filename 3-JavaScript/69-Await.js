//await = async function wait for a promise
async function file(){
    let fileload = true;
    if(!fileload){
        return "File is Loaded";
    }
    else {
        throw "file is not loaded";
    }
}
async function sp(){
    try{
        let mes = await file();
        console.log(mes);
    }
    catch(error){
        console.log(error);
    }
}
sp();