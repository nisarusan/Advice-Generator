//set Error
let error = false;

const setError = () => error = true;
//setAdvice
const adviceElement = document.getElementById('advice');
const setAdvice = arg => adviceElement.innerText = arg;

//async getAdvice response API
const getAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
    } catch (e) {
        console.error(e);
    }
}

void getAdvice();
const buttonElement = document.getElementById('button-circle');
buttonElement.addEventListener('click', () => void getAdvice());

