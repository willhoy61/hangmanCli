var letter = require ("./letter.js");

function word(choseWord) {
	this.word = ["monkey", "giraffe", "building", "fence"];
	this.letters = [];
	this.blanks = blanks;
}
word.prototype.getWord = function() {
return this.word[Math.floor(Math.random() * this.word.length)];
};
word.prototype.checkIfLetter = function(keyCode) {

}