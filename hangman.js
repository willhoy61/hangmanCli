'use strict';

var inquirer = require('inquirer');
var letter = require("./letter.js");
var word = require("./word.js");

function userGuess() {
  console.log(this.chosenword);

inquirer.prompt([{
  
    type: 'input',
    name: 'letter',
    message: "Choose a letter to guess the word"
     }]).then(function(user) {
      var letter = user.letter;
      newWord.checkLetter(letter);
      if (newWord.isLetterValid) {
        console.log("you have already guessed that letter");
        userGuess();
      } else if (newWord.isComplete()) {
          console.log("Correct You have guessed the word" + newWord.chosenWord);
          playAgain(); 
        } else if (newWord.trysLeft === 0) {
          console.log("You are out of Moves, the correct answer was" + newWord.chosenWord);
          playAgain();
        } else {
          console.log(" you have " + newWord.trysLeft + " moves left");
          userGuess();
        }
    });
}
// fuctin handles game reset
function playAgain() {
  inquirer.prompt([{
    type: 'input',
    message: "Would you like to play again? type 'y' for yes and 'n' for now",
    name: 'playAgain' 
  }]).then(function(user) {
    var answer = user.playAgain;
    if (answer == 'y') {
      game.userPrompt(function() {
        newWord = new word.Word(game.chosenWord);
        userGuess();
      });
    } else if (answer == 'n') {
      console.log("end");
      return;
    }
  })
}

