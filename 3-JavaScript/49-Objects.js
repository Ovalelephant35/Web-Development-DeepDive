//object by now you must have  what it is and how to use them 
const car = {
    model:"Maruti",
    color:"Black",
    year: 1990,
    
    drive : function(){
        console.log("You Drive the Car");
    },
    brake : function(){
        console.log("You have Stopped the car");
    }
}
car.drive();
console.log(car["drive"]);
//further const car2 and more can be created