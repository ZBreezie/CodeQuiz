var startButton = document.getElementById('startButton')
var questionContent = document.getElementById('question-container')
var endScreen = document.getElementById('end')
var endScore = document.getElementById("scoreOutput")
var highscoreScreen = document.getElementById("highscores")


// // first index of question array
// var currentQuestion = 0

// // timer clock
// var sec = 15

// // Quiz taker score total
 //var score = 0

//get all answer buttons by class for answer choice comparison
var answerButton = document.getElementsByClassName('answerbtn')



// sets default variables for a new quiz run
function reset() {
    currentQuestion = 0
    sec = 60
    score = 0
    document.getElementById('scoreOutput').innerHTML = "Your score is " + score + " out of 5!"
    startQuiz()
  }





  // STARTS TIMER, HIDES START SCREEN, LOADS QNA
function startQuiz() {
    timer()
    console.log('Hello')
    document.getElementById('scoreTotal').innerHTML = "Your score is " + score + " out of 5!"
    endScreen.classList.add('hide')
    startButton.classList.add('hide')
    questionContent.classList.remove('hide')
    loadQnA()
}





// subtracts 1 from "sec" every 1000 milliseconds. When sec is less than zero, timer stop/switch to endscreen
function timer(){
    var timer = setInterval(function(){
        document.getElementById('timerDisplay').innerHTML='Time: 00:'+sec
        sec--
        // if timer is < 0 OR questions array has looped entirely clearInterval!
        if (sec < 0 || currentQuestion > 4) {
            clearInterval(timer)
            document.getElementById('scoreOutput').innerHTML = "Your score is " + score + " out of 5!"
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

    console.log(score)
    currentQuestion ++
    

    if (currentQuestion > 4) {
        questionContent.classList.add('hide')
        endScreen.classList.remove('hide')
    }

    
    else {
        loadQnA()
    }
    document.getElementById('scoreOutput').innerHTML = "Your score is " + score + " out of 5!"
    document.getElementById('scoreTotal').innerHTML = "Your score is " + score + " out of 5!"
}


function showScores() {
    
    highscoreScreen.classList.remove('hide')

    var initialsArray = JSON.parse(localStorage.getItem("initials"))
    var scoreArray = JSON.parse(localStorage.getItem("score"))
    
    for (let index = 0; index < initialsArray.length; index++) {  
        var tag = document.createElement("p");
        var text = document.createTextNode(initialsArray[index] + " - " + scoreArray[index]);
        tag.appendChild(text);
        var element = document.getElementById("highscores");
        element.appendChild(tag);
    }
}


function save() {
    
    var initials = window.prompt('Enter Your initials!');
    
    var initialsArray = JSON.parse(localStorage.getItem("initials"))
    var scoreArray = JSON.parse(localStorage.getItem("score"))
    
    initialsArray.push(initials)
    scoreArray.push(score)

    


    localStorage.setItem("initials", JSON.stringify(initialsArray))
    localStorage.setItem("score", JSON.stringify (scoreArray))
    
    
    
    // console.log(initials)
    // console.log(score)
    console.log(localStorage)
}




// Listens to the start button to execute "startQuiz" on click
$('#startButton').on('click', reset);

// Listens to the answer buttons to execute "checkAnswer" on click
$('.answerbtn').on('click', checkAnswer);

$('#retryButton').on('click', reset);

$('#saveScore').on('click', save);

$('#highbtn').one('click', showScores);
   






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