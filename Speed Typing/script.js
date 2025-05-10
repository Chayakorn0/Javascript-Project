const wordEl = document.getElementById('word');
const textEl = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');

const btnLevelEl = document.getElementById('level-btn');
const settingsEl = document.getElementById('settings');
const levelFormEl = document.getElementById('level-form');
const levelEl = document.getElementById('level');
const gameoverEl = document.getElementById('gameover-container');

const words = [
    "กงเกวียนกำเกวียน", "กงเต๊ก", "กงโก้", "กงไฉ่", "กงจักร", "กช", "กฎกระทรวง", 
    "กฎข้อบังคับ", "กฎทบวง", "กฎมนเทียรบาล", "กงมนเทียรบาล", "ขจร", "ขทิง", "ขทึง", 
    "ขน", "ขนทรายเข้าวัด", "ขนลุกขนชัน", "ขนหน้าแข้งไม่ร่วง", "ขนหย็อง", "ขนหัวลุก", 
    "ขนง", "คงกระพันชาตรี", "คงขาด", "คงคลัง", "คงคา", "คงคาลัย", "คงคาเดือด", "คงตัว", 
    "คงทน", "คงที่", "ฆระ", "ฆราวาส", "ฆาฏ", "ฆาต", "ฆาตกร", "ฆาตกรรม", "ฆาน", 
    "ฆานประสาท", "ฆานินทรีย์", "งดงาม", "งบ", "งบดุล", "งบประมาณ", "งม", "งมเข็มในมหาสมุทร", 
    "งมงาย", "งมโข่ง", "งวง", "จตุรเพท", "จตุรเวท", "จริม", "จก", "จง", "จงกรม", 
    "จงกรมแก้ว", "จงกล", "จงกลนี", "จงรัก", "ฉกาจฉกรรจ์", "ฉกามาพจร", "ฉกามาวจร", 
    "ฉง", "ฉงน", "ฉงาย", "ฉทวาร", "ฉทานศาลา", "ฉทึง", "ฉกรรจ์", "ชดเชย", "ชดใช้", 
    "ชทึง", "ชน", "ชนก", "ชนกลุ่มน้อย", "ชนกกรรม", "ชนช้าง", "ชนนี", "ชฎา", "ซานซม", 
    "ซมซาน", "ซรอกซรัง", "ซวด", "ซวดทรง", "ซวดเซ", "ซวน", "ซวนเซ", "ซวย", "ซบเซา", 
    "ฌาน", "ฌาปน", "ฌาปนกิจ", "ฌาปนสถาน", "เฌอ", "เฌอเอม", "ญัตติ", "ญาณ", "ญาณทัสนะ", 
    "ญาณวิทยา", "ญาณศาสตร์", "ญาติ", "ญาติสนิท", "ญาติสืบสาโลหิต", "ญาติกา", "ฎีกา", 
    "ฐาน", "ฐานกรณ์", "ฐานบัทม์", "ฐานราก", "ฐานสิงห์", "ฐานะ", "ฐานันดร", "ฐานานุกรม", 
    "ฐานานุรูป", "ฑังส", "ฑาก", "ฑาหก", "ฑาหะ", "เฒ่า", "เฒ่าหัวงู", "เฒ่าแก่", "ณรงค์", 
    "เณร", "เณรหน้าไฟ", "เณรหางนาค", "ดงดาน", "ดงดิบ", "ดงดึก", "ดงวาย", "ดนตรี", "ดนัย", 
    "ดนุ", "ดนุช", "ดนู", "ตกค้าง", "ตกงาน", "ตกจั่น", "ตกดิน", "ตกตะกอน", "ตกตะลึง", 
    "ตกต่ำ", "ตกทอด", "ตกที่นั่ง", "ถกเถียง", "ถนัดใจ", "ถนัน", "ถนำ", "ถนำทึก", "ถนิม", 
    "ถนิมพิมพาภรณ์", "ถนิมกาม", "ถนิมสร้อย", "ถบ", "ทบ", "ทบท่าว", "ทบทวน", "ทบวง", 
    "ทบวงการ", "ทบวงการเมือง", "ทมนะ", "ทมก", "ทมบ", "ทดแทน", "ธน", "ธนธานี", "ธนบดี", 
    "ธนบัตร", "ธนบัตรย่อย", "ธนสมบัติ", "ธนสาร", "ธนัง", "ธนาคม", "ธงชาติ", "นกกะปูด", 
    "นกกางปีก", "นกคุ่ม", "นกจาก", "นกยูง", "นกหก", "นกหวีด", "นกอยู่ในปล่อง", "นกุล", 
    "บก", "บกพร่อง", "บง", "บงสุ", "บงกช", "บงกชกร", "บงการ", "บงก์", "บงสุกุล", "ปฏิการะ", 
    "ปฏิกิริยา", "ปฏิกูล", "ปฏิคคหิต", "ปฏิคม", "ปฏิคหิต", "ปฏิคาหก", "ปฏิฆะ", "ปฏิชีวนะ", 
    "ปกครอง", "ผ่าตัด", "ผิดตัว", "ผีตายทั้งกลม", "ผีตายโหง", "ผ้าต่วน", "เผาถ่าน", 
    "ผีทะเล", "ผิดที่ผิดทาง", "ผิดที่", "ผจญภัย", "ฝอยทอง", "ฝัก", "ฝักถั่ว", "ฝักบัว", 
    "ฝีฝักบัว", "ฝักฝ่าย", "ฝักพร้า", "ฝักมะขาม", "ฝักยาว", "ฝนหลวง", "พญา", "พญากาสัก", 
    "พญาขามป้อม", "พญาฉัททันต์", "พญาช้างเผือก", "พญาณ", "พญาดาบหัก", "พญาปากกว้าง", 
    "พญาพยาต", "ฟรักโทส", "ฟรี", "ฟรีบาร์", "ฟลูออรีน", "ฟอก", "ฟอกผ้า", "ฟอกพยาน", 
    "ฟอกหนัง", "ฟอกโลหิต", "ฟกช้ำ", "ภวะ", "ภวัคระ", "ภควดี", "ภควัต", "ภควันต์", 
    "ภควัม", "ภควา", "ภควาน", "ภคันทลา", "ภมร", "มณฑล", "มณฑา", "มณฑารพ", "มณฑิระ", 
    "มณฑ์", "มณี", "มณีการ", "มณีพืช", "มณีรัตน์", "มกราคม", "ยกเครื่อง", "รดน้ำ", "ฤกษ์", 
    "ลงกระหม่อม", "ลงชื่อ", "วงกลม", "ศตวรรษ", "ศาลพระภูมิ", "ศิลปะพื้นบ้าน", "ศาลภาษีอากร", 
    "เศษมนุษย์", "ษมา", "สกัด", "หงส์", "องค์กร", "ฮวงซุ้ย"
]

