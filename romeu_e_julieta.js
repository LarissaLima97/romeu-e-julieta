function divisivelPorDivisor(num, divisor) {
    if(num % divisor === 0){
        return true; 
    }
    return false;
}

function romeuJulieta(num) {

    if(typeof num !== 'number') {
        return 'Valor recebido não é um número';
    }

    else if(divisivelPorDivisor(num, 3) && divisivelPorDivisor(num, 5)) {
        return 'Romeu e Julieta';
    }

    else if(divisivelPorDivisor(num, 3)) {
        return 'queijo';
    }

    else if(divisivelPorDivisor(num, 5)) {
        return 'goiabada';
    }

    else {
        return 'O valor recebido não é divisível por 3 e nem por 5';
    }
}

module.exports = romeuJulieta;
