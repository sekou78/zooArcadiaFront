import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
  new Route("/", "Accueil-visiteur", "/pages/accueil/accueil-visiteur.html"),
  new Route(
    "/accueil-connectee",
    "Accueil-connectee",
    "/pages/accueil/accueil-connectee.html"
  ),
  new Route("/contact", "Formulaire-contact", "/pages/contact.html"),
  new Route("/avis", "Votre-avis", "/pages/avis.html"),
  new Route("/services", "Les-Services", "/pages/services/services.html"),
  new Route(
    "/restaurant",
    "La-restauration",
    "/pages/services/restaurant.html"
  ),
  new Route(
    "/visite-habitat",
    "Visite-habitat",
    "/pages/services/visite-habitat.html"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
