/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  const sum = a + b;
  const subtraction = a - b;
  const multiplication = a * b;
  const division = a / b;
  const total = `sum= ${sum}; substraction= ${subtraction};
  multiplication= ${multiplication};
  division= ${division};`;
  return total;
}
console.log(Calculator(10, 4));
