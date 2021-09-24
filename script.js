var startButton = document.getElementById('startButton')
var questionContent = document.getElementById('question-container')



function startQuiz() {
    console.log('Hello')
    startButton.classList.add('hide')
    questionContent.classList.remove('hide')
    loadNextQ()
}

function loadNextQ() {

}

function selectAnswer() {

}

startButton.addEventListener('click', startQuiz)

var questionsList = [
    {
        question: "Commonly used data types do NOT include",
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false},
            {text: 'numbers', correct: false},
            {text: 'alerts', correct: true}
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store _______",
        answers: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
        ]
    },

    {
        question: "The condition in an if/else statement is enclosed with _______",
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parentheses', correct: true},
            {text: 'semicolons', correct: false}
        ]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ______",
        answers: [
            {text: 'for loops', correct: false},
            {text: 'if/else statements', correct: false},
            {text: 'console.log', correct: true},
            {text: 'screwdriver', correct: false}
        ]
    },

    {
        question: "String values must be enclosed within _______ before being assigned to variables",
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parentheses', correct: false}
        ]
    }
]