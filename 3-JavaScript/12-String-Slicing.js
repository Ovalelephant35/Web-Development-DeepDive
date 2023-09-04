let fullname = "Oval Elephant";
let first;
let last;
// first = fullname.slice(0 , 4);
// last = fullname.slice(5);
first = fullname.slice(0 , fullname.indexOf(" "));
last = fullname.slice(fullname.indexOf(" ")+1);
console.log(first);
console.log(last);