const { somatorio } = require('../src/functions');

describe('6 - Crie uma função que retorna o somatório de um número', () => {
  it('Retorne 15 quando a função somatorio é chamada com o número 5', () => {
    expect(somatorio(5)).toBe(15);
  });
  it('Retorne 1 quando a função somatorio é chamada com o número 1', () => {
    expect(somatorio(1)).toBe(1);
  });
  it('Retorne ERRO quando a função somatorio é chamada com um número negativo', () => {
    expect(somatorio(-1)).toBe("ERRO");
  });
});
