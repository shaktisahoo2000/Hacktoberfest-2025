const quizQuestions = [
    {
        question: "What is the capital of France?",

        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",

        correctAnswer: "c",
    },

    {
        question: "Which planet is known as the Red Planet?",

        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",

        correctAnswer: "b",
    },
    {
        question: "What is the largest ocean on Earth?",

        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",

        correctAnswer: "d",
    },
    {
        question: "Who wrote 'Hamlet'?",

        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Jane Austen",
        d: "Mark Twain",

        correctAnswer: "b"
    },
  
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.correctAnswer')
const questionEL = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitbtn = document.getElementById('submit')

let currentquiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectanswer()
    const currentquizdata = quizQuestions[currentquiz]
    questionEL.innerText = currentquizdata.question
    a_text.innerText = currentquizdata.a
    b_text.innerText = currentquizdata.b
    c_text.innerText = currentquizdata.c
    d_text.innerText = currentquizdata.d
}

function deselectanswer() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer

}


submitbtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer==quizQuestions[currentquiz].correctAnswer){
        score++
    }
    currentquiz++

    if(currentquiz<quizQuestions.length){
        loadQuiz()
    }
    else{
        quiz.innerHTML=`<h2>you answered correctly at ${score}
        /${quizQuestions.length} questions</h2>
           <button onclick="location.reload()
          "  >Reload</button>`
     
    }
})





