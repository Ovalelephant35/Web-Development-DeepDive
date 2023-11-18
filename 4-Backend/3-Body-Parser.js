const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());


function start(){
    console.log("We have Started");
}

function handle(req , res){
    var count = req.body.counter;
    var answer = sum(count);
    var strn = "This is Your Answer = "+answer;
    res.send(strn);
}

function sum(count) {
    count = parseInt(count, 10);
    if (isNaN(count)) {
        return "Invalid input. Please provide a valid number.";
    }
    return (count * (count + 1)) / 2;
}


app.listen(port, start)

app.post('/sum', handle)