/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}
showMenu('nav-toggle','nav-menu')

function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const selectedBg = localStorage.getItem("selected-bg");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {

  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  bgImage.classList.toggle(bgTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  localStorage.setItem("selected-bg", getCurrentBg());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 300,
  reset: false,
});

sr.reveal(`.contact_info, .contact_title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});
