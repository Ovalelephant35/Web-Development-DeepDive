//DOm-Document object model (API)
//An interface for changing content of a page
//root of html document
console.log(document.URL);
console.dir(document);
console.log(document.title);
document.title = "Changed The title";
document.body.style.background = "Skyblue";
//each node content a object
//we can change without actually loading doucment 
//we can access different objects in node