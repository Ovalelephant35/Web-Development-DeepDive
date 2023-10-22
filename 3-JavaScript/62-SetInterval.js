//almost same as set timeout but also it repeats itself after the given time of seconds though very good for irritating

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);

const t = setInterval(countup , 1000);

function countup(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(t);
    }
}


