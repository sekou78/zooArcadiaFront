const inputInsciptionNom = document.getElementById("NomInsciptionInput");
const inputInsciptionPrenom = document.getElementById("PrenomInsciptionInput");
const inputInsciptionEmail = document.getElementById("EmailInsciptionInput");
const inputInsciptionPassword = document.getElementById(
  "PasswordInsciptionInput"
);
const checkboxInsciptionPassword = document.getElementById(
  "checkInsciptionPassword"
);
const inputInsciptionPoste = document.getElementById("PosteInsciptionInput");
const btnValidationInscription = document.getElementById(
  "btn-validation-inscription"
);

inputInsciptionNom.addEventListener("keyup", validateInsciptionForm);
inputInsciptionPrenom.addEventListener("keyup", validateInsciptionForm);
inputInsciptionEmail.addEventListener("keyup", validateInsciptionForm);
inputInsciptionPassword.addEventListener("keyup", validateInsciptionForm);
inputInsciptionPoste.addEventListener("change", validateInsciptionForm);
checkboxInsciptionPassword.addEventListener("click", showInscriptionPassword);
btnValidationInscription.disabled = true;

function validateInsciptionForm() {
  const nomOK = validateInscriptionRequired(inputInsciptionNom);
  const prenomOK = validateInscriptionRequired(inputInsciptionPrenom);
  const emailOK = validateInscriptionRequired(inputInsciptionEmail);
  const EmailOK = validateMailInscription(inputInsciptionEmail);
  const passwordOK = validateInscriptionRequired(inputInsciptionPassword);
  const PasswordOK = validatePasswordInscription(inputInsciptionPassword);
  const posteOK = validateInscriptionRequired(inputInsciptionPoste);

  if (
    nomOK &&
    prenomOK &&
    emailOK &&
    EmailOK &&
    passwordOK &&
    PasswordOK &&
    posteOK
  ) {
    btnValidationInscription.disabled = false;
  } else {
    btnValidationInscription.disabled = true;
  }
}

//Demande de remplissage du champs requis
function validateInscriptionRequired(input) {
  if (input.value.trim() != "") {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format email requis
function validateMailInscription(input) {
  //definir le regex du champs mail
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mailUser = input.value;
  if (mailUser.match(emailRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Demande de remplissage du champs au bon format password
//(minimum 8 caractères composées des lettres, des chiffres et
//des symboles dont une lettre en majuscule) requis
function validatePasswordInscription(input) {
  //definir le regex du champs password
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
  const passwordUser = input.value;
  if (passwordUser.match(passwordRegex)) {
    input.classList.add("is-valid");
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    return false;
  }
}

//Show password inscription
function showInscriptionPassword() {
  if (inputInsciptionPassword.type === "password") {
    inputInsciptionPassword.type = "text";
  } else {
    inputInsciptionPassword.type = "password";
  }
}
