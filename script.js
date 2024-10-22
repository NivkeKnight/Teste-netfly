// Seleciona os elementos
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const countDisplay = document.getElementById('count');

let count = 0;

// Função para atualizar o contador na tela
function updateDisplay() {
    countDisplay.textContent = count;
}

// Ações para aumentar e diminuir o contador
increaseBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});
