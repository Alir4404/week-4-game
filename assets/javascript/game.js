$(document).ready(function() {

//Random Number Selection
    var minNumber = 19;
    var maxNumber = 120;

    var randomNumber = guessNum(minNumber, maxNumber);

    function guessNum(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    console.log(randomNumber);
    
    document.getElementById("guess-number").innerHTML = randomNumber;
  
// Crystal Count Stats
    var crystal1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    var scoreCount = 0; 
    var winCount = 0;
    var lossCount = 0;

    $('#win-counter').text(winCount);
    $('#loss-counter').text(lossCount);

    function reset(){
        randomNumber =Math.floor(Math.random()*101+19);

        console.log(randomNumber)
        $('#guess-number').text(randomNumber);

        crystal1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        scoreCount= 0;

        $('#score-counter').text(scoreCount);
    } 

    function win(){
        alert("You got a Crystal, luck you!");
            winCount ++; 

        $('#win-counter').text(winCount);
            reset();
    }

    function loss(){
        alert ("No Crystal for you!");
            lossCount++;
        $('#loss-counter').text(lossCount);
            reset()
    }

    $('#blue').on ('click', function(){
        scoreCount = scoreCount + crystal1;
        
        console.log("New userTotal= " + scoreCount);
        $('#score-counter').text(scoreCount); 
            if (scoreCount == randomNumber){
                win();
            }
            else if ( scoreCount > randomNumber){
                loss();
            }   
    })  

    $('#purple').on ('click', function(){
        scoreCount = scoreCount + num2;

        console.log("New userTotal= " + scoreCount);
        $('#score-counter').text(scoreCount); 
            if (scoreCount == randomNumber){
                win();
            }
            else if ( scoreCount > randomNumber){
                loss();
            } 
    })

    $('#green').on ('click', function(){
        scoreCount = scoreCount + num3;

        console.log("New userTotal= " + scoreCount);
        $('#score-counter').text(scoreCount);
            if (scoreCount == randomNumber){
                win();
          }
          else if ( scoreCount > randomNumber){
            loss();
          } 
    })

    $('#yellow').on ('click', function(){
        scoreCount = scoreCount + num4;

        console.log("New userTotal= " + scoreCount);
        $('#score-counter').text(scoreCount); 
            if (scoreCount == randomNumber){
                win();
          }
          else if ( scoreCount > randomNumber){
            loss();
          } 
    });

//fade hover animation
    $("#blue").hover(function() {
        $("#blue").stop().fadeOut();
        },

        function() {
        $("#blue").stop().fadeIn();
    });

    $("#purple").hover(function() {
        $("#purple").stop().fadeOut();
        },

        function() {
        $("#purple").stop().fadeIn();
    });

    $("#green").hover(function() {
        $("#green").stop().fadeOut();
        },

        function() {
        $("#green").stop().fadeIn();
    });

    $("#yellow").hover(function() {
        $("#yellow").stop().fadeOut();
        },

        function() {
        $("#yellow").stop().fadeIn();
    });

});


