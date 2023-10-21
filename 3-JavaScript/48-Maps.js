//maps obejects that holds keyvalue pairs of data types
const store = new Map([
    ["Shirt" , 10],
    ["Jeans" , 20],
    ["Socks" , 30],
    ["Pants" , 40]
]);
let spend = 0;

spend +=store.get("Shirt");//get method will get the values according to key 
spend +=store.get("Jeans");

store.set("Socks" , 80);//set according to key 
console.log(spend);
store.delete("Pants");//deletes the values accordingly
console.log(store.has("Shirt"));
console.log(store.size);

store.forEach((value , key) => console.log(`${key} $${value}`))