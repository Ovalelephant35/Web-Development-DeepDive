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
const arr3 = filter(arr2, sign);


function filter(num , callback){
    const res = [];
    for(let i=0 ; i<num.length ; i++){
        if(callback(num[i]))res.push(num[i]);
    }
    return res;
}


function sign(num){
    if (num %2==1) return true;
    else return false;
}


//5-Create test to see if your logic for arr3 is correct or not
function testCases(func, inputs, expected) {
    var flag = true;
    for (let i = 0; i < inputs.length; i++) {
        const result = func(...inputs[i]);
        if (result.toString() !== expected[i].toString()) {
            flag = false;
            break;
        }
    }
    return flag;
}

inputs = [
    [[1, 2, 3, 4], sign],
    [[1, 2, 3] , sign],
];


expected = [
    [1,3],
    [1,3],
];
console.log(testCases(filter, inputs, expected));
console.log(arr3);


//6-Read A given File
const fs = require('fs');
// const { DefaultDeserializer } = require('v8');
// fs.readFile('Text.txt' , 'utf-8' , (err ,data) =>{
//     if(err){
//         console.log("error");
//         return 
//     }
//     console.log(data);
// })

//7-Reading and Writing File simul

// fs.readFile('Text.txt' , 'utf-8' , (err,data)=>{
//     if(err){
//         console.log("Error");
//         return 
//     }
//     else if(data==0) fs.writeFile('Text.txt' , "1" , (err)=>{} );
//     else fs.writeFile('Text.txt' , "0", (err)=>{} );
   
// } )

//8-Doing some fun with Async Functins

function series(){
    fs.readFile('Text.txt' , 'utf-8' , reading);
}

function reading(err , data){
    setTimeout(writing , 3000);
    function writing(){
        fs.writeFile('T.txt' , data , (err)=>{}, remove(data));

    }
    function remove(data){
        data = data.replace(/\s\s+/g, ' ');
        console.log(data);
        deleteA();
        // deleteB();
    }
}
function deleteA(){
    fs.writeFile('Text.txt' , ' ' , (err)=>{} );
}
function deleteB(){
    fs.writeFile('T.txt' , ' ' , (err)=>{} );
}

series();