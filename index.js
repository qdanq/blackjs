let firstCard = Math.floor(Math.random() * 10) + 2; // write unit test
let secondCard = Math.floor(Math.random() * 10) + 2;


let sum = firstCard + secondCard;

if (sum < 21) {
    console.log("Wanna draw a new card?")
} else if (sum === 21) {
    console.log("You won!")
} else {
    console.log("You lost!")
}