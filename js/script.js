const tokenCookieName = "accesstoken";
const disconnect = document.getElementById("btn-deconnexion");
const RoleCookieName = "role";

disconnect.addEventListener("click", dIsconnect);

function setToken(token) {
  setCookie(tokenCookieName, token, 7);
}

function getToken() {
  return getCookie(tokenCookieName);
}

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.startsWith(" ")) c = c.substring(1, c.length);
    if (c.startsWith(nameEQ)) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
function eraseCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

//Fonction de connexion en mettant place le token
function isConnected() {
  if (getToken() == null || getToken == undefined) {
    return false;
  } else {
    return true;
  }
}

if (isConnected()) {
  alert("Je suis connecté");
} else {
  alert("Je ne suis pas connecté");
}

//Deconnexion en supprimant les cookies
function dIsconnect() {
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);
  window.location.reload();
}

function getRole() {
  return getCookie(RoleCookieName);
}

/*
disconnected
connected (admin ou Employé ou Vétérinaire)
  -admin
  -Employé
  -Vétérinaire
*/
function showAndHideElementsForRoles() {
  const userConnected = isConnected();
  const role = getRole();

  let allElementsToEdit = document.querySelectorAll("[data-show]");

  allElementsToEdit.forEach((element) => {
    const rolesToShow = element.dataset.show.split(" "); // Séparer les rôles par espace
    const isVisible =
      (rolesToShow.includes("disconnected") && !userConnected) ||
      (rolesToShow.includes("connected") && userConnected) ||
      (rolesToShow.includes(role) && userConnected);

    // Ajouter ou retirer la classe `d-none` en fonction de la visibilité
    if (isVisible) {
      element.classList.remove("d-none");
    } else {
      element.classList.add("d-none");
    }
  });
}
