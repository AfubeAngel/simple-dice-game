const randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log("random-number one", randomNumber1);

const randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log("random-number two", randomNumber2);

const firstDiceNumber = document.querySelector(".img1");
firstDiceNumber.setAttribute("src", `images/dice${randomNumber1}.png`);

const secondDiceNumber = document.querySelector(".img2");
secondDiceNumber.setAttribute("src", `images/dice${randomNumber2}.png`);

const resultDisplay = document.querySelector("h1");

if (randomNumber1 === randomNumber2){
    resultDisplay.innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2){
    resultDisplay.innerHTML = "Player 1 Wins!";
}
else {
    resultDisplay.innerHTML = "Player 2 Wins!";
}