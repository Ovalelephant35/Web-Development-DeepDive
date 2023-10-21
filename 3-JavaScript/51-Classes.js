//classes -> a blueprint for creating objects define what properties and methods
//they have use a constructor for unique properties

class Player{
    score =0;
    pause(){
        console.log("You have Paused The game");
    }
    exit(){
        console.log("You have Exited the game");
    }
}

const player1 = new Player();
player1.score++;
console.log(player1.score);