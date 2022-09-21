var nextBtn = document.querySelector('button');
var h3El = document.querySelector('h3');


var index = 0

var questionList = [
    {
        question:   "Comm",
        correct: 
        choices: [1,2,3,4]
    },
    {
        question:
        correct:
        choices: [1,2,3,4]
    },
    {
        question:
        correct:
        choices: [1,2,3,4]
    },
    {
        question:
        correct:
        choices: [1,2,3,4]
    }
]


function renderQuestion(){
    h3El.innerText = questionList[index].question;
    choice.innerHTML = "";
    for (var i = 0; i < question[index].length; i++){
        var li = document.createElement('li')
        li.innerText = question.choices[i];
        btn.appendChild(li);
    }
}

nextBtn.addEventListener('click', function(){
    index ++
    renderQuestion()
})


// GIVEN I am taking a code quiz
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