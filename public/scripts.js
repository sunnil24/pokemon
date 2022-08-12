const themeSwitch = document.querySelector("#theme-switch");
if (themeSwitch) {
  themeSwitch.checked = localStorage?.getItem("switchedTheme") === "true";

  if (themeSwitch.checked) {
    document.body.classList.add("dark");
  }

  themeSwitch.addEventListener("change", function (e) {
    if (e.currentTarget.checked === true) {
      document.body.classList.add("dark");
      localStorage.setItem("switchedTheme", "true");
    } else {
      document.body.classList.remove("dark");

      localStorage.removeItem("switchedTheme");
    }
  });
}
