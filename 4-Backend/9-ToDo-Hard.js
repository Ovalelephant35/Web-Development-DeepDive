const express = require('express')
const fs = require("fs");
const bodyParser = require('body-parser');
const { title } = require('process');

const app = express()
const port = 3000;

app.use(bodyParser.json()); 

app.get('/todos' , (req , res)=>{
    fs.readFile("Todo.json", 'utf-8' , (err , data)=>{
        if(err)throw err;
        res.json(JSON.parse(data));
    })
})



app.post('/todos' , (req,res)=>{
    const nto = {
        id : Math.floor(Math.random()*10000),
        title : req.body.title,
        description : req.body.description
    };
    fs.readFile("Todo.json" , 'utf-8' , (err,data)=>{
        if(err)throw err;
        const to = JSON.parse(data);
        to.push(nto);
        fs.writeFile("Todo.json" , JSON.stringify(to) ,(err)=>{
            if(err)throw err;
        } );
    });
});

app.delete('/todos/:id', (req, res) => {
    fs.readFile("Todo.json", "utf8", (err, data) => {
      if (err) throw err;
      var todos = JSON.parse(data);
      const todoIndex = findIndex(todos, parseInt(req.params.id));
      if (todoIndex === -1) {
        res.status(404).send();
      } else {
        todos = removeAtIndex(todos, todoIndex);
        fs.writeFile("Todo.json", JSON.stringify(todos), (err) => {
          if (err) throw err;
          res.status(200).send();
        });
      }
    });
});
  

  
function findIndex(todos , index){
    for(let i=0 ; i<todos.length ; i++){
        if(todos[i].id = index)return i;
    }
    return -1;
}


function removeAtIndex(todos , index){
    var newto =[];
    for(let i=0 ; i<todos.length ;i++){
        if(i!=index)newto.push(todos[i]);
    }
    return newto;
}

app.listen(port);