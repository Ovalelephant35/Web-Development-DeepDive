
const greet = (user) => console.log("Hello " + user);
greet("anurag");
 
const percent = (x ,y ) => x/y*100;
console.log(percent(75,150));

let grades = [10 , 20 , 30 , 40 , 50];
grades.sort((x,y) => x-y);
grades.forEach((element) => console.log(element));
