/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";

function getMyApi() {
  fetch("cars.json")
    .then((resp) => resp.json())
    .then((data) => {
      let allData = " ";
      data.forEach((item) => {
        allData += `<h2>${item.brand}:</h2><h3>${item.models}</h3>`;
      });
      document.getElementById("output").innerHTML = allData;
    });
}
getMyApi();
