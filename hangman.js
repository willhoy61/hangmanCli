'use strict';
var inquirer = require("inquirer");
var letter = require("./letter.js");
var word = require("./word.js");

function userGuess() {
  console.log(this.chosenword);

inquirer.prompt([{ 
  
    type: 'letter',
    name: 'text',
    message: "Choose a letter to guess the word"
     
      console.log(this.blanks);
      checkIfLetter();
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
      }
     })




game.userPrompt(function() {
  newWord = new word.Word(game.chosenWord);
  userGuess();