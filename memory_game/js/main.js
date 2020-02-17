console.log("Up and running!");


cards = ["queen", "queen", "king", "king"];

cardsInPlay = [];

cardOne = cards[0];

cardTwo = cards[2];


cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);


console.log("User flipped "+ cardOne);

console.log("User flipped "+ cardTwo);

if (cardsInPlay.length===2){
  if(cardsInPlay[0]===cardsInPlay[1]){
    alert("You found a match!");
  }else{
        alert("Sorry, try again.");

  }
  console.log("Two cards");
}
