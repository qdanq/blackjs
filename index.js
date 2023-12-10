let firstCard = Math.floor(Math.random() * 10) + 2; // write unit test
let secondCard = Math.floor(Math.random() * 10) + 2;
let hasBlackJack = false
let isAlive = true

let sum = firstCard + secondCard;
console.log(sum)

if (sum < 21) {
    console.log("Wanna draw a new card?")
} else if (sum === 21) {
    console.log("You won!")
    hasBlackJack = true
} else {
    console.log("You lost!")
    isAlive = false
}