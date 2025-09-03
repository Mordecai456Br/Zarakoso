const required_text_date = document.querySelector('.required-text-date');
const required_date = document.querySelector('#required-text-date');
const response_date = document.querySelector('#response-text-date');


const required_CPF = document.querySelector('#required-text-CPF');
const response_CPF = document.querySelector('#response-text-CPF');


export { validarCPF, validarDate }

function validarName(){
    
}

function validarDate(date) {
    
    if(required_date.classList.contains("hidden")) {
        required_date.classList.toggle("hidden");
        response_date.textContent = "";
    }
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const [day, month, year] = date;

    const regex = /^(0[1-9]|1[0-9]|2[0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
    if (!regex.test(`${day}/${month}/${year}`)) {
        console.log("Invalid Date");
        response_date.textContent = "Invalid date";
        
        return false;
    }
    
    if (parseInt(day, 10) > 29 && month === "02"){
        console.log("February only have 29 days");
          response_date.textContent = "February only have 29 days";
          
          return false;
        }
        if (parseInt(year, 10) < 1900 || parseInt(year,10) > currentYear) {
            console.log("Invalid year (1900 - Current Year)");
        response_date.textContent = "Invalid year (1900 - Current Year)";
        
        return false;
    }

    console.log("Valid Date");
    response_date.textContent = "✅";
    required_date.classList.toggle("hidden");
    return true;
}



function validarCPF(cpf) {

    if(required_CPF.classList.contains("hidden")) {
        required_CPF.classList.toggle("hidden");
        response_CPF.textContent = "";
    }

    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) {
        console.log("numeros repetidos")
        response_CPF.textContent = "repeated numbers";
        return false;
    }

    let soma = 0;
    // 1 digit
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i) * (10 - i));
    }
    let resto = (soma * 10) % 11
    if (resto === 10 || resto === 11) resto = 0;
    if (parseInt(cpf.charAt(9)) !== resto) {
        console.log('1º digito inválido');
        response_CPF.textContent = "1º digit invalid";
        return false;
    }

    soma = 0;
    // 2 digit
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i) * (11 - i));
    }
    resto = (soma * 10) % 11;
    if (resto === 11 || resto === 10) resto = 0;
    if (parseInt(cpf.charAt(10)) !== resto) {
        console.log('2º digito inválido')
        response_CPF.textContent = "2º digit invalid";
        return false;
    };

    console.log("cpf valido");
    response_CPF.textContent = "✅";
    required_CPF.classList.toggle("hidden")
    return true;

}



