const express = require('express')
const app = express()
const port = 3000;
var requ = 0;
function middleWare(req , res , next){
    requ++;
    console.log("No of Request till now " + requ);
    next();
}
app.use(middleWare);
function sum(count) {
    count = parseInt(count, 10);
    if (isNaN(count)) {
        return "Invalid input. Please provide a valid number.";
    }
    return (count * (count + 1)) / 2;
}
function start(){
    console.log("We have Started");
}

function handle(req , res){
    var count = req.headers.counter;
    var answer = sum(count);
    var strn = "This is Your Answer = "+answer;
    res.send(strn);
}
app.get('/sum', handle)

app.listen(port, start)