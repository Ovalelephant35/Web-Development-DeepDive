//they allow embedded variables and expression
let user = "Oval";
let items = 4;
let total = 80;
console.log(`Hi ${user}`);
console.log(`Total items ${items}`);
let text = `Your Total is ${total}`;
console.log(text);
document.getElementById("Label").innerHTML = text;