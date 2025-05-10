const questionData = [
	{
	  question:"1. อัลกอริทึมคืออะไร?",
      a:"ลักษณะข้อมูลแบบพอยน์เตอร์",
      b:"ขั้นตอนการทำงานและการแก้ปัญหาอย่างมีขั้นตอน",
      c:"การสร้างฐานข้อมูลเพื่อการใช้งานเฉพาะด้าน",
      d:"กระบวนการทำงานของคอมพิวเตอร์",
      correct:"b"
	},
    {
        question:"2. โปรแกรมเมอร์คนแรกของโลกมีชื่อว่าอะไร?",
        a:"Ada Lovelace",
        b:"9arm",
        c:"Charles Babbage",
        d:"John McCarthy",
        correct:"a"
    },
    {
        question:"3. ChatGPT ได้รับการพัฒนามากจากบริษัทใด?",
        a:"Microsoft",
        b:"Meta",
        c:"NVIDIA",
        d:"OpenAI",
        correct:"d"
    }
]

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll('.answer');
const container = document.querySelector('.question-container');
const choiceA = document.getElementById('a-text');
const choiceB = document.getElementById('b-text');
const choiceC = document.getElementById('c-text');
const choiceD = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');

let currentQuestion = 0;
let score = 0;
loadQuestion();

function loadQuestion() {
    checkChoice();
    const currentQuizData = questionData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    choiceA.innerText = currentQuizData.a;
    choiceB.innerText = currentQuizData.b;
    choiceC.innerText = currentQuizData.c;
    choiceD.innerText = currentQuizData.d;
}

function checkChoice() {
    answerEls.forEach(answerEl=>answerEl.checked=false);
}

submitBtn.addEventListener('click',()=>{
    let answer = getChoiceAnswer();
    if(answer) {
        if(answer === questionData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if(currentQuestion < questionData.length) {
            loadQuestion();
        }
        else {
            container.innerHTML = `<h2>คุณได้คะแนน ${score}/${questionData.length}</h2>`;
        }
    }
    
});

function getChoiceAnswer() {
    let answer;
    answerEls.forEach(answerEl=>{
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}