//Create other arrays for more quiz topics
const javaScriptData = [
    {
        question: 'which language runs in a web browser?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'what does DOM stand for?',
        a: 'Document Object Model',
        b: 'Directory Opimization Management',
        c: 'Document Obtain Element',
        d: 'Decided Observing Modes',
        correct: 'a'
    }
]

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEls = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    //Edit Here to allow different types of quizzes
    const currentQuizData = javaScriptData[currentQuiz];

    questionEls.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === javaScriptData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < javaScriptData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${javaScriptData.length} questions correctly</h2>

                <button onClick='location.reload()'>Reload</button>
            `
        }
    }
})

