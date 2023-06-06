const { maisRepetido } = require('../src/functions');

describe('5 - Crie uma função que retorne o número mais frequente', () => {
  it('Retorne 2 quando a função maisRepetido é chamada com o array [2, 3, 2, 5, 8, 2, 3]', () => {
    expect(maisRepetido([2, 3, 2, 5, 8, 2, 3])).toBe(2);
  });

  it('Retorne 3 quando a função maisRepetido é chamada com o array [2, 3, -2, 3, -2, 2, 3]', () => {
    expect(maisRepetido([2, 3, -2, 3, -2, 2, 3])).toBe(3);
  });
});
