function callback(num){
    return num*2;
}

//1-Making a function with callback function as parameter
function higherOrder (callback) {
    callback();
}

//2-Making a AsynFunction with callback function as parameter
function higherOrderAsync(callback){
    setTimeout(callback , 1000);
}

//3-Making a array that Maps another array with function
let arr1 = [1,2,3,4,5];
const arr2 = arr1.map(callback)
 
console.log(arr2);

//4-Filtering a array on basis on some condition
const arr3 = arr2.filter((num) =>{
    if(num>3)return true;
    else return false;
})

//5-Create test to see if your logic for 4 is correct or not
console.log(arr3);

