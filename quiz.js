console.log("quiz.js loaded");
const question = document.getElementById("question");
const choices =Array.from(document.getElementsByClassName("choice-text"));
var startBtn = document.querySelector("#start-btn");
var instructionEl = document.querySelector("#instructions-container");
var questionContEl = document.querySelector("#question-container");
var resultsEl = document.querySelector("#results");
var scoreEl = document.querySelector("#score");
var questionEl = document.querySelector("#question");
var choice1El = document.querySelector("#choice1");
var choice2El = document.querySelector("#choice2");
var choice3El = document.querySelector("#choice3");
var choice4El = document.querySelector("#choice4");


var timeEl = document.querySelector("#time");

var time = 75;
var timerID;

var currentQuestionIndex = 0;
let acceptingAnswer =0;
let score = 0;
let questionCounter= 0;
let availableQuestions=[];









function displayQuestion(){

    var currentQuestion = questions[currentQuestionIndex];

    questionEl.innerHTML = currentQuestion.title;
    choice1El.innerHTML = currentQuestion.choices[0]
    choice2El.innerHTML = currentQuestion.choices[1]
    choice3El.innerHTML = currentQuestion.choices[2]
    choice4El.innerHTML = currentQuestion.choices[3]
}



function endQuiz(){

// stop timer
clearInterval(timerID);

    // show results
questionContEl.classList.toggle("hide");
scoreEl.innerHTML = time;
resultsEl.classList.toggle("hide");

}


// start timer
function runTimer() {

    timerID = setInterval(function () {

        time--;
        timeEl.innerHTML = time;

        if (time <= 0) {
            console.log("end quiz")
            endQuiz();
        }

    }, 1000);

}





startBtn.addEventListener("click", function () {
    // 1 hide instruction and show question container

    instructionEl.classList.toggle("hide");
    questionContEl.classList.toggle("hide");
    displayQuestion();

    // 2 start timer
    runTimer();
})



questionContEl.addEventListener("click", function(event){


    // Event Delegations
    // If what we are clicking on is a .choice
    if(event.target.classList.contains("choice")){

        var userChoice = event.target.innerHTML;
        var answer = questions[currentQuestionIndex].answer;
      

        if(userChoice == answer){
            console.log("correct");
            
        }
        else{
            time -= 15;
            timeEl.innerHTML = time;
        }

        currentQuestionIndex++;
    
        if(currentQuestionIndex > questions.length -1){
            endQuiz()
        }
        else{
            displayQuestion();
        }

    }


})

// var time = 5;

// function doSomething (){
//     console.log(time);
//     time--;


//     if(time < 0){
//         console.log("DONE")
//         clearInterval(timerID)
//     }
// }


// var timerID = setInterval(doSomething, 1000)


