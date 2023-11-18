const express = require('express')
const bodyParser = require('body-parser');

const app = express()
const port = 3000;

app.use(bodyParser.json()); 

function sum(count) {
    count = parseInt(count, 10);
    if (isNaN(count)) {
        return "Invalid input. Please provide a valid number.";
    }
    return (count * (count + 1)) / 2;
}

function handle(req , res){
    var count = req.query.counter;
    var sumn = sum(count);
    var htmlResponse = {
        sum : sumn,
    }
    res.status(200).send(htmlResponse);
}

function start(){
    console.log("We have Started");
}

app.listen(port, start);
app.get('/sum', handle)