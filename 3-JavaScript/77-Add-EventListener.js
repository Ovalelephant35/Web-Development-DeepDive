//useful as we can add many event handlers to one elemnt
//even the same event that invokes different functions

const innerdiv = document.getElementById("ind");
const outerdiv = document.getElementById("out");

innerdiv.addEventListener("click" , changecol , true);//does hava any effect first out is there because of capture
outerdiv.addEventListener("click" , changecol , true);//third argument gives the prefernce to the one which has true

function changecol(){
    alert(`You selected ${this.id}`)
    this.style.backgroundColor = "red";//here this is used think properly
}

function changecoli(){
    innerdiv.style.backgroundColor = "blue";
}

