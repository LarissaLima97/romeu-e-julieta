const romeuJulieta = require("./romeu_e_julieta");

test('Verifica se 3 retorna queijo', () => {
    expect(romeuJulieta(3)).toBe('queijo');
});

test('Verifica se 5 retorna goiabada', () => {
    expect(romeuJulieta(5)).toBe('goiabada');
});

test('Verifica se 15 retorna romeu e julieta', () => {
    expect(romeuJulieta(15)).toBe('Romeu e Julieta');
});