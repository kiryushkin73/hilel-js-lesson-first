// let enteredText = prompt('Введите произвольный текст');
// let res = '';
// while (res.length < enteredText.length) {
//   res += enteredText[Math.floor(Math.random() * enteredText.length)];
// }
// alert(res);
// function randomstring(L) {
//   let s = '';
//   let randomchar = function () {
//     let n = Math.floor(Math.random() * 62);
//     if (n < 10) return n; //1-10
//     if (n < 36) return String.fromCharCode(n + 55); //A-Z
//     return String.fromCharCode(n + 61); //a-z
//   };
//   while (s.length < L) s += randomchar();
//   return s;
// }
// console.log(randomstring(10));
function makeSentance(count) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let words = '';
  let sentences = '';

  for (let i = 0; i < 15; i++) {
    words += alphabet.charAt(Math.random() * alphabet.length);
  }

  for (let j = 0; j < count; j++) {
    sentences += words + ' ';
  }
  return sentences;
}

let enteredNumber = parseInt(prompt('Введите количество слов в предложении?'));
alert(makeSentance(enteredNumber));
