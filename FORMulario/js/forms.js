// Seleciona todos os checkboxes de "interesses"

const nameInput = document.querySelector('#name-input');
const dateInput = document.querySelector('#date-input');
const cpfInput = document.querySelector('#cpf-input');
const descriptionInput = document.querySelector('#description-input');

const form = document.querySelector('#formUser');


import { User } from './user.js';
import { validarName, validarDate, validarCPF } from './validations.js'; 





const cancelButton = document.querySelector('#formUsersCancelButton');
cancelButton.addEventListener("click", function () {
    nameInput.textContent = "";
    dateInput.textContent = "";
    cpfInput.textContent = "";
});


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const birthdayValue = dateInput.value.trim();
    const cpfValue = cpfInput.value.trim();
    const descriptionValue = descriptionInput ? descriptionInput.value.trim() : '';

    const dateParts = birthdayValue.split('/');

    
    const isNameValid = validarName(nameValue);
    const isDateValid = validarDate(dateParts);
    const isCpfValid = validarCPF(cpfValue);

  
    if (isNameValid && isDateValid && isCpfValid) {
       
        const newUser = User.pushUser(nameValue, birthdayValue, cpfValue, descriptionValue);
        console.log('Created user:', newUser);
        alert('Created user:', newUser);
        form.reset();
    } else {
        console.log("Formulário inválido, usuário não criado.");
        alert("Formulário inválido, usuário não criado.");
    }
});



const checkboxes = document.querySelectorAll('input[name="interesses"]');
function getCheckedValues() {
    return Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
}


function getSingleValue() {
    const selected = Array.from(checkboxes).find(cb => cb.checked);
    return selected ? selected.value : null;
}