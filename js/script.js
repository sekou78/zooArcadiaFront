const tokenCookieName = "accesstoken";
const disconnect = document.getElementById("btn-deconnexion");
const RoleCookieName = "role";
const apiUrl = "http://127.0.0.1:8000/api/";

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

//Deconnexion en supprimant les cookies
function dIsconnect() {
  // Effacer les cookies liés au token et au rôle
  eraseCookie(tokenCookieName);
  eraseCookie(RoleCookieName);

  // Supprimer le rôle dans le localStorage ou sessionStorage (si utilisé)
  localStorage.removeItem("role"); // Si vous utilisez localStorage
  sessionStorage.removeItem("role"); // Si vous utilisez sessionStorage

  // Rediriger ou recharger la page pour appliquer les changements
  window.location.reload();
}

const roleMapping = {
  ROLE_ADMIN: "admin",
  ROLE_EMPLOYE: "employé",
  ROLE_VETERINAIRE: "vétérinaire",
  // Ajouter d'autres rôles si nécessaire
};

function isAdmin() {
  const role = getCookie("role");
  return role === "ROLE_ADMIN"; // Vérifie si le rôle est bien "ROLE_ADMIN"
}

// Fonction pour obtenir le rôle depuis le cookie
function getRole() {
  const roleFromCookie = getCookie(RoleCookieName); // Récupère le rôle du cookie

  if (roleFromCookie && roleMapping[roleFromCookie]) {
    return roleMapping[roleFromCookie]; // Retourne la version lisible du rôle
  }

  // Si aucun rôle n'est trouvé ou mappé, retourner "disconnected" ou un autre statut
  return "disconnected";
}

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

// Fonction pour vérifier s'il existe déjà un administrateur
function checkIfAdminExists() {
  // On effectue une requête pour récupérer la liste des utilisateurs (ou des administrateurs)
  return fetch(apiUrl + "users?role=admin", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Erreur lors de la récupération des administrateurs.");
      }
    })
    .then((data) => {
      // Vérifier si un administrateur existe déjà
      return data.length > 0; // Si la liste contient un administrateur, return true
    })

    .catch((error) => {
      console.error(error);
      return false;
    });
}
