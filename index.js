//Code Quiz

//VARIABLE DECLARATION
var timer = document.querySelector("#navbarNav");
var highScore = document.querySelector("#highScore");
var question = document.querySelector("#quizQuestion");
var answerOne = document.querySelector("#answer-1");
var answerTwo = document.querySelector("#answer-2");
var answerThree = document.querySelector("#answwer-3");
var answerFour = document.querySelector("#answer-4");

var questionList = [
  "questionOne",
  "questionTwo",
  "questionThree",
  "questionFour",
  "questionFive",
  "questionSix",
  "questionSeven",
  "questionEight",
  "questionNine",
  "questionTen",
];

//FUNCTIONS

function startQuestion() {
  var currentQuesiton = questionList[currentQuestionsIndex];
  questions.textcontent = currentQuesiton.title
  choices.innterHTML = ""
}

choices.foreach(functions (choice, i)) {
  var choiceBtn = document.createElement("button");
  choiceBtn.setAttribute("class", "choice");
  choiceBtn.setAttribute()
  choiceBtn.textcontent = i + 1 "." choices
}

//create a function that will run on click what the use clicked with event object - 
//what the current question is and is what is click equal to the correct answer
//If yes what next and if wrong then got next 