//setTimeout() invokes a function after a numebr of millisecond and it  async function(doesnt pause execution of the prog)

let r = setTimeout(fm ,3000);
let r1 = setTimeout(sm ,6000);


function fm(){
    alert(`Anurag Loves Ananya`);
}

function sm(){
    alert(`but Ananya loves someone else`);
}

document.getElementById("my").onclick = function(){
    clearTimeout(r);
    clearTimeout(r1);
    alert(`She hates you now`);
}