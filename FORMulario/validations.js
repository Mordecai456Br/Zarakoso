
const nameInput = document.querySelector('#nameInput');
const dateInput = document.querySelector('#dateInput');

const emailInput = document.querySelector('#emailInput');
const cpfInput = document.querySelector('#cpfInput');

import { validarCPF, validarDate } from './validations2.js';

dateInput.addEventListener("input", function () {

    let cleaned = this.value.replace(/\D/g, '');

    cleaned = cleaned.replace(/^(\d{2})(\d)/, '$1/$2')
        .replace(/^(\d{2}\/\d{2})(\d)/, '$1/$2')
        .slice(0, 10);
    this.value = cleaned;
    validarDate(this.value);
});

cpfInput.addEventListener("input", function () {

    let cpf = this.value.replace(/\D/g, '');

    if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    cpf = cpf.slice(0, 14);
    this.value = cpf
    validarCPF(cpf);
})


/* tem q validar os 2 ultimos digitos
 digito 1 -> pega os 9 primeiros numeros e multiplica o primeiro, por 10,
 o segundo por 9.. até chegar em *2
*/

/*
function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
        console.log("1º digito falso");
        return false;
    };

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
        console.log("2º digito falso");
        return false;
    }

    console.log("cpf valido");
    return true
}
*/
