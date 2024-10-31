import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
  new Route("/", "Accueil-visiteur", "/pages/accueil-visiteur.html"),
  new Route(
    "/accueil-connectee",
    "Accueil-connectee",
    "/pages/accueil-connectee.html"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
