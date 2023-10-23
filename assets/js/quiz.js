const questions = [
    {
        question: "How many months do I think there should be in 1 year?",
        answers: [
            {text: "11", correct: false},
            {text: "12", correct: false},
            {text: "13", correct: true},
            {text: "14", correct: false},
        ]
    },
    {
    question: "How many islands does Sweden have?",
        answers: [
            {text: "162,486", correct: false},
            {text: "267,570", correct: true},
            {text: "18", correct: false},
            {text: "211,380", correct: false},
        ]
    },
    {
        question: "How many legs does Odin's horse 'Sleipnir' have?",
        answers: [
            {text: "2", correct: false},
            {text: "4", correct: false},
            {text: "6", correct: false},
            {text: "8", correct: true},
        ]
    },
    {
        question: "Who is the author of the popular Japanese manga One Piece?",
        answers: [
            {text: "Eiichiro Oda", correct: true},
            {text: "Akira Toriyama", correct: false},
            {text: "Masashi Kishimoto", correct: false},
            {text: "Noriaki Kubo", correct: false},
        ]
    },
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Blue whale", correct: true},
            {text: "giraffe", correct: false},
            {text: "A large dog", correct: false},
        ]
    }

];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    })
    nextButton.style.display = "block";

}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Got ${score} out of ${questions.length} Right!`;
    nextButton.innerHTML = "Play Again.";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();