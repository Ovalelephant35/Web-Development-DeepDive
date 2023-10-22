//anony objects requires less syntax and thus is more beneficial as we dont require  not much unique names etc
//downside is we dont have direct access

class Card{
    constructor(value , suit){
        this.value = value;
        this.suit = suit;
    }
}

;


let card =[ new Card("A" , "Hearts"),
            new Card("A" , "Spade"),
            new Card("A" , "Diamonds"),
            new Card("A" , "Club"),
            new Card("2" , "Hearts"),
            new Card("2" , "Spades")];

console.log(card[0].suit);
//now they can be refernced by index number
console.log(card[5].value);

card.forEach(card => console.log(card.suit));