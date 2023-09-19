
let veg =    ["onions" , "potatoes" , "carrots"];
let fruits = ["apples" , "Papaya" , "Banana" , "Orange"];
let spices = ["Turmeric" , "aspgragus" , "herbs"];

let grocery = [veg , fruits , spices];
grocery[1][0] = "Guava";
for(let list of grocery){
    console.log(list);
    for(let items of list){
        console.log(items);
    }
}