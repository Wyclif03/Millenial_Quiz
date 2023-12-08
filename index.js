import { questions, results } from './data.js';
// ********VARIABLES***********
// VARIABLES FOR QUESTION TEXT AND #
const questionNumber = document.getElementById('questionNumber')
const questionText = document.getElementById('questionText')
const quizContainer = document.getElementById('quizContainer')
const introText = document.getElementById('introText')
const textResults = document.getElementById('textResults')
// VARIABLES FOR ANSWER TEXT
const answerA = document.getElementById('answerA')
const answerB = document.getElementById('answerB')
const answerC = document.getElementById('answerC')
// VARIABLE FOR NEXT BUTTON
const nextButton = document.getElementById('nextButton');
const startButton = document.getElementById('startButton')
// VARIABLES FOR CLICKABLE BUTTONS
const buttonA = document.getElementById("buttonA");
const buttonB = document.getElementById("buttonB");
const buttonC = document.getElementById("buttonC")
// COUNTER VARIABLES ITERATING OVER QUESTION #
let questionCounter = 1
// COUNTER VARIABLES FOR TRACKING SCORE (OF A,B,C ETC)
let answerCounter = [0, 0, 0]
// STRING RESULT
let millenialResults = ""
//VARIABLE FOR 'PLEASE SELECT ANSWER'
const selectAnswer = document.getElementById("select-answer")


// *********FUNCTIONS***********

// START BUTTON - MAKES QUESTIONS VISIBLE
startButton.addEventListener('click', () => {
    quizContainer.classList.toggle('invisible')
    introText.classList.toggle('invisible')
    startButton.classList.toggle('invisible')
    questionNumber.innerText = `${1}`
    questionText.innerText = questions[0].text
    answerA.innerText = questions[0].answers[0].text
    answerB.innerText = questions[0].answers[1].text
    answerC.innerText = questions[0].answers[2].text  
})

// RENDERS QUESTION TEXT FROM DATA.JS
const renderQuestion = (questionArr) => {
    questionNumber.innerText = `${questionCounter + 1 }`
    questionText.innerText = questionArr[questionCounter].text
    answerA.innerText = questionArr[questionCounter].answers[0].text
    answerB.innerText = questionArr[questionCounter].answers[1].text
    answerC.innerText = questionArr[questionCounter].answers[2].text    
}

// ADDS TO ABC COUNTERS WHEN BUTTONS CLICKED - KEEPS SCORE
//SHOWS NEXT BUTTON
buttonA.addEventListener('click', () => {
    answerCounter[0] ++;
    nextButton.classList.toggle('invisible')
    return answerCounter
})

buttonB.addEventListener('click', () => {
    answerCounter[1] ++;
    nextButton.classList.toggle('invisible')
    return answerCounter
})

buttonC.addEventListener('click', () => {
    answerCounter[2] ++;
    nextButton.classList.toggle('invisible')
    return answerCounter
})

// DEFINES TEXT BASED RESULT - WHETHER MOST A B C RESULTS
const typeOfMillenial = (answers, results) => {
    let mostAnswers = answers.indexOf(Math.max(...answers))
    millenialResults = results[mostAnswers]
    return millenialResults
}

//SHOWS NEXT BUTTON IF RADAR CHECKED

// RENDERS + ITERATES OVER QUESTION TEXT
nextButton.addEventListener('click', () => {    
    if (questionCounter < questions.length) {
        renderQuestion(questions)
        questionCounter++;
        // MAKES NEXT BUTTON INVISIBLE
        nextButton.classList.toggle('invisible')
        // UNCHECKS RADIO BUTTONS BETWEEN QUESTIONS
        buttonA.checked = false;
        buttonB.checked = false;
        buttonC.checked = false;
        
    }
    else
    {
    // RENDERS TEXT BASED RESULTS
        typeOfMillenial(answerCounter, results)
        quizContainer.classList.toggle('invisible')
        textResults.innerText = millenialResults
        
    }
})
