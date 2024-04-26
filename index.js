const questions=[
    {
        question:"What does CSS stands for?",
        answers:[
             {text:"creative style sheets", correct: false },
             {text:"cascading style sheet",correct:true },
             {text:"clourful style sheet",correct:false },
             {text:"computer style sheet",correct:false },
        ]
    },
    {
        question:"What does CSS stands for?",
        answers:[
            {text:"cascading style sheet",correct:true },
             {text:"creative style sheets", correct: false },
             {text:"clourful style sheet",correct:false },
             {text:"computer style sheet",correct:false },
        ]  
    },
    {question:"What does CSS stands for?",
        answers:[
             {text:"creative style sheets", correct: false },
             {text:"clourful style sheet",correct:false },
             {text:"computer style sheet",correct:false },
             {text:"cascading style sheet",correct:true },
        ]
    }
];
const questionElement=document.getElementById("question");
const answerButton=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");
let currentQuestionIndex=0;
let score=0;
function startquiz(){
    currentQuestionIndex=0; 
    score=0;
    nextButton.innerHTML="Next"; 
    showQuestion();
}