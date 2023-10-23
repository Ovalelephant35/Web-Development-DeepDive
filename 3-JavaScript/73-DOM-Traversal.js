let element = document.body;
let child =  element.children[1];
child.style.backgroundColor = "lightgreen"

let ele =document.querySelector("#Vegetable");
let parent = ele.parentElement;
parent.style.backgroundColor = "lightblue"
let sibling = ele.nextElementSibling;
sibling.style.backgroundColor= "red";
 

//firstElementchild
//lastElementChild
//parentElement
//nextElementSibling
//previosElementSibling
//children[]
//Array.from(.children)