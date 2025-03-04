function isAdmin() {
  const role = getCookie("role");
  return role === "ROLE_ADMIN"; // Vérifie si le rôle est bien "ROLE_ADMIN"
}
