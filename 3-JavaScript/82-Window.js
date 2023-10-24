//window = interface used to talk to the web browser the dom is the property of the window

console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location.href);
console.log(window.location.host);
console.log(window.location.hostname);
console.log(window.innerHeight);
const but = document.getElementById("but");

but.addEventListener("click" , ()=> window.print());