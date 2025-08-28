
const nameInput = document.querySelector('#nameInput')
const dateInput = document.querySelector('#dateInput');

const emailInput = document.querySelector('#emailInput')
const passwordInput = document.querySelector('#passwordInput')


dateInput.addEventListener("input", () => {

    let cleaned = dateInput.value.replace(/\D/g,'');

    cleaned = cleaned.replace(/^(\d{2})(\d)/, '$1/$2')
    .replace (/^(\d{2}\/\d{2})(\d)/, '$1/$2')
    .slice(0,10);
    dateInput.value = cleaned;
});

