const questions = [
    {
        question: "What is 2 + 2?",
        options: ["4", "5", "3", "6"],
        answer: "4"
    },
    {
        question: "What color is the sky?",
        options: ["Blue", "Green", "Red", "Yellow"],
        answer: "Blue"
    },
    {
        question: "How many legs does a cat have?",
        options: ["4", "2", "6", "8"],
        answer: "4"
    },
    {
        question: "What is 5 - 2?",
        options: ["3", "4", "2", "7"],
        answer: "3"
    },
    {
        question: "Which animal says meow?",
        options: ["Cat", "Dog", "Cow", "Bird"],
        answer: "Cat"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("next-btn");
const optionButtons = document.getElementsByClassName("option");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionEl.innerText = q.question;
    
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].innerText = q.options[i];
        optionButtons[i].className = "option";
        optionButtons[i].disabled = false;
        optionButtons[i].onclick = function() {
            checkAnswer(this, q.options[i], q.answer);
        };
    }
    
    messageEl.innerText = "";
    messageEl.className = "";
    nextBtn.classList.add("hidden");
}

function checkAnswer(button, selected, correct) {
    for (let i = 0; i < optionButtons.length; i++) {
        optionButtons[i].disabled = true;
    }
    
    if (selected === correct) {
        button.classList.add("correct");
        messageEl.innerText = "Correct! 🎉";
        messageEl.className = "correct";
        score++;
    } else {
        button.classList.add("wrong");
        messageEl.innerText = "Incorrect! The answer is " + correct;
        messageEl.className = "wrong";
        
        for (let i = 0; i < optionButtons.length; i++) {
            if (optionButtons[i].innerText === correct) {
                optionButtons[i].classList.add("correct");
            }
        }
    }
    
    nextBtn.classList.remove("hidden");
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Complete!";
        messageEl.innerText = "Your score: " + score + " out of " + questions.length;
        messageEl.className = "correct";
        
        for (let i = 0; i < optionButtons.length; i++) {
            optionButtons[i].style.display = "none";
        }
        nextBtn.style.display = "none";
    }
}

loadQuestion();