const saveMode = localStorage.getItem('mode') !== null ? localStorage.getItem('mode') : 'normal';

let randomText;
let score = 0;
let time = 10; // easy -> 15s , normal -> 10s , hard -> 5s

let level = 'normal';

const timeInterval = setInterval(Time,1000);

function getRandomWord() {
    return words[Math.floor(Math.random()*words.length)];
}

function displayWord() {
    randomText= getRandomWord();
    wordEl.innerHTML = randomText;
    timeEl.innerHTML = time;
    const saveMode = localStorage.getItem('mode') !== null ? localStorage.getItem('mode') : 'normal';
    levelEl.value = saveMode;
}

textEl.addEventListener('input',(e)=>{
    const inputText = e.target.value;

    if(inputText === randomText) {
        if(saveMode === 'easy') {
            time += 5;
        }
        else if(saveMode === 'normal') {
            time += 3;
        }
        else {
            time += 1;
        }
        displayWord();
        updateScore();
        e.target.value = '';
    }
});

function updateScore() {
    score += 10
    scoreEl.innerHTML = score;
}

function Time() {
    time--;
    timeEl.innerHTML = time;
    if(time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }
}

function gameOver() {
    gameoverEl.innerHTML = 
    `<h1>จบเกม</h1>
    <h2>คะเเนนของคุณ = ${score} คะเเนน</h2>
    <button onclick="location.reload()">เล่นอีกครั้ง</button>`;
    gameoverEl.style.display = 'flex';
}

btnLevelEl.addEventListener('click',()=>{
    settingsEl.classList.toggle('hide');
});

levelEl.addEventListener('change',(e)=>{
    level = e.target.value;
    localStorage.setItem("mode",level);
});

function startGame() {
    levelEl.value = saveMode;
    if(saveMode === 'easy') {
        time = 20;
    }
    else if(saveMode === 'normal') {
        time = 15;
    }
    else {
        time = 10;
    }
    displayWord();
}

startGame();
textEl.focus();