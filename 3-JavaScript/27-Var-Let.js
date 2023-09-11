//let is only limited to block scope and 
//var is limited to function

for(let i=1 ; i<4 ; i++){
    console.log(i);
}
//console.log(i);//we get error of uncaught reference

for(var j=1 ; j<4 ; j++){
    console.log(j);
}
console.log(j);//no error is there