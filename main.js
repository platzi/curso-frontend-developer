const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navBarEmail.addEventListener("click", toggleDesktopMenuEmail);

function toggleDesktopMenuEmail() {
    desktopMenu.classList.toggle("inactive")
}