//when selecting id, tag or class use the #, . or tagName
var button1 = document.querySelector("#p1");
var button2 = document.getElementById("p2");
var p1S = document.querySelector("#p1S");
var p2S = document.querySelector("#p2S");
var gameOver = false;
var winningScore = 5;
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var score = document.querySelector("#score");

var p1Score = 0; //player1 Score
var p2Score = 0; //player2 Score

console.log(p1);
button1.addEventListener("click", function () {
    if (!gameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            //adds the winner class when the p1 score reaches 5
            p1S.classList.add("winner");
            gameOver = true; //game over
        }
        p1S.textContent = p1Score; //display the player 1 score
    }
});

button2.addEventListener("click", function () {
    if (!gameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            p2S.classList.add("winner");
            gameOver = true;
        }
        p2S.textContent = p2Score;
    }
});

reset.addEventListener("click", function () {
    resetGame();
});

function resetGame() {
    //change player 1 and player 2 score to 0
    p1Score = 0;
    p2Score = 0;

    //change values that are displayed
    p1S.textContent = 0;
    p2S.textContent = 0;

    //remove green class
    p1S.classList.remove("winner");
    p2S.classList.remove("winner");

    //gameOver = false
    gameOver = false;
}


numInput.addEventListener("change", function () {
    score.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetGame();
});