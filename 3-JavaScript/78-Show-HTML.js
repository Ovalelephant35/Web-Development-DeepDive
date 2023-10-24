const butt = document.querySelector("#butt");
const img = document.querySelector("#img");

butt.addEventListener("click" , () =>{
    if(img.style.display=="none"){
        img.style.display="block"
    }
    else {
        img.style.display="none"
    }
})
//visibility element is also there through whch element will not shift