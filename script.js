var startButton = document.getElementById('startButton')
var questionContent = document.getElementById('question-container')
var endScreen = document.getElementById('end')
var endScore = document.getElementById("scoreOutput")

// first index of question array
var currentQuestion = 0

// timer clock
var sec = 15

// Quiz taker score total
var score = 0

//get all answer buttons by class for answer choice comparison
var answerButton = document.getElementsByClassName('answerbtn')





// STARTS TIMER, HIDES START SCREEN, LOADS QNA
function startQuiz() {
    timer()
    console.log('Hello')
    startButton.classList.add('hide')
    questionContent.classList.remove('hide')
    loadQnA()
}






function timer(){
        
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='Time: 00:'+sec
        sec--
        if (sec < 0) {
            clearInterval(timer)
            questionContent.classList.add('hide')
            endScreen.classList.remove('hide')
        }
    }, 1000);
}








// DISPLAYS CURRENT POSITION IN QUESTION ARRAY
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

    if (userAnswer != questionsArray[currentQuestion].correctAnswer){
        sec -= 10;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
        console.log("Incorrect!")
    }
    
    document.getElementById("scoreOutput").innerHTML = "Your score is " + score + " out of 5!";
    console.log(score)
    currentQuestion ++

    if (currentQuestion > 4) {
        questionContent.classList.add('hide')
        endScreen.classList.remove('hide')
    }
    
    else {
        loadQnA()
    }
}














// Listens to the start button to execute "startQuiz" on click
$('#startButton').on('click', timer, startQuiz);

// Listens to the answer buttons to execute "checkAnswer" on click
$('.answerbtn').on('click', checkAnswer);
   

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

//store score in local