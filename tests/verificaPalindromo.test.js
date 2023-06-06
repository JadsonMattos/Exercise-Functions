const { verificaPalindromo } = require('../src/functions');

describe('1 - Crie uma função que verifica palíndromos', () => {
  it('Retorne true quando a função verificaPalindromo é chamada com a string \'arara\'', () => {
    expect(verificaPalindromo('arara')).toBe(true);
  });

  it('Retorne false quando a função verificaPalindromo é chamada com a string \'desenvolvimento\'', () => {
    expect(verificaPalindromo('desenvolvimento')).toBe(false);
  });
});
