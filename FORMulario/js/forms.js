// Seleciona todos os checkboxes de "interesses"

const nameInput = document.querySelector('#name-input');
const dateInput = document.querySelector('#date-input');
const cpfInput = document.querySelector('#cpf-input');

const checkboxes = document.querySelectorAll('input[name="interesses"]');

// Para seleção múltipla:
function getCheckedValues() {
    return Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

// Para seleção única:
function getSingleValue() {
    const selected = Array.from(checkboxes).find(cb => cb.checked);
    return selected ? selected.value : null;
}


const cancelButton = document.querySelector('#formUsersCancelButton');
cancelButton.addEventListener("click", function () {
    nameInput.textContent = "";
    dateInput.textContent = "";
    cpfInput.textContent = "";
    
    

});

