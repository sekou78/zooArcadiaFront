alert("Page veterinaire");

function isVeterinaire() {
  const role = getCookie("role");
  return role === "ROLE_VETERINAIRE"; // Vérifie si le rôle est bien "ROLE_VETERINAIRE"
}
