//
var cards = ["queen", "queen", "king", "king"]; 
cards.length;
//=> 4

var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped" + " " + cardOne);



var cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped" + " " + cardTwo);

if (cards.length === 2) {

}else if (cards[0] === cards[2]){
	alert("You found a match!")
}else if (cards[0] !== cards[2]){
	alert("Sorry, try again.")
}
