const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

let transactions = [];

function init() {
    list.innerHTML = '';
    transactions.forEach(addDataToList);
    calculateMoney();
}

function addDataToList(transactions) {
    const symbol = transactions.amount < 0 ? '-':'+';
    const status = transactions.amount < 0 ? 'minus':'plus';
    const item = document.createElement('li');
    result = formatNumber(Math.abs(transactions.amount));
    item.classList.add(status);
    item.innerHTML = `${transactions.text}<span>${symbol}${result}<span><button class="delete-btn" onclick="removeData(${transactions.id})">x</button>`;
    list.appendChild(item);
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function AutoId() {
    return Math.floor(Math.random()*1000000);
}

function calculateMoney() {
    const amounts = transactions.map(transactions=>transactions.amount);
    // Cal Balance
    const total = amounts.reduce((result,item)=>(result+=item),0).toFixed(2);
    // Cal Income
    const income = amounts.filter(item=>item > 0).reduce((result,item)=>(result+=item),0).toFixed(2);
    // Cal Expense
    const expense = (amounts.filter(item=>item < 0).reduce((result,item)=>(result+=item),0)*-1).toFixed(2);

    // Display balence , Income , Expense
    balance.innerText = `฿` + formatNumber(total);
    money_plus.innerText = `฿` + formatNumber(income);
    money_minus.innerText = `฿` + formatNumber(expense);
}

function removeData(id) {
    transactions = transactions.filter(transactions=>transactions.id !== id)
    init();
}

function AddTransaction(e){
    e.preventDefault();
    if (text.value.trim() === '' || amount.value.trim() === ''){
        alert("กรุณาป้อนข้อมูลให้ครบ");
    }
    else {
        const data = {
            id:AutoId(),
            text:text.value,
            amount:+amount.value
        }

        transactions.push(data);
        addDataToList(data);
        calculateMoney();
        text.value = '';
        amount.value = '';
        
    }
}

form.addEventListener('submit',AddTransaction);
init();