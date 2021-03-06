//Code Quiz

//VARIABLE DECLARATION
var timer = document.querySelector("#timer");
var highScore = document.querySelector("#highScore");
var question = document.querySelector("#questionTitle");
var answers = document.querySelector("#questionChoices");
var currentQuestionsIndex = 0;
var secondsLeft = 120;
var Score = document.querySelector("#score");
var count = localStorage.getItem("count");

//Array of all questions
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
    question:
      "Who wiped out all of the information about Kamino from the Jedi Temple acrhives?",
    choices: ["Darth Sidious", "Sifo-Dyas", "Count Dooku", "Yoda"],
    answer: "Count Dooku",
  },
  {
    id: 5,
    question: "What did Luke Skywalker lose in his fight with Darth Vader?",
    choices: [
      "His left hand",
      "His left foot",
      "His right hand",
      "His left leg",
    ],
    answer: "His right hand",
  },
  {
    id: 6,
    question: "According to the Emperor, what was Luke Skywalker's weakness?",
    choices: [
      "His faith in the Light Side of the Force",
      "His faith in his friends",
      "His lack of vision",
      "His resistance to the Dark Side of the Force",
    ],
    answer: "His faith in his friends",
  },
  {
    id: 7,
    question: "Where did the Clone Wars begin?",
    choices: ["Tatooine", "Geonosis", "Naboo", "Coruscant"],
    answer: "Geonosis",
  },
  {
    id: 8,
    question:
      "What was the job that Finn told Han Solo he has at Starkiller base?",
    choices: ["Pilot", "Sanitation", "Guard", "Chef"],
    answer: "Sanitation",
  },
  {
    id: 9,
    question: "Who fixed the hyperdrive on the Millennium Falcon?",
    choices: ["C-3PO", "R2-D2", "Chewbacca", "Lando Calrissian"],
    answer: "R2-D2",
  },
  {
    id: 10,
    question: "Who killed Jango Fett?",
    choices: ["Mace Windu", "Anakin Skywalker", "Obi-Wan Kenobi", "Yoda"],
    answer: "Mace Windu",
  },
];

//FUNCTIONS
//function the prompt quiz questions and answers
function askQuestion() {
  var currentQuestion = questionList[currentQuestionsIndex];
  question.textContent = currentQuestion.question;
  answers.innerHTML = "";

  for (var i = 0; i < 4; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.setAttribute("class", "btn btn-primary btn-lg btn-block");
    btn.setAttribute("value", currentQuestion.choices[i]);
    btn.textContent = currentQuestion.choices[i];
    answers.appendChild(btn);

    btn.addEventListener("click", function (event) {
      console.log(event.target);
      let selectedAnswer = event.target.value;

      console.log(selectedAnswer);

      //Score tracker and timer
      if (selectedAnswer === questionList[currentQuestionsIndex].answer) {
        currentQuestionsIndex++;
        count++;
        Score.textContent = "Score: " + count;
      } else {
        secondsLeft = secondsLeft - 15;
        currentQuestionsIndex++;
      }
      askQuestion();

      if (currentQuestionsIndex === 9) {
        endgame();
      }
    });
  }
}

//starts questions and timer
function startQuiz() {
  askQuestion();

  function setTimer() {
    var timeLeft = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timeLeft);
      } else if (currentQuestionsIndex === 9) {
        clearInterval(timeLeft);
      }
    }, 1000);
  }

  setTimer();
}

//Entry Point

//Home page for start button for quiz
function homePage() {
  var startParagraph = document.createElement("h3");
  startParagraph.setAttribute("id", "paragraph");
  startParagraph.textContent = "Welcome to the Star Wars Quiz!";
  document.body.appendChild(startParagraph);

  var startbtn = document.createElement("button");
  startbtn.setAttribute("id", "button");
  startbtn.textContent = "Click here to start the quiz!";
  startbtn.style.display = "center";
  document.body.appendChild(startbtn);

  document.getElementById("button").addEventListener("click", function () {
    startParagraph.style.display = "none";
    startbtn.style.display = "none";
    startQuiz();
  });
}

//endgame function after quiz is finished to prompt text and textbox for initials
function endgame() {
  var endgame = document.createElement("h3");
  endgame.setAttribute("id", "endParagraph");
  endgame.setAttribute("type", "text");
  endgame.textContent =
    "Congratulations on completing the quiz! Please enter your initials";
  document.body.appendChild(endgame);

  var initials = document.createElement("textarea");
  initials.setAttribute("id", "initial-box");

  document.body.appendChild(initials);

  question.style.display = "none";
  answers.style.display = "none";

  function userScore() {
    var playerScore = document.createElement("h3");
    playerScore.textContent = initials.textContent;
    document.body.appendChild(playerScore);
  }
  userScore();
}
homePage();

//Function to take users initials and score in a variable to be shown in high scores
function userScore() {
  var playerScore = initials.textContent;
}
