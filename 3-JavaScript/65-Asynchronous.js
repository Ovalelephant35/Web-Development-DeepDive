//this code which we see syn that is they occur one after the other
console.log("Start");
console.log("This step is synchronous");
setTimeout(() => console.log("Hey") , 5000);//start now finish sometime later
console.log("End");

//ane example of async code would be that if we can set the time such that is invokes at later time that is out of order
