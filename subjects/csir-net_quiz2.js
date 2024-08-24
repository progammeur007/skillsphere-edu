const questions = [
    {
        question: "../images/quiz/q3-1.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
    {
        question: "../images/quiz/q3-2.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "a"  // Correct answer
    },
    {
        question: "../images/quiz/q3-3.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b"  // Correct answer
    },
  
    {
        question: "../images/quiz/q3-5.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b"  // Correct answer
    },
    {
        question: "../images/quiz/q3-6.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
    {
        question: "../images/quiz/q3-7.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b"  // Correct answer
    },
    {
        question: "../images/quiz/q3-8.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
    {
        question: "../images/quiz/q3-9.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b"  // Correct answer
    },
    {
        question: "../images/quiz/q3-10.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b"  // Correct answer
    },
    {
        question: "../images/quiz/q3-11.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "c"  // Correct answer
    },
    {
        question: "../images/quiz/q3-12.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
    {
        question: "../images/quiz/q3-13.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "a"  // Correct answer
    },
    {
        question: "../images/quiz/q3-14.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
   
    {
        question: "../images/quiz/q3-15.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
    {
        question: "../images/quiz/q3-16.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },
   
    {
        question: "../images/quiz/q3-17.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "d"  // Correct answer
    },

    {
        question: "../images/quiz/q3-18.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "a"  // Correct answer
    },

    {
        question: "../images/quiz/q3-19.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "a"  // Correct answer
    },

    {
        question: "../images/quiz/q3-20.png",  // Image path for the question
        options: [  // Text options
            "a",
            "b",
            "c",
            "d"
        ],
        answer: "b"  // Correct answer
    },

  
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let timeLimit = 20 * 60; // Time limit in seconds
let timerInterval;

function loadQuestion() {
    const questionImage = document.getElementById('question-image');
    const optionsContainer = document.getElementById('options-container');
    const submissionReminder = document.getElementById('submissionReminder');

    // Set the question image
    if (questions[currentQuestionIndex].question) {
        questionImage.src = questions[currentQuestionIndex].question;
        questionImage.style.display = 'block';
    } else {
        questionImage.style.display = 'none';
    }

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Load options as text
    questions[currentQuestionIndex].options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option}" ${selectedAnswers[currentQuestionIndex] === option ? 'checked' : ''}>
            <label>${option}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });

    // Show submission reminder if on the last question
    if (currentQuestionIndex === questions.length - 1) {
        submissionReminder.style.display = 'block';
    } else {
        submissionReminder.style.display = 'none';
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function saveAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedAnswers[currentQuestionIndex] = selectedOption.value;
    }
}

function submitQuiz() {
    const userConfirmed = confirm("Do you really want to end the test?");
    if (userConfirmed) {
        saveAnswer();
        calculateScore();
        clearInterval(timerInterval); // Stop the timer
        showScoreModal();
    }
}

function calculateScore() {
    score = 0;
    questions.forEach((question, index) => {
        if (selectedAnswers[index] === question.answer) {
            score++;
        }
    });
}

function startTimer() {
    timerInterval = setInterval(function() {
        var minutes = Math.floor(timeLimit / 60);
        var seconds = timeLimit % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        document.getElementById("timer").innerText = "Time remaining: " + minutes + ":" + seconds;

        if (timeLimit <= 0) {
            clearInterval(timerInterval);
            showScoreModal(); // Automatically submit the quiz when time is up
        } else {
            timeLimit--;
        }
    }, 1000);
}

function showScoreModal() {
    const modal = document.getElementById("scoreModal");
    const span = document.getElementsByClassName("close")[0];
    const finalScore = document.getElementById("finalScore");
    const resultsContainer = document.getElementById("results");

    if (finalScore && resultsContainer) {
        finalScore.innerText = "Your final score is: " + score + "/" + questions.length;

        // Generate report
        let resultsHTML = "";
        questions.forEach((question, index) => {
            const userAnswer = selectedAnswers[index];
            const isCorrect = userAnswer === question.answer;
            resultsHTML += `
                <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                    <p><strong>Question:</strong> <img src="${question.question}" alt="Question Image" style="max-width: 100px;"></p>
                    <p><strong>Your Answer:</strong> ${userAnswer || 'Not answered'}</p>
                    <p><strong>Correct Answer:</strong> <span class="correct-answer">${question.answer}</span></p>
                </div>
            `;
        });
        resultsContainer.innerHTML = resultsHTML;

        modal.style.display = "block";

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("One or more elements are missing in the DOM.");
    }
}

window.onload = function() {
    loadQuestion();
    startTimer(); // Start the timer when the page loads
}
