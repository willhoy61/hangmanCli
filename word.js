var letter = require ("./letter.js");

function word(choseWord) {
	this.word = ["monkey", "giraffe", "building", "fence"];
	this.letters = [];
	this.blanks = blanks;
	this.guessesLeft = word.length;

	for ( var i = 0; i < this.word.length; i++) {
		this.letters.push( new Letter.Letter(this.word[i]));
	}
};
word.prototype.getWord = function() {
return this.word[Math.floor(Math.random() * this.word.length)];
};
word.prototype.checkIfLetter = function(letter) {
this.notCorrect = true;
this.isLetterValid = false;
var letter = letter.toLowerCase();
if (this.guesses.indexOf(letter) != -1) {
	this.isSetterValid = true;
	} else {
		this.guesses.push(letter);
			for (var i = 0; i < this.letters.length; i++) {
				if (this.letters[i].letter.toLowerCase() == letter) {
					thhis.notCorrect = false;
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
	module.exports = {
		Word
	};