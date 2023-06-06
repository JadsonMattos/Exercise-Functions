// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo(string) {
  let invertedWord = string.split('').reverse().join('');
  return string === invertedWord;
}

// Requisito 2 - Crie a função indiceDoMaior
function indiceDoMaior(array) {
  let biggestIndex = 0;
  for (let i in array) {
    if (array[i] > array[biggestIndex]) {
      biggestIndex = Number(i);
    }
  }
  return biggestIndex;
}

// Requisito 3 - Crie a função indiceDoMenor
function indiceDoMenor(array) {
  let smallestIndex = 0;
  for (let i in array) {
    if (array[i] < array[smallestIndex]) {
      smallestIndex = Number(i);
    }
  }
  return smallestIndex;
}

// Requisito 4 - Crie a função maiorPalavra
function maiorPalavra(array) {
  let biggest = '';
  for (let strings of array) {
    if (strings.length > biggest.length) {
      biggest = strings;
    }
  }
  return biggest;
}

// Requisito 5 - Crie a função maisRepetido
function repeticoes(array) {
  let num = {};
  for (const element of array) {
    let value = element;
    if (num[value] === undefined) {
      num[value] = 1;
    } else {
      num[value] += 1;
    }
  }
  return num;
}

function maisRepetido(array) {
  let num = repeticoes(array);
  let numRepeated = 0;
  let valueRepeated = 0;
  for (let prop in num) {
    if (numRepeated < num[prop]) {
      numRepeated = num[prop];
      valueRepeated = Number(prop);
    }
  }
  return valueRepeated;
}

// Requisito 6 - Crie a função somatorio
function somatorio(N) {
  if (N < 0) return 'ERRO';
  let summation = 0;
  for (let i = 1; i <= N; i += 1) {
    summation += i;
  }
  return summation;
}

// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(palavra1, palavra2) {
  let invertedWord1 = palavra1.split('').reverse().join('');
  let invertedWord2 = palavra2.split('').reverse().join('');
  let result;
  for (let i = 0; i < invertedWord2.length; i += 1) {
    if (invertedWord1[i] !== invertedWord2[i]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
