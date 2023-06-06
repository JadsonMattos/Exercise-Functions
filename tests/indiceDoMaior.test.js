const { indiceDoMaior } = require('../src/functions');

describe('2 - Crie uma função que retorne o índice do maior valor', () => {
  it('Retorne 4 quando a função indiceDoMaior é chamada com o array [2, 3, 6, 7, 10, 1]', () => {
    expect(indiceDoMaior([2, 3, 6, 7, 10, 1])).toBe(4);
  });

  it('Retorne 0 quando a função indiceDoMaior é chamada com o array [9, 1, 3, 5, 7]', () => {
    expect(indiceDoMaior([9, 1, 3, 5, 7])).toBe(0);
  });
});
