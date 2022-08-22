/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = "https://api.github.com/users";

const state = {};
document.getElementById("btn").addEventListener("click", (users) => {
  users.preventDefault;
});

function cards(users) {
  const container = document.getElementById("output");
  container.innerHTML = "";

  users.forEach((user) => {
    const loginName = document.createElement("h3");
    loginName.innerText =
      user.login.charAt(0).toUpperCase() + user.login.slice(1);

    const avatarImage = document.createElement("img");
    avatarImage.src = user.avatar_url;
    avatarImage.setAttribute("alt", "user-picture");

    const card = document.createElement("div");
    card.setAttribute("class", "user-card");
    card.append(loginName, avatarImage);
    container.append(card);
  });
}
function fetchUsers() {
  fetch("https://api.github.com/users")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(res.statusText);
      }
    })
    .then((data) => {
      state["users"] = data;
      cards(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
fetchUsers();
