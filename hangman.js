'use strict';
var inquirer = require("inquirer");
var letter = require("./letter.js");
var word = require("./word.js");

var questions = [
  {
    type: 'input',
    name: 'first_name',
    message: "What's your first name"
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What's your last name",
    default: function() {
      return 'Doe';
    }
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
});