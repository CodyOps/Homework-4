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

      if (selectedAnswer === questionList[currentQuestionsIndex].answer) {
        currentQuestionsIndex++;
        count++;
        Score.textContent = count;
      } else {
        timer - 15;
        currentQuestionsIndex++;
      }
      askQuestion();
    });
  }
}

function startQuiz() {
  askQuestion();

  function setTimer() {
    var timeLeft = setInterval(function () {
      secondsLeft--;
      timer.textContent = secondsLeft;

      if (secondsLeft === 0) {
        clearInterval(timeLeft);
      }
    }, 1000);
  }

  setTimer();
}

//Entry Point

function homePage() {
  var startbtn = document.createElement("button");
  startbtn.textContent = "Click here to start the quiz!"
  document.body.appendChild(startbtn);

  document.getElementById("button").addEventListener("click", startQuiz) {
    startQuiz()
  };
}

homePage();
