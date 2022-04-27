let passToggle = document.getElementById("passToggle");
let pass = document.getElementById("pass");
let PassToggleClsList = passToggle.classList;
passToggle.addEventListener("click", () => {
  if (PassToggleClsList.contains("fa-eye-slash")) {
    pass.type = "text";
    PassToggleClsList.replace("fa-eye-slash", "fa-eye");
  } else {
    pass.type = "password";
    PassToggleClsList.replace("fa-eye", "fa-eye-slash");
  }
});
