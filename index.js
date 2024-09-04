const questions = [
   { question: "Which planet is known as the Red Planet?",
   answers: [
    {text: "Venus", correct: false},
    {text: "Mars", correct: true},
    {text: "Jupiter", correct: false},
    {text: "Neptune", correct: false}
   ]

   },

   { question: "What is the world's largest ocean?",
   answers: [
    {text: "Atlantic Ocean", correct: false},
    {text: "Indian Ocean", correct: false},
    {text: "Pacific Ocean", correct: true},
    {text: "Southern Ocean", correct: false}
   ]

   },


   { question: "What is the hottest planet in the solar system?",
   answers: [
    {text: "Venus", correct: true},
    {text: "Mars", correct: false},
    {text: "Jupiter", correct: false},
    {text: "Neptune", correct: false}
   ]

   },


   { question: "What is the fastest land animal?",
   answers: [
    {text: "Ostrich", correct: false},
    {text: "Lion", correct: false},
    {text: "Tiger", correct: false},
    {text: "Cheetah", correct: true}
   ]

   },


   { question: "What is the largest country in the world by area?",
   answers: [
    {text: "Canada", correct: false},
    {text: "Russia", correct: true},
    {text: "United States", correct: false},
    {text: "Australia", correct: false}
   ]

   }

   
];

const questionElement = document.getElementById("questions");
const ansbuttonsElement = document.getElementById("ans-buttons");
const nextbtnElement = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextbtnElement.innerHTML= "Next";
    showQuestion();

}

function showQuestion() {
    resetState();
    let currentQuestion = questions [currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML= questionNo+ "."+ currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
    button.classList.add("btn");
    ansbuttonsElement.appendChild(button);
    if (answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    });
    
}

function resetState(){
    nextbtnElement.style.display = "none";
    while (ansbuttonsElement.firstChild){
        ansbuttonsElement.removeChild (ansbuttonsElement.firstChild)
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add ("correct");
        score++;

    }
    else {
        selectedBtn.classList.add ("incorrect");

    }

    Array.from(ansbuttonsElement.children).forEach (button => {
        if (button.dataset.correct === "true") {
            button.classList.add ("correct");

        }
        button.disabled = true;
    });
    nextbtnElement.style.display = "block";

}

function showScore (){
resetState ();
questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
nextbtnElement.innerHTML = "Play Again"
nextbtnElement.style.display = "block";

}
function handlenextbtnElement(){
    currentQuestionIndex++;
    if ( currentQuestionIndex < questions.length) {
        showQuestion ();

    }
    else {
        showScore();
    }
}

nextbtnElement.addEventListener ("click", () => {
    if (currentQuestionIndex < questions.length){
        handlenextbtnElement ();
    }
    else {
        startQuiz();
    }
});
startQuiz();