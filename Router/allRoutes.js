import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
  new Route("/", "Accueil-visiteur", "/pages/accueil/accueil-visiteur.html"),
  new Route(
    "/accueil-admin",
    "Accueil-admin",
    "/pages/accueil/accueil-admin.html"
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
  new Route(
    "/visite-petit-train",
    "Visite-petit-train",
    "/pages/services/visite-petit-train.html"
  ),
  new Route("/habitats", "Les-habitats", "/pages/habitats/habitats.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
