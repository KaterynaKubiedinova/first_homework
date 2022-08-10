let firstValue = prompt('Введите первое значение');
const secondValue = prompt('Введите второе значение');

if (isFinite(firstValue) && isFinite(secondValue)) {
  let arrayWithRemainders = [];
  let result = 0;

  while (firstValue > 0) {
    arrayWithRemainders.push(firstValue % secondValue);
    firstValue = Math.floor(firstValue / secondValue);
  }

  result = +arrayWithRemainders.reverse().join("");
  console.log(result);
} else {
  console.log("Некорректный ввод!");
}
