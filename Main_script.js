const questions=[
  {
    question: "Who developed Python Programming Language?",
    answers:[
      {text:"Wick van Rossum", correct:false},
      {text:"Rasmus Lerdorf", correct:false},
      {text:"Guido van Rossum", correct:true},
      {text:"Niene Stom", correct:false},
    ]
  },

  {
    question: "Which type of Programming does Python support?",
    answers:[
      {text:"object-oriented programming", correct:false},
      {text:"structured programming", correct:false},
      {text:"functional programming", correct:false},
      {text:"all of the mentioned", correct:true},
    ]
  },

  {
    question: "Is Python case sensitive when dealing with identifiers?",
    answers:[
      {text:"No", correct:false},
      {text:"Yes", correct:true},
      {text:"machine dependent", correct:false},
      {text:"none of the mentioned", correct:false},
    ]
  },

  {
    question: " Which of the following is the correct extension of the Python file?",
    answers:[
      {text:".python", correct:false},
      {text:".pl", correct:false},
      {text:".py", correct:true},
      {text:".p", correct:false},
    ]
  },
  {
    question: " Is Python code compiled or interpreted?",
    answers:[
      {text:"Python code is both compiled and interpreted", correct:true},
      {text:"Python code is neither compiled nor interpreted", correct:false},
      {text:"Python code is only compiled", correct:false},
      {text:"Python code is only interpreted", correct:false},
    ]
  },
  {
    question: "All keywords in Python are in _________",
    answers:[
      {text:"Capitalized", correct:false},
      {text:"lower case", correct:false},
      {text:"UPPER CASE", correct:false},
      {text:"None of the mentioned", correct:true},
    ]
  },
  {
    question: "Which of the following is used to define a block of code in Python language?",
    answers:[
      {text:" Indentation", correct:true},
      {text:"Key", correct:false},
      {text:"Brackets", correct:false},
      {text:"All of the mentioned", correct:false},
    ]
  },
  {
    question: "Which keyword is used for function in Python language?",
    answers:[
      {text:" Function", correct:true},
      {text:"def", correct:false},
      {text:"Fun", correct:false},
      {text:"d", correct:false},
    ]
  },
]

const questionElement = document.getElementById("Question");
const answerButton = document.getElementById("Answer-Button");
const nextButton = document.getElementById("nbuton");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextButton.innerHTML='Next';
  showQuestion();
}

function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("button1");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = 'none';
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct ==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score ++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
Array.from(answerButton.children).forEach(button => {
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  }
  button.disabled =true;
});
nextButton.style.display = 'block';
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display="block";
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
} )

startQuiz();