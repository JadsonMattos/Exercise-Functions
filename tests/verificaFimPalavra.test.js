const { verificaFimPalavra } = require('../src/functions');

describe('7 - Crie uma função que verifica se uma string é o final de outra', () => {
  it('Retorne true quando a função verificaFimPalavra é chamada com as strings \'trybe\' e \'be\'', () => {
    expect(verificaFimPalavra('trybe', 'be')).toBe(true);
  });

  it('Retorne false quando a função verificaFimPalavra é chamada com as strings \'joaofernando\' e \'fernan\'', () => {
    expect(verificaFimPalavra('joaofernando', 'fernan')).toBe(false);
  });
});
