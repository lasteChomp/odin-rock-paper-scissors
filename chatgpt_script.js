function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  const choice = prompt("Please enter rock, paper, or scissors:").toLowerCase();

  if (!["rock", "paper", "scissors"].includes(choice)) {
    alert("Invalid choice. Try again!");
    return getHumanChoice(); // recursive çağrıyı *return* ile döndürdük
  }

  return choice;
}

function playRound(human, computer) {
  if (human === computer) {
    return `Draw! You both played ${human}.`;
  }

  const winConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const humanWins = winConditions[human] === computer;

  if (humanWins) {
    humanScore++;
    return `You win! ${human} beats ${computer}.`;
  } else {
    computerScore++;
    return `You lose! ${computer} beats ${human}.`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice, computerChoice));
    console.log(`Score → You: ${humanScore}, Computer: ${computerScore}\n`);
  }

  if (humanScore === computerScore) {
    console.log(`It's a draw! Final score ${humanScore}:${computerScore}`);
  } else if (humanScore > computerScore) {
    console.log(`You win the game! Final score ${humanScore}:${computerScore}`);
  } else {
    console.log(`Computer wins! Final score ${humanScore}:${computerScore}`);
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();
