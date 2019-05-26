const charts = '0123456789ASDFGHJKLPOIUYTREWQZXCVBNM';
const btn = document.querySelector('button');
const section = document.querySelector('section');

const numberOfCodes = 1000;
const numberOfCharts = 10;

const codeGenerator = () => {
    for (let i = 0; i < numberOfCodes; i++) {
        let newCode = '';
        for (let i = 0; i < numberOfCharts; i++) {
            let index = Math.floor(Math.random() * charts.length);
            newCode += charts[index];
        }
        const div = document.createElement('div');
        section.appendChild(div);
        div.textContent = newCode;
    }
}


btn.addEventListener('click', codeGenerator);