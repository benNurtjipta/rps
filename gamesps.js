let userChoice;
let winCount = 0;
let lossCount = 0;
let drawCount = 0;
let totalGames = 0;
let rockChoice = 0;
let paperChoice = 0;
let scissorsChoice = 0;
let rockWins = 0;
let paperWins = 0;
let scissorsWins = 0;

function winner(userChoice) {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  let computerDraw;

  if (randomNum === 1) {
    computerDraw = "rock";
  } else if (randomNum === 2) {
    computerDraw = "paper";
  } else {
    computerDraw = "scissors";
  }

  let result;
  if (userChoice === computerDraw) {
    result = "draw";
    drawCount++;
    totalGames++;
  } else if (
    (userChoice === "rock" && computerDraw === "scissors") ||
    (userChoice === "scissors" && computerDraw === "paper") ||
    (userChoice === "paper" && computerDraw === "rock")
  ) {
    result = "win";
    winCount++;
    totalGames++;

    if (userChoice === "rock") {
      rockWins++;
    } else if (userChoice === "paper") {
      paperWins++;
    } else {
      scissorsWins++;
    }
  } else {
    result = "lose";
    lossCount++;
    totalGames++;
  }
  return [computerDraw, result];
}

const pixelArtContainer = document.querySelector(".pixel-art");
const outputElement = document.getElementById("output");
const scoreElement = document.getElementById("score");
const resetButton = document.getElementById("resetButton");
const statsPage = document.getElementById("statistics");
const clickSound1 = new Audio("./sounds/blip1.wav");
const clickSound2 = new Audio("./sounds/blip2.wav");
const clickSound3 = new Audio("./sounds/blip3.wav");

pixelArtContainer.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName === "IMG") {
    userChoice = target.dataset.choice;
    switch (userChoice) {
      case "rock":
        clickSound1.currentTime = 0;
        clickSound1.play();
        break;
      case "paper":
        clickSound2.currentTime = 0;
        clickSound2.play();
        break;
      case "scissors":
        clickSound3.currentTime = 0;
        clickSound3.play();
        break;
    }
    const [computerDraw, result] = winner(userChoice);
    outputElement.textContent = `You: ${
      userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
    }, Me: ${
      computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    }. You ${result}!`;
    updateScore();

    if (userChoice === "rock") {
      rockChoice++;
    } else if (userChoice === "paper") {
      paperChoice++;
    } else {
      scissorsChoice++;
    }
    updateStatistic();
    const artBox = target.parentElement;
    artBox.classList.add("animate");

    setTimeout(() => {
      artBox.classList.remove("animate");
    }, 300);
  }
});

function updateScore() {
  scoreElement.textContent = `Win: ${winCount} Loss: ${lossCount} Draw: ${drawCount}`;
}

function updateStatistic() {
  statsPage.innerHTML = `Games played: ${totalGames}<br> <br>
  Win % ${
    totalGames !== 0 ? ((winCount / totalGames) * 100).toFixed(2) : "n.a."
  }<br>
  Loss % ${
    totalGames !== 0 ? ((lossCount / totalGames) * 100).toFixed(2) : "n.a."
  }<br>
  Draw % ${
    totalGames !== 0 ? ((drawCount / totalGames) * 100).toFixed(2) : "n.a."
  }<br>
  <br>
  YOU CHOSE<br>
  Rock: ${rockChoice} Paper: ${paperChoice} Scissors: ${scissorsChoice}<br> <br>
  Rock Win % ${
    rockChoice !== 0 ? ((rockWins / rockChoice) * 100).toFixed(2) : "n.a."
  }<br>
  Paper Win % ${
    paperChoice !== 0 ? ((paperWins / paperChoice) * 100).toFixed(2) : "n.a."
  }<br>
  Scissor Win % ${
    scissorsChoice !== 0
      ? ((scissorsWins / scissorsChoice) * 100).toFixed(2)
      : "n.a."
  }
  `;
}

resetButton.addEventListener("click", function () {
  winCount = 0;
  lossCount = 0;
  drawCount = 0;
  totalGames = 0;
  rockChoice = 0;
  paperChoice = 0;
  scissorsChoice = 0;
  rockWins = 0;
  paperWins = 0;
  scissorsWins = 0;
  updateStatistic();
  updateScore();
  outputElement.textContent = "Start all over?";
});
