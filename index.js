const chalk = require("chalk");
var readlineSync = require("readline-sync");


// Coloring different text messages
const intro = chalk.bgRed.black.bold;
const welcome=chalk.yellowBright.bold;
 const questionStyle=chalk.cyan;
 const currScoreStyle=chalk.magenta;
const right=chalk.green;
const wrong=chalk.red;

var score = 0;

// data of high score
var highScores = [
  {
    name: "Arindam",
    score: 5,
  },

  {
    name: "Abhirup",
    score: 4,
  },

  {
    name: "Tarun",
    score: 4,
  }
]

// array of objects
var questions = [{
  question: "Who was the first Hokage? ",
  answer: "Hashirama"
}, {
  question: "Who was called the Legendary Uchiha? ",
  answer: "Madara"
},
{
  question: "Who was the original founder of Akatsuki? ",
  answer: "Yahiko"
}, {
  question: "Whom did Kakashi get his eye from? ",
  answer: "Obito"
}, {
  question: "Who is the one person Naruto respects and admires the most? ",
  answer: "Iruka"
},
      //.............more to be added.................//          
            ];
// start of the CLI quiz: aka the intro
function Intro() {
 var userName = readlineSync.question(intro("What's your name? "));
  console.log(welcome("\n-------------------------"));
  console.log(welcome("Welcome "+ userName + " to Naruto quiz!\n-------------------------\n"));
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(questionStyle(question));

  if (userAnswer.toLowerCase() === answer.toLowerCase()) { 
    console.log(right("Dattebayo!"));
    score = score + 1;
    
  } else {
    console.log(wrong("Oops!"));
   
  }

  console.log(currScoreStyle("current score: ", score));
  console.log("---------------------")
}

// actual game logic for the quiz
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);

  console.log("WATCH OUT For the HIGH SCORES! if you thik you're better hmu with you screenshot of scoring higher");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


Intro();
game();
showScores();