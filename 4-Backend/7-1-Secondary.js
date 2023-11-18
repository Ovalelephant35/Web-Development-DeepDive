function logbody(jsonBody){
    console.log(jsonBody);
}

function func(res){
    res.json().then(logbody);
}

var sendObj={
    method : "GET"
};

fetch("http://localhost:3000/sum?counter=5" , sendObj).then(func);