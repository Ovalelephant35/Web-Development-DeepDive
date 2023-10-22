//cant open file
//lose connection
//user type incorrect input
//typeerror

try{
console.lag()
}
catch(error){
    console.log(error);
}//program will still run 

//another example

try{
    let x =window.prompt("Enter a Number :");
    x = Number(x);
    if(isNaN(x)) throw "that wasnt a number";
}
catch(error){
    console.log(error);
}
finally{
    console.log("This always executes");
}