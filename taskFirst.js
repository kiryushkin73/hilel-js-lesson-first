function calcCount() {
  let enteredText = prompt('Введите текст');
  let count = 0;
  let bag = 0;
  for (let i = 0; i < enteredText.length; i++) {
    if (enteredText[i] === ' ') ++count;
  }
  let target = '<br/>';
  let carryover = 0;
  let pos = 0;
  while (true) {
    let foundPos = enteredText.indexOf(target, pos);
    if (foundPos == -1) break;
    if (foundPos > 0) carryover++;
    pos = foundPos + 1;
  }
  return alert(
    ' Вы ввели текст: ' +
      enteredText +
      '\nКоличество пробелов в ней : ' +
      count +
      '\nКоличество переносов строки ' +
      carryover
  );
}
calcCount();
