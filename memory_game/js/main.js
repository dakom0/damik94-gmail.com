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

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
 
  cardsInPlay = [];

 return cardsInPlay;
}

function flipCard() {

  let cardID = this.getAttribute('data-id');
  console.log(cardID);
  cardsInPlay.push(cards[cardID].rank);

  console.log("User flipped " + cards[cardID].rank);
  console.log(cards[cardID].suit);

  this.setAttribute('src',cards[cardID].cardImage)

  //console.log(cards[cardID].cardImage);

  setTimeout(function () {
    if (cardsInPlay.length === 2) {
      checkForMatch();
      window.location.reload();
    }}, 100);
  


}

let board = document.querySelector('#game-board');

function createBoard() {

  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
  }
}

createBoard();
