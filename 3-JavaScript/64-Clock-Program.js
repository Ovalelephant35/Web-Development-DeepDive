const my = document.getElementById("my");
update();
setInterval(update, 1000);
function update(){
    let date = new Date();
    my.innerHTML = formatTime(date);

    function formatTime(){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = zereos(hours);
        minutes = zereos(minutes);
        seconds = zereos(seconds);
        return `${hours} : ${minutes} : ${seconds}`;

    }
    function zereos(time){
        time.toString();
        return time.length <2 ? "0" +time : time;
    }

}