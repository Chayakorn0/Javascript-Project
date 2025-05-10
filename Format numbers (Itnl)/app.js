const amountEl = document.getElementById('amount');
const output_1El = document.getElementById('output-1');
const output_2El = document.getElementById('output-2');
const output_3El = document.getElementById('output-3');

amountEl.addEventListener('input',(e)=>{
    const number = e.target.value
    // Format Numbers
    const formatnum = Intl.NumberFormat().format(number)
    // Currency Formatting
    const currencynum = Intl.NumberFormat("th-TH",{
        style:"currency",
        currency:"THB"
    }).format(number)
    // Number Abbreviation
    const numAbbr = Intl.NumberFormat("en",{notation:"compact"}).format(number)
    output_1El.innerText = formatnum;
    output_2El.innerText = currencynum;
    output_3El.innerText = numAbbr;
})