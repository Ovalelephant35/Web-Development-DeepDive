//const - variable cannot be changed further 
 const PI = 3.14;
 let rad ;
 let len ;
 rad = window.prompt("Enter the Rad");
 rad = Number(rad);
 len =  2*PI *rad;
 //PI = 34;throws error
 console.log(len);


