//spread operator allows you to expand elements of the given array
//... is the syntax
//even can be used to pass an whole array as an individual elements thus it is one of the most useful
//class is also a keyword in the
let num = [1,2,3,4,5,6,7,8,9];
let max = Math.max(...num);
console.log(max);
let class1 = ["alpha" , "Beta" , "gamma"];
let class2 = ["Delta", "Sigma" , "Zeta"];

class1.push(...class2);
console.log(...class1);