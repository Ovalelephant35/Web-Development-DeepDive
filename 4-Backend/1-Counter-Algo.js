const express = require('express')
const app = express()
const port = 3000

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
    var count = req.query.counter;
    var answer = sum(count);
    var strn = "This is Your Answer = "+answer;
    res.send(strn);
}
app.get('/sum', handle)

app.listen(port, start)