console.log("score.js loaded")


// get saved scores from loacalStoarge and display in hightscores.html
/ Answer checking
  function checkAnswer(answer){
    if( answer.value === questions[runningQuestion].correct){
        score++;
        setTimeout(()=>{
          $(".correct").show();
          $(".line").show();
        setTimeout(()=>{
          $(".correct").hide();
          $(".line").hide();
      },550)
    },0)
    }else{      
        var sec =  $('#timer')[0].textContent;
        changeInterval(sec.split(':')[1]); 
        setTimeout(()=>{
          $(".wrong").show();
          $(".line").show();
        setTimeout(()=>{
          $(".wrong").hide();
          $(".line").hide();
      },550)
    },0)     
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        provideQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}
function scoreRender(){  
  // calculate the amount of question percent answered by the user
  scorePerCent = Math.round(100 * score/questions.length);
  $(".quizComplete").show();
  $("#quizQuestions").hide();
  $("#button1").hide();
  $("#button2").hide();
  $("#button3").hide();
  $("#button4").hide();
  $("#submit").show();
 $('#final').text('Your final score is ' + scorePerCent + ' %');
  clearInterval(interval); 
  
}
