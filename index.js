//Code Quiz

//VARIABLE DECLARATION
var timer = document.querySelector("#navbarNav");
var highScore = document.querySelector("#highScore");
var question = document.querySelector("#questionTitle");
var answers = document.querySelector("#questionChoices");
var currentQuestionsIndex = 0;

var questionList = [
  {
    id: 1,
    question: "According to Master Yoda, how many Sith are always out there?",
    choices: ["4", "3", "2", "1"],
    answer: "2",
  },
  {
    id: 2,
    question:
      "What happened to Anakin Skywalker at the battle with Count Dooku",
    choices: [
      "He lost his left leg",
      "He lost his right arm",
      "He lost his right leg",
      "He lost",
    ],
    answer: "He lost his right arm",
  },
  {
    id: 3,
    question: "Who killed Jabba?",
    choices: ["Han Solo", "C-3PO", "Luke Skywalker", "Princess Leia"],
    answer: "Princess Leia",
  },
  {
    id: 4,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
  {
    id: 5,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
  {
    id: 6,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
  {
    id: 7,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
  {
    id: 8,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
  {
    id: 9,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
  {
    id: 10,
    question: "What is my favorite color?",
    choices: ["green", "blue", "red", "yellow"],
    answer: "blue",
  },
];

//FUNCTIONS
function askQuestion() {
  var currentQuestion = questionList[currentQuestionsIndex];
  question.textContent = currentQuestion.question;

  for (var i = 0; i < 4; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-primary btn-lg btn-block");
    btn.textContent = currentQuestion.choices[i];
    answers.appendChild(btn);
  }

  //for loop for buttons
  // choices.innterHTML = "";
  //   <button
  //   type="button"
  //   class="btn btn-primary btn-lg btn-block"
  //   id="answer-1"
  // >

  // </button>
}

function startQuiz() {
  askQuestion();
}

//Entry Point
startQuiz();
// choices.foreach(functions (choice, i)) {
//   var choiceBtn = document.createElement("button");
//   choiceBtn.setAttribute("class", "choice");
//   choiceBtn.setAttribute()
//   choiceBtn.textcontent = i + 1 "." choices
// }

//create a function that will run on click what the use clicked with event object -
//what the current question is and is what is click equal to the correct answer
//If yes what next and if wrong then got next
