let userChoice;
let winCount = 0;
let lossCount = 0;
let drawCount = 0;

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
    // return `Computer: ${
    //   computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    // }, you draw`;
    result = "draw";
    drawCount++;
  } else if (
    (userChoice === "rock" && computerDraw === "scissors") ||
    (userChoice === "scissors" && computerDraw === "paper") ||
    (userChoice === "paper" && computerDraw === "rock")
  ) {
    // return `Computer: ${
    //   computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    // }, you win`;
    result = "win";
    winCount++;
  } else {
    // return `Computer: ${
    //   computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    // }, you lose`;
    result = "lose";
    lossCount++;
  }
  return [computerDraw, result];
}

const pixelArtContainer = document.querySelector(".pixel-art");
const outputElement = document.getElementById("output");
const scoreElement = document.getElementById("score");
const resetButton = document.getElementById("resetButton");

pixelArtContainer.addEventListener("click", function (event) {
  const target = event.target;
  if (target.tagName === "IMG" && target.dataset.choice) {
    userChoice = target.dataset.choice;
    const [computerDraw, result] = winner(userChoice);
    outputElement.textContent = `You: ${
      userChoice.charAt(0).toUpperCase() + userChoice.slice(1)
    }, Me: ${
      computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    }. You ${result}!`;
    updateScore();
  }
});

function updateScore() {
  scoreElement.textContent = `Win: ${winCount} Loss: ${lossCount} Draw: ${drawCount}`;
}

resetButton.addEventListener("click", function () {
  winCount = 0;
  lossCount = 0;
  drawCount = 0;
  updateScore();
  outputElement.textContent = "Start all over?";
});

// let finalOutput = winner("rock");
// console.log(
//   `Computer chose: ${
//     finalOutput[0].charAt(0).toUpperCase() + finalOutput[0].slice(1)
//   }, you ${finalOutput[1]}!`
// );
