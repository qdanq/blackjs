let isAlive = false;
let sum;

let message = document.getElementById("message");
let sumEl = document.getElementById("sum");
let cards = document.getElementById("cards");


function startGame() {
  let firstCard = Math.floor(Math.random() * 10) + 2;
  let secondCard = Math.floor(Math.random() * 10) + 2;
  sum = firstCard + secondCard;
  isAlive = true;
  sumEl.textContent = firstCard + secondCard;
  cards.textContent = [firstCard, secondCard];

  checkResult()

}

function newCard() {
  if (isAlive) {
    let nextCard = Math.floor(Math.random() * 10) + 2; 
    sum += nextCard;
    sumEl.textContent = sum;
    cards.textContent += "," + nextCard;

    checkResult()
  }
    
}

function checkResult() {
  if (sum < 21) {
    message.textContent = "Do you want to draw a card?";
  } else if (sum === 21) {
    message.textContent = "Blackjack! You won!";
    isAlive = false
  } else {
    message.textContent = "You're out of the game!";
    isAlive = false;
  }
}
