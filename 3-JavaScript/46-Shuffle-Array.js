let cards = ["A" , "2" , "3", "4" , "5" , "6" , "7" , "8" , "9" , "J" , "K" , "Q"];

shuffle(cards);

console.log(cards);

function shuffle(array){
    let curInd = array.length;
    while(curInd!=0){
        let ranInd = Math.floor(Math.random()*array.length);
        let temp = array[curInd];
        array[curInd] = array[ranInd];
        array[ranInd] = temp;
        curInd--;
    }
    return array;
}