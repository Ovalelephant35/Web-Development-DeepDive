let a =1;
let b =2;
let c =3;
let d =4;
let e =5;

//Rest parameters = represent an indefinite number of parameters
//basically is the extended version of the spread parameter and is used to pack the arguments as the array of numbers

console.log(sum(a,b,c,c,c,c,d,e));
 
function sum(x , y , ...numbers){
    let to = 0;
    for(let num of numbers){
        to+=num;
    }
    return to;
}
 
