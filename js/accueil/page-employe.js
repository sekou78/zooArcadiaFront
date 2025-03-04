alert("Page employé");

function isEmploye() {
  const role = getCookie("role");
  return role === "ROLE_EMPLOYE"; // Vérifie si le rôle est bien "ROLE_EMPLOYE"
}
