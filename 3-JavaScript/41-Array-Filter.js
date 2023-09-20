//array.filter() = creates a new array with all elements that pass the test provided by a function 
//creates new array with element being passes parameters provided leaves original array as it is
let num = [18,21,25,38,45,90,16,12,22];
let adults = num.filter(check);
adults.forEach(print);
function check(element){
    return element>=18;
}
function print(element){
    console.log(element);
}