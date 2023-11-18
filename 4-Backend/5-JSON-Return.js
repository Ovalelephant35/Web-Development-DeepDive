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

function fact(count){
    let ans=1;
    for(let i=1 ; i<=count ; i++){
        ans*=i;
    }
    return ans;
}
function handle(req , res){
    var count = req.body.counter;
    var sumn = sum(count);
    var num = fact(count);
    var obj={
        sum : sumn,
        mul : num
    }
    res.status(200).send(obj);
}

function start(){
    console.log("We have Started");
}

app.listen(port, start);
app.post('/sum', handle)