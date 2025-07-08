let jsSec = 15;
let Min = document.querySelector("#min");
let Sec = document.querySelector("#sec");
let interval;

let index = 0;
let score = 0;
let quesNo = document.querySelector("#Ques_no");
let question = document.querySelector("#Ques");
let option1 = document.querySelector("#option1");
let option2 = document.querySelector("#option2");
let option3 = document.querySelector("#option3");
let Nextbtn = document.querySelector("#btn");
let getInps = document.getElementsByTagName("input");
let questionsData = [];

function Timer() {
    clearInterval(interval);
    jsSec = 15;
    Sec.innerText = jsSec;
    
    interval = setInterval(function() {
        jsSec--;
        Sec.innerText = jsSec;

        if (jsSec <= 0) {
            clearInterval(interval);
            autoNextQuestion(); 
        }
    }, 1000);
}

function autoNextQuestion() {
    let selectedOption = null;
    for (let i = 0; i < getInps.length; i++) {
        if (getInps[i].checked) {
            selectedOption = getInps[i].parentElement.querySelector("label");
            if (selectedOption.getAttribute("data-correct") === "true") {
                score++;
            }
        }
    }
    
    index++;
    if (index < 10 && index < questionsData.length) {
        showQuestion();
        Timer();
    } else {
        sweetAlert();
    }
}

function startQuiz() {
    var container = document.querySelector(".container");
    container.classList.add("display");
    fetchQuestions();
}

function fetchQuestions() {
    fetch('https://the-trivia-api.com/v2/questions')
        .then(data => data.json())
        .then((data) => {
            questionsData = data;
            showQuestion();
            Timer();
        });
}

let showQuestion = () => {
    if (index >= questionsData.length) {
        sweetAlert();
        return;
    }

    // Reset timer and styles
    clearInterval(interval);
    Timer();
    
    option1.parentElement.style.backgroundColor = "";
    option1.parentElement.style.color = "";
    option2.parentElement.style.backgroundColor = "";
    option2.parentElement.style.color = "";
    option3.parentElement.style.backgroundColor = "";
    option3.parentElement.style.color = "";

    Nextbtn.disabled = true;
    Nextbtn.style.backgroundColor = "gray";
    quesNo.innerHTML = `Question No: ${index + 1}`;
    question.innerHTML = `${questionsData[index].question.text}`;
    
    let options = [
        questionsData[index].correctAnswer,
        ...questionsData[index].incorrectAnswers
    ].sort(() => Math.random() - 0.5);

    option1.innerHTML = options[0];
    option2.innerHTML = options[1];
    option3.innerHTML = options[2] || '';
    
    option1.setAttribute("data-correct", options[0] === questionsData[index].correctAnswer);
    option2.setAttribute("data-correct", options[1] === questionsData[index].correctAnswer);
    option3.setAttribute("data-correct", options[2] === questionsData[index].correctAnswer);
    
    option1.setAttribute("onclick", "selectOption(this)");
    option2.setAttribute("onclick", "selectOption(this)");
    option3.setAttribute("onclick", "selectOption(this)");
    
    for (let i = 0; i < getInps.length; i++) {
        getInps[i].checked = false;
    }
}

function selectOption() {
    clearInterval(interval);

    enableNext();
}

let enableNext = () => {
    Nextbtn.disabled = false;
    Nextbtn.style.backgroundColor = "orange";
    Nextbtn.style.color = "white";
    Nextbtn.setAttribute("onclick", "Next()");
}

let Next = () => {
    let selectedOption = null;
    for (let i = 0; i < getInps.length; i++) {
        if (getInps[i].checked) {
            selectedOption = getInps[i].parentElement.querySelector("label");
            if (selectedOption.getAttribute("data-correct") === "true") {
                score++;
            }
        }
    }
    
    index++;
    if (index < 10 && index < questionsData.length) {
        showQuestion();
    } else {
        sweetAlert();
    }
}

let sweetAlert = () => {
    clearInterval(interval); 
    var percentage = (score / 10) * 100;
    var status = percentage >= 70 ? "Passed 🎉" : "Failed ❌";

    Swal.fire({
        title: `Your Score: ${score} out of 10`,
        text: `You ${status}`,
        icon: percentage >= 70 ? 'success' : 'error',
        confirmButtonText: 'OK',
        customClass: {
            confirmButton: 'btn btn-primary'
        }
    }).then(() => {
        location.reload();
    });
}