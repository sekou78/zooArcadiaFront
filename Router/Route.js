export default class Route {
  constructor(url, title, pathHtml, authorize, pathJS = "") {
    this.url = url;
    this.title = title;
    this.pathHtml = pathHtml;
    this.pathJS = pathJS;
    this.authorize = authorize;
  }
}

/*
[] -> Tout le monde peut y accéder
["disconnected"] -> Réserver aux utilisateurs déconnecté 
["employe"] -> Réserver aux utilisateurs avec le rôle employe 
["veterinaire"] -> Réserver aux utilisateurs avec le rôle veterinaire 
["admin"] -> Réserver aux utilisateurs avec le rôle admin 
["admin", "employe", "veterinaire"] -> Réserver aux utilisateurs avec le rôle employe OU admin OU veterinaire
*/
