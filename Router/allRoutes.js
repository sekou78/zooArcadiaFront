import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
  new Route(
    "/",
    "Accueil-visiteur",
    "/pages/accueil/accueil-visiteur.html",
    []
  ),
  new Route(
    "/accueil-admin",
    "Accueil-admin",
    "/pages/accueil/accueil-admin.html",
    ["admin"]
  ),
  new Route("/contact", "Formulaire-contact", "/pages/contact.html", []),
  new Route("/avis", "Votre-avis", "/pages/avis.html", []),
  new Route("/services", "Les-Services", "/pages/services/services.html", []),
  new Route(
    "/restaurant",
    "La-restauration",
    "/pages/services/restaurant.html",
    []
  ),
  new Route(
    "/visite-habitat",
    "Visite-habitat",
    "/pages/services/visite-habitat.html",
    []
  ),
  new Route(
    "/les-encadrants",
    "les-encadrants",
    "/pages/services/les-encadrants.html",
    ["admin"]
  ),
  new Route(
    "/visite-petit-train",
    "Visite-petit-train",
    "/pages/services/visite-petit-train.html",
    []
  ),
  new Route("/habitats", "Les-habitats", "/pages/habitats/habitats.html", []),
  new Route("/savane", "La-savane", "/pages/habitats/savane.html", []),
  new Route("/jungle", "La-jungle", "/pages/habitats/jungle.html", []),
  new Route("/marais", "La-marais", "/pages/habitats/marais.html", []),
  new Route(
    "/login",
    "Connexion",
    "/pages/auth/login.html",
    [],
    "/js/auth/login.js"
  ),
  new Route(
    "/inscription",
    "Inscription",
    "/pages/auth/inscription.html",
    ["admin"],
    "/js/auth/inscription.js"
  ),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";
