function calculoIMC() {
    const valuePeso = document.getElementById('inputPeso').value
    const valueAltura = document.getElementById('inputAltura').value
    const erroAlerta = document.getElementById('alert-err');

    const valConverPeso = parseInt(valuePeso);
    const valConverAltura = parseFloat(valueAltura);

    if (!valuePeso || !valueAltura) {
        erroAlerta.classList.remove('visually-hidden');
        setTimeout(() => {
            erroAlerta.classList.add('visually-hidden')
        }, 3000)

    } else if (isNaN(valConverPeso) || isNaN(valConverAltura) || valConverPeso < 0 || valConverAltura < 0) {
        erroAlerta.innerText = ' ';
        erroAlerta.innerText = 'Os valores não podem ser um número negativo ou letras';
        erroAlerta.classList.remove('visually-hidden');

        setTimeout(() => {
            erroAlerta.classList.add('visually-hidden')
        }, 3000)

    }

    const resultIMC = valConverPeso / (valConverAltura * valConverAltura);

    if (resultIMC <= 18.5) {
        formatMessage('Você está abaixo do peso', 'alert-danger')

    } else if (resultIMC > 18.5 && resultIMC <= 24.9) {
        formatMessage('Você está no peso normal', 'alert-success')

    } else if ( resultIMC > 24.9 && resultIMC <= 29.9) {
        formatMessage('Você está no sobrepeso, cuidado!', 'alert-warning')

    } else if ( resultIMC > 29.9 && resultIMC <= 34.9) {
        formatMessage('Você está com obesidade grau 1, está na hora de se cuidar!', 'alert-danger')

    } else if ( resultIMC > 34.9 && resultIMC <= 39.9) {
        formatMessage('Você está com obesidade grau 2, está na hora de se cuidar!', 'alert-danger')

    } else {
        formatMessage('Você está com obesidade grau 3, está na hora de se cuidar!', 'alert-danger')

    }
}

function formatMessage(message, classe){
    const erroAlerta = document.getElementById('alert-err');

    erroAlerta.innerText = ' ';
        erroAlerta.innerText = message
        erroAlerta.classList.remove('visually-hidden')
        erroAlerta.classList.replace('alert-success' , classe)

        setTimeout(() => {
            erroAlerta.classList.add('visually-hidden')
            erroAlerta.classList.replace(classe , 'alert-success')
        }, 3000)
}
