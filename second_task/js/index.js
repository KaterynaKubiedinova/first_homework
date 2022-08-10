const firstValue = +prompt("Введите первое значение");

if (!isFinite(firstValue)) {
  console.log("Некорректный ввод!");
} else {
  const secondValue = +prompt("Введите второе значение");

  if (!isFinite(secondValue)) {
    console.log("Некорректный ввод!");
  } else {
    const valuesSum = firstValue + secondValue,
      valuesDivisor = firstValue / secondValue;
    console.log(`Ответ: ${valuesSum}, ${valuesDivisor}`);
  }
}
