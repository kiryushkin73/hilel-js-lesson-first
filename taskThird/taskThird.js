let someString =
  'Написать функцию, которая принимает строку и слово и ' +
  'возвращает массив всех положений данного слова в строке.';
let someWord = 'строк';
let wordLength = 6;
let match;
let variables = [];
let result = [];

function searchMach(myString, myWord) {
  while (match !== -1) {
    match = myString.indexOf(myWord, match + 1);
    variables.push(match);
  }
  variables.pop();

  for (i = 0; i < variables.length; i++) {
    let num = variables[i];
    result.push(someString.substr(num, wordLength));
  }
  return result;
}
console.log(searchMach(someString, someWord));
// let mainString =
//   'Написать функцию, которая принимает строку и слово и ' +
//   'возвращает массив всех положений данного слова в строке.';
// let myWord = 'строк';

// function isContain(string, word) {
//   let result = string.split(' ').filter((o) => o.includes(word));
//   return result;
// }
// console.log(isContain(mainString, myWord));
