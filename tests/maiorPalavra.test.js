const { maiorPalavra } = require('../src/functions');

describe('4 - Crie uma função que retorna a maior palavra', () => {
  it('Retorne \'Fernanda\' quando a função maiorPalavra é chamada com o array [\'José\', \'Lucas\', \'Nádia\', \'Fernanda\', \'Cairo\', \'Joana\']', () => {
    expect(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])).toBe('Fernanda');
  });

  it('Retorne \'JavaScript\' quando a função maiorPalavra é chamada com o array [\'JavaScript\', \'HTML\', \'CSS\', \'GitHub\', \'Unix\']', () => {
    expect(maiorPalavra(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'])).toBe('JavaScript');
  });
});
