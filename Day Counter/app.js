const button = document.querySelector('button');
const result = document.getElementById('result');

button.addEventListener('click',()=>{
    const date_1 = document.getElementById('date-1').value;
    const date_2 = document.getElementById('date-2').value;
    
    const startDate = new Date(date_1);
    const endDate = new Date(date_2);

    // Calculate
    const times = Math.abs(endDate - startDate) ;// milliseconds
    // 1000 milliseconds = 1 second
    const days = Math.round((times/(1000 * 60 * 60 * 24)) + 1);
    result.innerText = "ห่างกัน " + days + " วัน";
})