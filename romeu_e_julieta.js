function romeuJulieta(num) {
   if( num % 3 === 0 && num % 5 === 0) {
    return 'Romeu e Julieta'
   }

   else if(num % 3 === 0) {
    return 'queijo'
   }

   else if(num % 5  === 0) {
    return 'goiabada'
   }
}

module.exports = romeuJulieta;