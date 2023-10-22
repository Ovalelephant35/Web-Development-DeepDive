let date = new Date();
let year = date.getFullYear();
date.toLocaleDateString();
document.getElementById("my").innerHTML = formatt(date);
//setmonth get month set year get year set minutes ge minutes set seconds get seconds etc etc

function format(date){
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    return `${day} / ${month+1} / ${year}`;
}

function formatt(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours} : ${minutes} : ${seconds}`;
}