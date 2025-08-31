
const nameInput = document.querySelector('#nameInput');
const dateInput = document.querySelector('#dateInput');

const emailInput = document.querySelector('#emailInput');
const cpfInput = document.querySelector('#cpfInput');



dateInput.addEventListener("input", function() {

    let cleaned = this.value.replace(/\D/g,'');

    cleaned = cleaned.replace(/^(\d{2})(\d)/, '$1/$2')
    .replace (/^(\d{2}\/\d{2})(\d)/, '$1/$2')
    .slice(0,10);
    this.value = cleaned;
});

cpfInput.addEventListener("input", function() {

    let cpf = this.value.replace(/\D/g,'');

    if (cpf.length > 9){
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
    } else if (cpf.length > 6) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
    } else if (cpf.length > 3) {
        cpf = cpf.replace(/(\d{3})(\d{1,3})/, '$1.$2');
    }
    this.value = cpf.slice(0,14);
})


/* tem q validar os 2 ultimos digitos
 digito 1 -> pega os 9 primeiros numeros e multiplica o primeiro, por 10,
 o segundo por 9.. até chegar em *2
*/
function validarCPF() {

}

