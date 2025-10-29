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

console.log(getComputerChoice());
