let user = "Anurag";
let box = 0;
//when one function is nested inside another function for the added security so that the other function can only be invoked when the actual function is invoked
login();
//displaybox(); not possible as fucntion is secured 
function login(){
    displayuser();
    displaybox();

    function displaybox(){
        console.log(`You have ${box} messages`);
    }

    function displayuser(){
        console.log(`Welcome ${user}`)
    }
}