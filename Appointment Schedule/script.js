const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dataEl = document.getElementById('date-picker');
const countdownEl = document.getElementById('countdown');
const countdownTitleEl = document.getElementById('countdown-title');
const countdownButtonEl = document.getElementById('countdown-button');
const timeEL = document.querySelectorAll('span');
const completeEl = document.getElementById('complete');
const completeInfoEl = document.getElementById('complete-info');
const completeButtonEl = document.getElementById('complete-button')

// ตัวเเปรควบคุมการทำงาน
let countdownTitle = '';
let countdownDate = '';

let countdownValue = Date; // เก็บวันที่เลือกจากฟอร์ม
let countdownActive; // นับเวลา
let saveCountdown; // เก็บข้อมูลหัวข้อเเละวันเเจ้งเดือน (object)

// ตัวเเปรเเปลงหน่วยเวลา
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

countdownForm.addEventListener('submit',updateCountdown);

function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    if(countdownTitle === '') {
        alert("ป้อนข้อมูลให้ครบ");
    }
    else {
        saveCountdown = {title : countdownTitle , date : countdownDate};
        localStorage.setItem("countdown",JSON.stringify(saveCountdown));
        countdownValue = new Date(countdownDate).getTime(); // เวลาที่ตั้งไว้
        setupTime();
    }
}

function setupTime() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime();
        const period = countdownValue - now;
        const days = Math.floor(period / day);
        const hours = Math.floor((period % day) / hour);
        const minutes = Math.floor((period % hour) / minute);
        const seconds = Math.floor((period % minute) / second);
        inputContainer.hidden = true
        if(period > 0) {
            countdownEl.hidden = true;
            completeEl.hidden = false;
            completeInfoEl.textContent = `${countdownTitle} วันที่ ${countdownDate}`;
            clearInterval(countdownActive);
        }
        else {
            countdownTitleEl.textContent = `${countdownTitle}`;
            timeEL[0].textContent = `${days}`;
            timeEL[1].textContent = `${hours}`;
            timeEL[2].textContent = `${minutes}`;
            timeEL[3].textContent = `${seconds}`;
            countdownEl.hidden = false;
            completeEl.hidden = true;
        }
    },second);
}

function callDatainStore() {
    if(localStorage.getItem("countdown")) {
        inputContainer.hidden = true;
        saveCountdown = JSON.parse(localStorage.getItem("countdown"));
        countdownTitle = saveCountdown.title;
        countdownDate = saveCountdown.date;
        countdownValue = new Date(countdownDate).getTime();
        setupTime();
    }
}

function reset() {
    localStorage.removeItem("countdown");
    countdownEl.hidden = true;
    completeEl.hidden = true;
    inputContainer.hidden = false;
    clearInterval(countdownActive);
    countdownTitle = '';
    countdownDate = '';
}

callDatainStore();
countdownButtonEl.addEventListener('click',reset);
completeButtonEl.addEventListener('click',reset);