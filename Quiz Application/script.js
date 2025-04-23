var questions = [
  {
    ques_no: "Question #1",
    question: "What does HTML stand for?",
    option1: "Hyperlinks and Text Markup Language",
    option2: "Hypertext Markup Language",
    option3: "Home Tool Markup Language",
    correctOption: "Hypertext Markup Language",
  },
  {
    ques_no: "Question #2",
    question: "Who is making the Web standards?",
    option1: "Google",
    option2: "The World Wide Web Consortium",
    option3: "Microsoft",
    correctOption: "The World Wide Web Consortium",
  },
  {
    ques_no: "Question #3",
    question: "Choose the correct HTML element for the largest heading:",
    option1: "<heading>",
    option2: "<h6>",
    option3: "<h1>",
    correctOption: "<h1>",
  },
  {
    ques_no: "Question #4",
    question: "Who is the president of Maldives?",
    option1: "Donald Trump",
    option2: "Elon Musk",
    option3: "None of these",
    correctOption: "None of these",
  },
  {
    ques_no: "Question #5",
    question: "What is the correct HTML for adding a background color?",
    option1: '<body bg="yellow">',
    option2: "<background>yellow</background>",
    option3: '<body style="background-color:yellow;">',
    correctOption: '<body style="background-color:yellow;">',
  },
  {
    ques_no: "Question #6",
    question: "Choose the correct HTML element to define important text:",
    option1: "<strong>",
    option2: "<b>",
    option3: "<i>",
    correctOption: "<strong>",
  },
  {
    ques_no: "Question #7",
    question: "Choose the correct HTML element to define emphasized text:",
    option1: "<italic>",
    option2: "<i>",
    option3: "<em>",
    correctOption: "<em>",
  },
  {
    ques_no: "Question #8",
    question: "What is the correct HTML for creating a hyperlink?",
    option1: "<a>http://www.w3schools.com</a>",
    option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
  },
  {
    ques_no: "Question #9",
    question: "What is the Capital of Pakistan?",
    option1: "Islamabad",
    option2: "Karachi",
    option3: "Lahore",
    correctOption: 'Islamabad',
  },
  {
    ques_no: "Question #10",
    question: "Which is the most popular Programming Language?",
    option1: 'C++',
    option2: 'DotNet',
    option3: 'JavaScript',
    correctOption: 'JavaScript',
  },
  {
    ques_no: "Question #11",
    question: " The Second Generation Computer was based on?",
    option1: 'Vaccum tube',
    option2: 'Transistor',
    option3: 'Silicon chips',
    correctOption: 'Transistor',
  },
  {
    ques_no: "Question #12",
    question: "Which of the following programming language started from second generation",
    option1: 'Cobol',
    option2: 'BASIC',
    option3: 'C',
    correctOption: 'C',
  },
];

var jsSec = 16;
var Min = document.querySelector("#min");
var Sec = document.querySelector("#sec");
var interval;

var quest1 = document.querySelector("#Ques");
var ques_num = document.querySelector("#Ques_no");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var Nextbtn = document.querySelector("#btn");
var getInps = document.getElementsByTagName("input");
var index = 0;
var score = 0;

function Timer() {
  interval = setInterval(function () {
    jsSec--;
    Sec.innerText = jsSec;

    if (jsSec <= 0) {
      jsSec = 16;

      checkAnswer(); 

      index++;
      if (index >= questions.length) {
        clearInterval(interval);
        sweetAlert();
      } else {
        showQuestion();
      }
    }
  }, 1000);
}

function startQuiz() {
  var container = document.querySelector(".container");
  container.classList.add("display");

  showQuestion(); 
  Timer();        
}

function showQuestion() {
  option1.innerText = questions[index].option1;
  option2.innerText = questions[index].option2;
  option3.innerText = questions[index].option3;
  quest1.innerText = questions[index].question;
  ques_num.innerText = questions[index].ques_no;
  Nextbtn.disabled = true;

  for (var i = 0; i < getInps.length; i++) {
    getInps[i].checked = false;
  }
}

function checkAnswer() {
  var selectedAns = "";
  for (var i = 0; i < getInps.length; i++) {
    if (getInps[i].checked) {
      selectedAns = document.getElementById("option" + (i + 1)).innerText;
    }
  }
  if (selectedAns == questions[index].correctOption) {
    score++;
  }
}

function sweetAlert() {
  var percentage = (score / questions.length) * 100;
  var status = percentage >= 70 ? "Passed 🎉" : "Failed ❌";

  Swal.fire({
    title: "Quiz Completed!",
    html: `
      <b>Score:</b> ${score} out of ${questions.length}<br>
      <b>Percentage:</b> ${percentage.toFixed(2)}%<br>
      <b>Status:</b> <span style="color:${percentage >= 70 ? 'green' : 'red'}">${status}</span>
    `,
    icon: percentage >= 70 ? "success" : "error",
    showCancelButton: true,
    confirmButtonText: "Restart Quiz",
    cancelButtonText: "Close",
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.isConfirmed) {
      location.reload();
    }
  });
}

function Next() {
  jsSec = 16;

  checkAnswer(); 

  index++;
  if (index >= questions.length) {
    clearInterval(interval);
    sweetAlert();
    return;
  }

  showQuestion(); 
}

function enableNext() {
  Nextbtn.disabled = false;
}
