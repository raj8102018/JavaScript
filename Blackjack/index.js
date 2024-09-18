let cards = []
let sum = 0
let hasblackjack = false
let isalive = false
message = ""

/*let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": $" + playerChips*/
let player = {
    playerChips: 100
}
function getRandomCard() {
    val1 = Math.floor(Math.random()*13+1)
    if (val1 === 1) {
        return 11
    } else if (val1 > 10 ) {
        return 10
    } else {
        return val1
    }
}

function rendergame() {
    if (sum < 21) {
        message = "wanna draw a new card?"}
    else if (sum === 21) {
      message = "you've won!"
      hasblackjack = true }
    else {
       message = "you lose"
       isalive = false
    }
    document.getElementById("result").textContent = message   
    document.querySelector("#sum").textContent = "Sum: " + sum
    document.querySelector("#cards").textContent = "Cards: " 
     for (i=0; i< cards.length; i++ )  {
        document.querySelector("#cards").textContent += cards [i] + " "
     }
}
function startgame() {
    isalive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard+secondCard
    rendergame()
}
function newcard() {
    if (isalive === true && hasblackjack === false) {
    let card = getRandomCard()
    cards.push(card)
    sum += card
    rendergame()
    }
}