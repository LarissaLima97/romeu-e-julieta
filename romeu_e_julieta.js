function romeuJulieta(num) {

    if(typeof num !== 'number') {
        return 'Valor recebido não é um número'
    }

   else if( num % 3 === 0 && num % 5 === 0) {
    return 'Romeu e Julieta'
   }

   else if(num % 3 === 0) {
    return 'queijo'
   }

   else if(num % 5  === 0) {
    return 'goiabada'
   }

   else {
    return 'O valor recebido não é divisível por 3 e nem por 5'
   }
}

module.exports = romeuJulieta;