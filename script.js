var startButton = document.getElementById('startButton')
var questionContent = document.getElementById('question-container')
var currentQuestion = 0

//get all answer buttons by class for answer choice comparison
var answerButton = document.getElementsByClassName('answerbtn')


function startQuiz() {
    console.log('Hello')
    console.log(startButton.value)
    startButton.classList.add('hide')
    questionContent.classList.remove('hide')
    loadAnswers()

}

function loadAnswers() {
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
        console.log("correctAnswer")
    }
    console.log(score)
    currentQuestion ++

    if (currentQuestion > 4) {
        questionContent.classList.add('hide')
    }
    
    else {
        loadAnswers()
    }
    

}

$('#startButton').on('click', startQuiz); {

   
};


$('.answerbtn').on('click', checkAnswer); {
   
};



var score = 0;

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

// end screen
//timer
//output score
//store score in local
//