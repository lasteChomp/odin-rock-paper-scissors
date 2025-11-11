const choices = document.querySelectorAll(".opaque");
const results = document.querySelector(".results");
const playAgain = document.querySelector(".btn-play");
const playAgainBtn = document.querySelector(".btn-play > button");
const scores = document.querySelectorAll(".scores > p");

const pHumanScore = scores[0];
const pComputerScore = scores[1];
const pHumanScoreRaw = scores[0].textContent.slice(0, -1);
const pComputerScoreRaw = scores[1].textContent.slice(0, -1);
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playGame(e) {
  const computer = getComputerChoice();

  if (e.target.alt === computer) {
    results.textContent = `Draw! You both played ${e.target.alt}.`;
    return;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const humanWins = winConditions[e.target.alt] === computer;

  if (humanWins) {
    humanScore++;
    pHumanScore.textContent = `${pHumanScoreRaw}  ${humanScore}`;
    results.textContent = `You win! ${e.target.alt} beats ${computer}.`;
  } else {
    computerScore++;
    pComputerScore.textContent = `${pComputerScoreRaw}  ${computerScore}`;
    results.textContent = `You lose! ${computer} beats ${e.target.alt}.`;
  }

  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "You won the game!" : "Computer won the game!";
    results.textContent = `${winner} 🎉`;

    choices.forEach((choice) => {
      choice.removeEventListener("click", playGame);
    });

    playAgain.style.display = "block";
  }
}

function enableGame() {
  choices.forEach((choice) => {
    choice.addEventListener("click", playGame);
  });
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  pHumanScore.textContent = `${pHumanScoreRaw} ${humanScore}`;
  pComputerScore.textContent = `${pComputerScoreRaw} ${computerScore}`;
  results.textContent = "";
  playAgain.style.display = "none";
  enableGame();
}

enableGame();

playAgainBtn.addEventListener("click", resetGame);
