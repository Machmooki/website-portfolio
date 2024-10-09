function scrollHeader() {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

const sections = document.querySelectorAll("section[id]");
const themeButton = document.getElementById("theme-button");
const bgImage = document.getElementById("bg-profile");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";
const bgTheme = "home_handle_light";
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");
const selectedBg = localStorage.getItem("selected-bg");

const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

const getCurrentBg = () =>
  bgImage.classList.contains(bgTheme) ? "home_handle" : "home_handle_light";
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
  bgImage.classList[selectedBg === "home_handle" ? "add" : "remove"](
    bgTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  bgImage.classList.toggle(bgTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
  localStorage.setItem("selected-bg", getCurrentBg());
});

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 300,
  reset: true,
});

sr.reveal(`.nav_menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home_data`);
sr.reveal(`.home_handle`, {
  delay: 100,
});

sr.reveal(`.home_social, .home_scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about_img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about_data, .about_description, .about_button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.services_title, services_button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.contact_info, .contact_title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});
