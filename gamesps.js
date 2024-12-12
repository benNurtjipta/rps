let userChoice;

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
  } else if (
    (userChoice === "rock" && computerDraw === "scissors") ||
    (userChoice === "scissors" && computerDraw === "paper") ||
    (userChoice === "paper" && computerDraw === "rock")
  ) {
    // return `Computer: ${
    //   computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    // }, you win`;
    result = "win";
  } else {
    // return `Computer: ${
    //   computerDraw.charAt(0).toUpperCase() + computerDraw.slice(1)
    // }, you lose`;
    result = "lose";
  }
  return [computerDraw, result];
}

const pixelArtContainer = document.querySelector(".pixel-art");
const outputElement = document.getElementById("output");

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
  }
});

// let finalOutput = winner("rock");
// console.log(
//   `Computer chose: ${
//     finalOutput[0].charAt(0).toUpperCase() + finalOutput[0].slice(1)
//   }, you ${finalOutput[1]}!`
// );
