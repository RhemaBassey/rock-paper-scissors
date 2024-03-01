var choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  min = 0;
  max = 2;
  let randomPick = Math.floor(Math.random() * (max - min + 1)) + min;
  return choices[randomPick];
}

function capitalize(string){
   return( string[0].toUpperCase() + string.substring(1,string.length).toLowerCase())
}

function playRound(playerSelection, computerSelection) {
  let playerSelectionSmallCaps = playerSelection.toLowerCase();
  let playerSelectionIndex = choices.indexOf(playerSelectionSmallCaps);
  let computerSelectionIndex = choices.indexOf(computerSelection);
  let output = []

  if (playerSelectionIndex == computerSelectionIndex) {
     return ["Draw! Both played " + capitalize(playerSelectionSmallCaps)+".", 0, 0];
    } else if (
    (playerSelectionIndex > computerSelectionIndex &&
      playerSelectionIndex != choices.length - 1) ||
    (playerSelectionIndex == 0 && computerSelectionIndex == choices.length - 1)
  ) {
    return ["You Win! " + capitalize(playerSelection)+" beats "+ capitalize(computerSelection)+".", 1, 0 ];
  } else {
    return [ "You Loose! " + capitalize(computerSelection)+" beats "+ capitalize(playerSelectionSmallCaps)+".", 0, 1];
  }

}

function playGame(){
    var playerScore = 0
    var computerScore = 0
    var rounds = 5
    for(let i=0; i<rounds; i++){
        const computerSelection = getComputerChoice()
        
        let playerSelection = prompt("Enter your choice below. Rock, Paper or Scissors... ")
        while (choices.includes(playerSelection.toLowerCase()) == false){
             playerSelection = prompt("INVALID SELECTION. Please Enter either Rock, Paper or Scissors... ")
        }
        let result = (playRound(playerSelection, "rock"));

        console.log(result[0])
        playerScore += result[1]
        computerScore += result[2]
    }

    console.log("ROUNDS: "+rounds+ "\nYou: " + (playerScore == 1 ? "1 point": (playerScore+ " points"))+ "\nComputer: " + (computerScore == 1 ?  "1 point":(computerScore+ " points")) )
    
    console.log(playerScore > computerScore ? "You Win!!!": (playerScore == computerScore? "Draw!!!":"Computer Wins!!!"))

}


playGame()