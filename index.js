
//set Error
let error = false;
function setError() {
    error = true;
}

// advice
let advice = '';
function setAdvice(arg) {
    advice = arg;
    toggleAdvice(advice);
}
async function getAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
    } catch (e) {
        console.error(e);
    }
}

getAdvice().then(() => {
    console.log(advice);
})

const adviceElement = document.getElementById('advice');
const buttonElement = document.getElementById('button-circle');


function clickButton() {
    buttonElement.addEventListener('click', () => {
        getAdvice();
    })
}

function toggleAdvice(advice) {
    adviceElement.innerText = advice;
}