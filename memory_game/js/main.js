console.log("Up and running!");

const cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
   {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
   {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
   {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }  
        
];

cardsInPlay = [];

function checkForMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
  
}

function flipCard(){
  
let cardID= this.getAttribute('#data-id');
  
cardsInPlay.push(cards[cardID].rank);
  
console.log("User flipped "+ cards[cardID].rank);
console.log(cards[cardID].suit);
console.log(cards[cardID].cardImage);
  

if (cardsInPlay.length===2){
  checkForMatch();
  }
   
}

function createBoard(){

 let board = document.getElementById('#game-board');
 
  for (let i = 0; i < cards.length; i++) {
let cardElement = document.createElement('img');
cardElement.setAttribute('src', 'images/back.png');
cardElement.setAttribute('data-id', cards[i]);
cardElement.addEventListener("click",flipCard);
board.appendChild(cardElement);
}
}

createBoard();