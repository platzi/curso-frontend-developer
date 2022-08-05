const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuBotton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");


navBarEmail.addEventListener("click", toggleDesktopMenuEmail);
mobileMenuBotton.addEventListener("click", toggleMobileMenu);


function toggleDesktopMenuEmail() {
    desktopMenu.classList.toggle("inactive")
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive")
}