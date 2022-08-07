const themeSwitch = document.querySelector("#theme-switch");
themeSwitch.checked = localStorage.getItem("switchedTheme") === "true";

themeSwitch.addEventListener("change", function (e) {
  if (e.currentTarget.checked === true) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("switchedTheme", "true");
  } else {
    document.body.classList.remove("dark-mode");

    localStorage.removeItem("switchedTheme");
  }
});
