const chalk = require("chalk");
var readlineSync = require("readline-sync");
//Naruto logo ascii art//
const NarutoArt = "\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u283F\u281B\u281B\u281B\u281B\u281B\u281B\u283F\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u281F\u2809\u2800\u2800\u2880\u28C0\u28C0\u28C0\u28C0\u2840\u2800\u2800\u2808\u2819\u283B\u283F\u281B\u2809\u2809\r\n\u28FF\u28FF\u28FF\u28FF\u28FF\u280F\u2800\u2800\u28C0\u28F4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F6\u28E4\u28C0\u2800\u2800\u2800\u28E0\u28F4\r\n\u28FF\u28FF\u28FF\u28FF\u2803\u2800\u2880\u28FC\u28FF\u287F\u281B\u2801\u2800\u2800\u2800\u2800\u2808\u2819\u283B\u28FF\u28FF\u28F7\u28F6\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u28FF\u2807\u2800\u2880\u28FE\u28FF\u285F\u2800\u2800\u28E0\u28F6\u28FF\u28F7\u28F6\u28E4\u2840\u2800\u2808\u28BB\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u287F\u2800\u2800\u28B8\u28FF\u28FF\u2801\u2800\u28A0\u28FF\u28FF\u287F\u281B\u283B\u28FF\u28FF\u28C6\u2800\u2800\u28BB\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u28FF\u2801\u2800\u2800\u28B8\u28FF\u28FF\u2844\u2800\u2808\u28BF\u28FF\u28E7\u2800\u2800\u28B8\u28FF\u28FF\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28FF\r\n\u28FF\u2803\u2800\u2880\u2800\u2800\u28BB\u28FF\u28F7\u28C4\u2800\u2800\u2808\u2800\u2800\u2880\u28FC\u28FF\u287F\u2800\u2800\u28B8\u28FF\u28FF\u28FF\u28FF\r\n\u280F\u2800\u2800\u28FE\u28C6\u2800\u2800\u2819\u28BF\u28FF\u28F7\u28F6\u28E4\u28F4\u28F6\u28FF\u28FF\u281F\u2801\u2800\u28A0\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u2800\u2800\u2818\u281B\u281B\u2813\u2800\u2800\u2800\u2809\u2819\u281B\u281B\u281B\u280B\u2809\u2800\u2800\u2880\u28F4\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\r\n\u28E6\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28C0\u28E4\u28F4\u28FE\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF";

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
  console.log(NarutoArt);
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