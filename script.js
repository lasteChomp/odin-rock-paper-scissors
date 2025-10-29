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
    return `Draw! You both played ${humanChoice}. No points to anyone!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "paper") {
      computerScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose! Paper beats Rock. One point to the computer!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
    } else {
      humanScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win! Rock beats Scissors. One point to you!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "scissors") {
      computerScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose! Scissors beats Paper. One point to the computer!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
    } else {
      humanScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win! Paper beats Rock. One point to you!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You lose! Rock beats Scissors. One point to the computer!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
    } else {
      humanScore++;
      return `You chose: ${humanChoice} and the computer chose: ${computerChoice}. You win! Scissors beats Paper. One point to you!\n\nYour score: ${humanScore}, Computer's score: ${computerScore}`;
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }

  if (humanScore === computerScore) {
    console.log(
      `Draw!\n\nYour final score: ${humanScore}, Computer's final score: ${computerScore}`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `You won!\n\nYour final score: ${humanScore}, Computer's final score: ${computerScore}`
    );
  } else {
    console.log(
      `You lost!\n\nYour final score: ${humanScore}, Computer's final score: ${computerScore}`
    );
  }
}

let humanScore = 0;
let computerScore = 0;

playGame();
