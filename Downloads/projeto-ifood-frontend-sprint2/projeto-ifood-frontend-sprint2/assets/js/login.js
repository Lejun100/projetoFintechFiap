const senhaInput = document.getElementById('senha');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('mousedown', function () {
    senhaInput.type = 'text';
});

togglePassword.addEventListener('mouseup', function () {
    senhaInput.type = 'password';
});

togglePassword.addEventListener('mouseleave', function () {
    senhaInput.type = 'password';
});

function mascaraCpfCnpj(input) {
    let value = input.value.replace(/\D/g, '');

    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    } else {
        value = value.replace(/^(\d{2})(\d)/, "$1.$2");
        value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
        value = value.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
    }

    input.value = value;
}

function validarCPFouCNPJ() {
    const input = document.getElementById('usuario').value.replace(/\D/g, '');
    const errorMessage = document.getElementById('error-mensager');

    if (input.length === 11) {
        if (validarCPF(input)) {
            errorMessage.innerText = '';
        } else {
            errorMessage.innerText = 'CPF inválido!';
        }
    } else if (input.length === 14) {
        if (validarCNPJ(input)) {
            errorMessage.innerText = '';
        } else {
            errorMessage.innerText = 'CNPJ inválido!';
        }
    } else {
        errorMessage.innerText = 'CPF ou CNPJ inválido!';
    }
}

function validarCPF(cpf) {
    let soma = 0;
    let resto;

    if (cpf == "00000000000") return false;

    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
}

function validarCNPJ(cnpj) {
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2) pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) return false;

    return true;
}



