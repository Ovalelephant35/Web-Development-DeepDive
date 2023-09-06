let area;
let wid;
let len;
wid = window.prompt("Enter wid");
len = window.prompt("Enter len");
 area = getarea(len ,wid); 
 console.log(area);
 function getarea(len ,wid){
    let res = len*wid;
    return res;
 }
 