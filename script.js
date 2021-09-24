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
        quest: "Commonly used data types do NOT include",
        answ: [
            {text: 'strings', correct: false},
            {text: 'boolean', correct: false},
            {text: 'numbers', correct: false},
            {text: 'alerts', correct: true}
        ]
    },

    {
        quest: "Arrays in JavaScript can be used to store...",
        answ: [
            {text: 'numbers and strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'all of the above', correct: true}
        ]
    },

    {
        quest: "Commonly used data types do NOT include",
        answ: [
            {text: 'strings', correct: false},
            {text: 'boolean', correct: false},
            {text: 'numbers', correct: false},
            {text: 'alerts', correct: true}
        ]
    },

    {
        quest: "Commonly used data types do NOT include",
        answ: [
            {text: 'strings', correct: false},
            {text: 'boolean', correct: false},
            {text: 'numbers', correct: false},
            {text: 'alerts', correct: true}
        ]
    },

    {
        quest: "Commonly used data types do NOT include",
        answ: [
            {text: 'strings', correct: false},
            {text: 'boolean', correct: false},
            {text: 'numbers', correct: false},
            {text: 'alerts', correct: true}
        ]
    }
]