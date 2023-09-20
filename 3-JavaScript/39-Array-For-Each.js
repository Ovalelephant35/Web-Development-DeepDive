let names = ["alpha" , "beta" , "gamma"];
//executes a provided callback function for each and every element of array 
function cap(element , index , array){
    array[index] = element[0].toUpperCase() + element.substring(1);
}
//these three are povided to us element , index , array it is upto us to use them or not with for-each function
function print(element){
    console.log(element);
}

names.forEach(cap);
names.forEach(print);