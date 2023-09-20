//array.map(name of fucntion) executes a provided callback function once for each element and creates a new array 
//with this also same elements arguments are provided but as we can see new array is being created

let num = [1,2,3,4,5,6];
let squ = num.map(squares);//added to new array 
let cube = num.map(cubes);
num.forEach(print);
squ.forEach(print);
cube.forEach(print);
function squares(element){
    return Math.pow(element , 2);
}
function cubes(element){
    return Math.pow(element , 3);
}
function print(element){
    console.log(element);
}