var nextBtn = document.querySelector('button');
var h3El = document.querySelector('h3');
var pEl = document.querySelector('.body');
var section = document.getElementById('section');
var header = document.querySelector('#header');
var time = document.querySelector('.time');
var ulEL = document.querySelector('ul')

var score = 0
//Count Down Variables
var countDown
var timeLeft = 75
var index = -1;

var questionList = [
    {
        question:   "Commonly used data types DO Not Include:",
        correct: 'alerts',
        choices: ['strings','booleans','alerts','numbers']
    },
    {
        question: "The condition in an if / else statement is enclosed with _____.",
        correct:  'parenthesis',
        choices: ['quotes','curly brackets','parenthesis','square brackets']
    },
    {
        question: "Arrays in Javascript can be used to store _______",
        correct: 'all of the above',
        choices: ['number and strings','other arrays','boolans','all of the above']
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        correct: 'quotes',
        choices: ['commas','curly brackets','quotes','paraenthesis']
    }
]

//renders the new questions
function renderQuestion(){
    var currentQuestion = questionList[index].question;
    h3El.innerText = currentQuestion
    ulEL.innerHTML = " ";
    for (var i = 0; i < questionList[index].choices.length; i++){ 
        var li = document.createElement('button');
        li.addEventListener('click', guessedAnswer)
        li.innerText = questionList[index].choices[i];
        console.log(li.innerText = questionList[index].choices[i])
        ulEL.appendChild(li);
    }
}

//answers
function guessedAnswer(event){   
    
    //checks anwser
     if ( event.target.innerText === questionList[index].correct){
        score++
    } else{
        timeLeft -= 10;
        time.textContent = timeLeft;
    }
    index++

    //if no questions left
     if(!questionList[index]){
        score = timeLeft;
        GameOver()
    }else{
        renderQuestion()
    }
    
   
}
//game over screen
function GameOver(){
    clearInterval(countDown);
    section.removeChild(ulEL);
        h3El.innerText = ("Game Over");
        section.appendChild(pEl)
        pEl.innerText = ('Your Score was: ' + score);
        var form = document.createElement('form');
        var input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'initials')
        input.setAttribute('placeholder', 'Enter Your Intials');
        var submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Submit');
        form.appendChild(input);
        form.appendChild(submit);
        section.appendChild(form);
        
        
        submit.addEventListener('click', function(event){
            event.preventDefault();
            form.setAttribute("style", "display:none;")
            header.setAttribute("style", "display: none;");
            h3El.innerText = ("High Scores");
            var inputInitials = document.getElementById('initials')
            localStorage.setItem("initials", inputInitials.value);
            localStorage.setItem("score", score)
            var finalScore = localStorage.getItem('score')
            var highScore = localStorage.getItem("initials");
            pEl.innerText = ("High Score: " + highScore + " " + finalScore);
            var restartButton = document.createElement('button');
            var clearButton = document.createElement('button');
            section.appendChild(restartButton);
            section.appendChild(clearButton);
            restartButton.textContent = ("Restart");
            clearButton.textContent = ('Clear High Score');

            restartButton.addEventListener('click', function(){
                location.reload();
            })

            clearButton.addEventListener('click', function(){
              localStorage.clear();  
            })
        })
}

//starts timer
function startCountDown(){
    clearInterval(countDown)
    countDown =  setInterval(function() {
        timeLeft --
        time.textContent = timeLeft
        if (timeLeft === 0){
            clearInterval(countDown);
            GameOver();
        }
    }, 1000);
}



nextBtn.addEventListener('click', function(){
    section.removeChild(pEl)
   section.removeChild(nextBtn)
    index ++
    renderQuestion()
    startCountDown()
    
})

// WHEN the game is over
// THEN I can save my initials and score