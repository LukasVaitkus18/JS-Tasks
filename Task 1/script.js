/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function converter(event) {
  const kgInput = event.target.value;
  const lbOutput = document.getElementById("output");
  const gOutput = document.getElementById("output1");
  const ozOutput = document.getElementById("output2");

  const kg = Number(kgInput);
  const lb = (kg * 2.2046).toFixed(4);
  const g = (kg / 0.001).toFixed(0);
  const oz = (kg * 35.274).toFixed(3);

  lbOutput.innerText = "Svoris svarais:" + " " + lb + " " + "lb.";
  gOutput.innerText = "Svoris gramais:" + " " + g + " " + "g.";
  ozOutput.innerText = "Svoris uncijomis:" + " " + oz + " " + "oz.";
}
document.getElementById("search").addEventListener("input", converter);
