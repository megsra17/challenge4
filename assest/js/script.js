var nextBtn = document.querySelector('button');
var h3El = document.querySelector('h3');
var pEl = document.querySelector('.body');
var section = document.getElementById('section');
var time = document.querySelector('.time');

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


function renderQuestion(){
    h3El.innerText = questionList[index].question;
    //choices.innerHTML = " ";
    console.log(questionList[index].choices)
    for (var i = 0; i < questionList[index].choices; i++){   
        var li = document.createElement('li');
        li.innerText = questionList[index].choices[i];
        li.appendChild(li);
    }
}

function GameOver(){
    clearInterval(countDown);
        h3El.innerText = ("Game Over");
        pEl.innerText = ('Your Score was: ');
}

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
    //section.removeChild(pEl)
   // section.removeChild(nextBtn)
    index ++
    startCountDown()
    renderQuestion()
    
    

})


// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score