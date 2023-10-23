let fruits = document.getElementsByName("fruits");//behaves like an array 
let food = document.getElementsByTagName("li");
//similarly class can also be used to select them 
food[0].style.backgroundColor = "pink";
function checke(){
fruits.forEach((fruit)=>{
    if(fruit.checked){
        console.log(fruit.value);
    }
})
}
const t = setInterval(checke , 3000);
let element = document.querySelector("#tit");
element.style.backgroundColor = "green";
//similarly for class preceed with . for but it selects only first element 
//to select all you can have queryselector all