var startButton = document.getElementById('startButton')
var questionContent = document.getElementById('question-container')

var currentQuestion = 0
var sec = 2

//get all answer buttons by class for answer choice comparison
var answerButton = document.getElementsByClassName('answerbtn')




function startQuiz() {
    console.log('Hello')
    timer()
    startButton.classList.add('hide')
    questionContent.classList.remove('hide')
    loadQnA()
}

function timer(){
        
        var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='00:'+sec
        sec--
        if (sec < 0) {
            clearInterval(timer)
            questionContent.classList.add('hide')
        }
    }, 1000);
}

function loadQnA() {
    document.getElementById("question").innerHTML = questionsArray[currentQuestion].question

        for(var i=0; i < 4; i++) {
        answerButton [i].innerHTML = questionsArray[currentQuestion].choices[i]
    }
}

function checkAnswer(clientInput) {
    console.log(clientInput.currentTarget.value)
    var userAnswer = clientInput.currentTarget.value
    
    if (userAnswer == questionsArray[currentQuestion].correctAnswer){
        score ++
        console.log("Correct!")
    }
    console.log(score)
    currentQuestion ++

    if (currentQuestion > 4) {
        questionContent.classList.add('hide')
    }
    
    else {
        loadQnA()
    }
}

// Listens to the start button to execute "startQuiz" on click
$('#startButton').on('click', startQuiz);

// Listens to the answer buttons to execute "checkAnswer" on click
$('.answerbtn').on('click', checkAnswer);
   
// Quiz takers score total
var score = 0;

// Object which holds questions, answers, and the correct answer pointing to its index
var questionsArray = [
    {
        question: "Commonly used data types do NOT include _______",
        choices: ['strings', 'booleans', 'numbers', 'alerts'],
        correctAnswer: 3
    },

    {
        question: "Arrays in JavaScript can be used to store _______",
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correctAnswer: 3
    },

    {
        question: "The condition in an if/else statement is enclosed with _______",
        choices: ['quotes', 'curly brackets', 'parentheses', 'semicolons'],
        correctAnswer: 2
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is ______",
        choices: ['for loops', 'if/else statements', 'console.log', 'screwdriver'],
        correctAnswer: 2
    },

    {
        question: "String values must be enclosed within _______ before being assigned to variables",
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        correctAnswer: 2
    }
]

// end screen //output score
//store score in local
//timer //timer minus 10 seconds per incorrect input