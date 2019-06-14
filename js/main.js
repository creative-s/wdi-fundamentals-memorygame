//
var cards = ["queen", "queen", "king", "king"]; 
cards.length;
//=> 4

var cardsInPlay = [];

function checkForMatch(){

if (cardsInPlay[0] === cardsInPlay[1]) {
 	console.log("You found a match!");
}else {
	console.log("Sorry, try again.");
	}
};

function flipCard(cardId){

console.log("User flipped" + cards[cardId]);

cardsInPlay.push(cards[cardId]);

checkForMatch();

};

flipCard(0);
flipCard(2);