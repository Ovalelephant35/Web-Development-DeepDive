//locale = specify that langauge (undefined = default)
//option = object with formatting option
let num = 123457.890;
// num = num.toLocaleString("hi-IN");
console.log(num);
num = num.toLocaleString("hi-IN" ,{style : "currency" , currency : "INR"} )
console.log(num)

let x = 0.5;
x = x.toLocaleString(undefined , {style : "percent"});
console.log(x);

let y = 5;
y=y.toLocaleString(undefined , {style : "unit" , unit : "celsius"});
console.log(y);