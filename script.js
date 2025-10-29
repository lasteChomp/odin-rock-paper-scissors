function getComputerChoice() {
  const choiceNum = Math.floor(Math.random() * 3);
  let choiceString;

  if (choiceNum === 0) {
    choiceString = "rock";
  } else if (choiceNum === 1) {
    choiceString = "paper";
  } else {
    choiceString = "scissors";
  }

  return choiceString;
}

function getHumanChoice() {
  const humanChoice = String(
    prompt("Please enter one of the choices: rock, paper, scissors")
  );

  if (
    humanChoice.toLowerCase() !== "rock" &&
    humanChoice.toLowerCase() !== "paper" &&
    humanChoice.toLowerCase() !== "scissors"
  ) {
    alert("Please enter one of the choises");
    getHumanChoice();
  }

  return humanChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return `Draw! You both played ${humanChoice}. No points to anyone!`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose! Paper beats Rock. One point to the computer!`;
    } else {
      humanScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win! Rock beats Scissors. One point to you!`;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose! Scissors beats Paper. One point to the computer!`;
    } else {
      humanScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win! Paper beats Rock. One point to you!`;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose! Rock beats Scissors. One point to the computer!`;
    } else {
      humanScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win! Scissors beats Paper. One point to you!`;
    }
  }
}

let humanScore = 0;
let computerScore = 0;
