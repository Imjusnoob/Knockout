let knockoutNumber = document.getElementById("knockoutNumber");
let rollBtn = document.getElementById("rollBtn");
let restartBtn = document.getElementById("restartBtn");
let diceDisplay = document.getElementById("diceDisplay");
let sumText = document.getElementById("sumText");
let messageText = document.getElementById("messageText");

let total = 0;
let gameOver = false;

function diceEmoji(diceValue) {
    const diceEmojis = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    return diceEmojis[diceValue];
}

function rollDice() {
    if (gameOver) return;

    // Kontroll för att ett knockout-nummer har valts
    let knockout = parseInt(knockoutNumber.value);
    if (!knockout) {
        alert("Choose a knockout number!");
        return;
    }

    let dice1Value = Math.floor(Math.random() * 6) + 1;
    let dice2Value = Math.floor(Math.random() * 6) + 1;
    let sum = dice1Value + dice2Value;

    diceDisplay.textContent = `${diceEmoji(dice1Value)} ${diceEmoji(dice2Value)}`;

    // Kontrollera om summan är lika med knockout-numret
    if (sum === knockout) {
        messageText.textContent = `You hit ${sum} – KO! You lost.`;
        gameOver = true;
    } else {
        total += sum;
        sumText.textContent = `Total score: ${total}`;
        messageText.textContent = `You hit ${sum}. Keep playing!`;
    }
}

function restartGame() {
    total = 0;
    gameOver = false;
    sumText.textContent = "Totalpoäng: 0";
    messageText.textContent = "";
    diceDisplay.textContent = "";
    knockoutNumber.value = "";
}

rollBtn.addEventListener("click", rollDice);
restartBtn.addEventListener("click", restartGame);
