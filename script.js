function startGame() {
  let firstCard = Math.floor(Math.random() * 10) + 2;
  let secondCard = Math.floor(Math.random() * 10) + 2;
  let hasBlackJack = false;
  let isAlive = true;
  sum = firstCard + secondCard 

  let message = document.getElementById("message");
  let sumEl = document.getElementById("sum");
  let cards = document.getElementById("cards");

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
  cards.textContent = [firstCard, secondCard];

}

function newCard() {
  
}
