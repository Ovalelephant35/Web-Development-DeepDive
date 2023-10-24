//cookie = a small text file stored on the computer used to remember information about the user saved in name=value pairs
//then followed by expiration date which can set after that cookies get automatically gets deleted

const first = document.querySelector("#first");
const last = document.querySelector("#last");
const but = document.querySelector("#but");
const gbut = document.querySelector("#gbut");

but.addEventListener("click" , () =>{
    setCookie("FirstName" , first.value , 365);
    setCookie("LastName" , last.value , 365);

});

gbut.addEventListener("click" , () =>{
    first.value = getCookie("FirstName");
    last.value = getCookie("LastName");
    
});

function setCookie(name , value , daysTolive){
    const date = new Date();
    date.setTime(date.getTime() + daysTolive * 24 * 60 * 60 * 1000);
    let expiry =  "expires=" + date.toUTCString();
    document.cookie = `${name}=${value} ; ${expiry}`
}

function delCookie(name){
    setCookie(name,null,null);
}


function getCookie(name){
    const cDe = decodeURIComponent(document.cookie);
    const cAr = cDe.split("; ");
    let result = null;
    cAr.forEach(element => {
        if(element.indexOf(name)==0){
            result = element.substring(name.length+1)
        }
    })
    return result;
}



setCookie("firstName" , "Anurag" , 365);
setCookie("lastName" , "Singh" , 365);
delCookie("firstName");
delCookie("lastName");
getCookie("lastName");