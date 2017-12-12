var letter = require ("./letter.js");

function Word(choseWord) {
	this.chosenword = ["monkey", "giraffe", "building", "fence"];
	this.letters = [];
	this.blanks = "_";
	this.trysLeft = 10;

	for ( var i = 0; i < this.chosenword.length; i++) {
		this.letters.push( new Letter.Letter(this.chosenword[i]));
	}
};
Word.prototype.getWord = function() {
return this.chosenword[Math.floor(Math.random() * this.chosenword.length)];
};
Word.prototype.checkIfLetter = function(letter) {
this.notCorrect = true;
this.isLetterValid = false;
var letter = letter.toLowerCase();
if (this.guesses.indexOf(letter) != -1) {
	this.isSetterValid = true;
	} else {
		this.guesses.push(letter);
			for (var i = 0; i < this.letters.length; i++) {
				if (this.letters[i].letter.toLowerCase() == letter) {
					this.notCorrect = false;
					this.letters[i].show = true;
				}
			}
		if (this.notCorrect) {
			this.trysLeft--;
		}
	}
};

//print output
Word.prototype.print = function() {
	var output = "";
	for (var i = 0; i < this.letters.length; i++) {
		output += this.letters[i].printLett();
	}
	return output;
};

module.exports = {
		Word
	};