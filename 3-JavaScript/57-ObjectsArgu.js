//object as argument
//in javascript we can see that we need to to specify any data type thus everything is understandble 

class Car{
    constructor(model , year ,color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang" , 2023 , "Red");
const car2 = new Car("Mustang" , 2024 , "Blue");
const car3 = new Car("Mustang" , 2022 , "Green");

function displayInfo(r){
    console.log(r.model);
    console.log(r.year);
    console.log(r.color)
}
displayInfo(car1);