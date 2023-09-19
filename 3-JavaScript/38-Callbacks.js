//Callback is used to pass a function as an argument in another function
//helps us to run function one after other only or without one being run other funtion wont run 
sum(2,3,display);

function sum(x , y ,func){
    let res = x+y;
    func(res);
}

function display(x){
    document.getElementById("label").innerHTML = x;
}