
function validarCPF(cpf) {

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) { console.log("numeros repetidos")
        return false;
    }

    let soma = 0;
    // 1 digit
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i) * (10 - i));
    }
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0;
    if (parseInt(cpf.charAt(9)) !== resto) { console.log('1º digito inválido'); 
        return false;
    }

    soma = 0;
    // 2 digit
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i) * (11 - i));
    }
    resto = (soma * 10) % 11;
    if (resto === 11 || resto === 10) resto = 0;
    if (parseInt(cpf.charAt(10)) !== resto) { console.log('2º digito inválido')
        return false;
    };

    console.log("cpf valido");
    return true;

}


function validarDate(date) {
  const regex = /0[0-9]|1[0-9]|2[0-9]|3[01]/
  
}

export { validarCPF, validarDate}





