
// prints letter if it is correctly guessed 
Letter.prototype.printLett = function () {
	if(this.show) {
		return this.letter;
	} else {
		return '-';
	}
};

//function takes a letter and compares it to blank space
function Letter(letter){
	this.letter = letter;
	if (this.letter == ' '){
		this.show = true;
	} else {
		this.show = false;
	}
}
//exports letter function
module.exports = {
	Letter
};