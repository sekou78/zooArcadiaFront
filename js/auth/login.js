const inputLoginEmail = document.getElementById("EmailLoginInput");
const inputLoginPassword = document.getElementById("PasswordLoginInput");
const checkboxLoginPassword = document.getElementById("checkLoginPassword");
const btnValidationLogin = document.getElementById("btn-validation-connexion");

inputLoginEmail.addEventListener("keyup", validateLoginForm);
inputLoginPassword.addEventListener("keyup", validateLoginForm);
checkboxLoginPassword.addEventListener("click", showLoginPassword);
btnValidationLogin.disabled = true;

function validateLoginForm() {
  const emailOK = validateLoginRequired(inputLoginEmail);
  const EmailOK = validateMailLogin(inputLoginEmail);
  const passwordOK = validateLoginRequired(inputLoginPassword);
  const PasswordOK = validatePasswordLogin(inputLoginPassword);

  if (emailOK && EmailOK && passwordOK && PasswordOK) {
    btnValidationLogin.disabled = false;
  } else {
    btnValidationLogin.disabled = true;
  }
}

//Demande de remplissage du champs requis
function validateLoginRequired(input) {
  if (input.value != "") {
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
function validateMailLogin(input) {
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
function validatePasswordLogin(input) {
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
function showLoginPassword() {
  if (inputLoginPassword.type === "password") {
    inputLoginPassword.type = "text";
  } else {
    inputLoginPassword.type = "password";
  }
}
