// Requisito 1 - Crie a função verificaPalindromo
let button = document.getElementById('buttonVerify');
function verificaPalindromo() {
  let input = document.getElementById('verify');
  let display = document.getElementById('display');
  let string = input.value;
  let invertedWord = string.split('').reverse().join('');
  display.textContent = (string === invertedWord).toString();
}
button.addEventListener('click', verificaPalindromo);

// Requisito 2 - Crie a função indiceDoMaior
let positionButton = document.getElementById('position');
function indiceDoMaior(array) {
  let biggestIndex = 0;
  for (let i in array) {
    if (array[i] > array[biggestIndex]) {
      biggestIndex = Number(i);
    }
  }
  return biggestIndex;
}
positionButton.addEventListener('click', function() {
  let input = document.getElementById('numbers');
  let result = document.getElementById('display');
  let numbers = input.value.split(',').map(Number);
  let index = indiceDoMaior(numbers);
  result.textContent = index;
});

// Requisito 3 - Crie a função indiceDoMenor
let buttonSmallest = document.getElementById('buttonSmallest');
function indiceDoMenor(array) {
  let smallestIndex = 0;
  for (let i in array) {
    if (array[i] < array[smallestIndex]) {
      smallestIndex = Number(i);
    }
  }
  return smallestIndex;
}
buttonSmallest.addEventListener('click', function() {
  let input = document.getElementById('number');
  let result = document.getElementById('displaySmallest');
  let number = input.value.split(',').map(Number);
  let index = indiceDoMenor(number);
  result.textContent = index;
});

// Requisito 4 - Crie a função maiorPalavra
let buttonWord = document.getElementById('buttonWord');
function maiorPalavra(array) {
  let biggest = '';
  for (let strings of array) {
    if (strings.length > biggest.length) {
      biggest = strings;
    }
  }
  return biggest;
}
buttonWord.addEventListener('click', function() {
  let input = document.getElementById('words');
  let result = document.getElementById('displayWord');
  let words = input.value.split(',');
  let biggestWord = maiorPalavra(words);
  result.textContent = biggestWord;
});

// Requisito 5 - Crie a função maisRepetido
let buttonRepetead = document.getElementById('buttonRepetead');
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
buttonRepetead.addEventListener('click', function() {
  let input = document.getElementById('numbs');
  let result = document.getElementById('displayRepetead');
  let numbers = input.value.split(',').map(num => Number(num));
  let mostRepetead = maisRepetido(numbers);
  result.textContent = mostRepetead;
});

// Requisito 6 - Crie a função somatorio
let buttonSum = document.getElementById('buttonSum');
function somatorio(N) {
  if (N < 0) return 'ERRO';
  let summation = 0;
  for (let i = 1; i <= N; i += 1) {
    summation += i;
  }
  return summation;
}
buttonSum.addEventListener('click', function() {
  let input = document.getElementById('sum');
  let result = document.getElementById('displaySum');
  let number = parseInt(input.value);
  let summation =somatorio(number);
  result.textContent = summation;
});

// Requisito 7 - Crie a função verificaFimPalavra
let buttonWords = document.getElementById('buttonWords');
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
buttonWords.addEventListener('click', function() {
  let input1 = document.getElementById('word1');
  let input2 = document.getElementById('word2');
  let result = document.getElementById('displayWords');
  let word1 = input1.value;
  let word2 = input2.value;
  let verificationResult = verificaFimPalavra(word1, word2);
  result.textContent = verificationResult;
});

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
