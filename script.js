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
    return "Please enter one of the choises";
  }

  return humanChoice.toLowerCase();
}

console.log(getHumanChoice());
