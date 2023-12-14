let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let hasBlackJack = false;
let isAlive = true;

let message = document.getElementById("message");

sum = firstCard + secondCard
let sumEl = document.getElementById("sum");

function startGame() {
  if (sum < 21) {
    message.textContent = "Do you want to draw a card?";
  } else if (sum === 21) {
    message.textContent = "Blackjack! You won!";
    hasBlackJack = true;
  } else {
    message.textContent = "You're out of the game!";
    isAlive = false;
  }
  sumEl.textContent = firstCard + secondCard;

  
}
