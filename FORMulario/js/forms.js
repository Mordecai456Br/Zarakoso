// Seleciona todos os checkboxes de "interesses"

const nameInput = document.querySelector('#name-input');
const dateInput = document.querySelector('#date-input');
const cpfInput = document.querySelector('#cpf-input');
const descriptionInput = document.querySelector('#description-input');

const required_CPF = document.querySelector('#required-text-CPF');
const response_CPF = document.querySelector('#response-text-CPF');

const required_date = document.querySelector('#required-text-date');
const response_date = document.querySelector('#response-text-date');

const required_name = document.querySelector('#required-text-name');
const response_name = document.querySelector('#response-text-name');

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
        required_name.classList.remove('hidden');
        required_date.classList.remove('hidden');
        required_CPF.classList.remove('hidden');

        response_name.textContent ='name is required';
        response_date.textContent = 'date is required';
        response_CPF.textContent ='CPF is required';

        form.reset();
    } else {
        console.log("Formulário inválido, usuário não criado.");
        alert("Formulário inválido, usuário não criado.");
    }
});



