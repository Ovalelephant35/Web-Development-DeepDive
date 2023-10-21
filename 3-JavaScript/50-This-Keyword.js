//in javascript refers to window in when in global but generalluy refernce to a particular object the object depends on the immediate context
 
const car ={
    model : "Mustang",
    drive : function(){
        console.log(`You drive ${this.model}`);
    }
}
car.drive();
//this is equivalent to saying that car.model this basicall refers to immediate object context