let firstCard = Math.floor(Math.random() * 10) + 2; // write unit test
let secondCard = Math.floor(Math.random() * 10) + 2;
let hasBlackJack = false
let isAlive = true
let message = ""

let sum = firstCard + secondCard;
console.log(sum)

function startGame() {
  if (sum < 21) {
    message = "Do you want to draw a card"
} else if (sum === 21) {
    message = "Blackjack! You won!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
console.log(message)

}
