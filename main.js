const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuBotton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const navBarShoppingCart = document.querySelector(".navbar-shopping-cart")


navBarEmail.addEventListener("click", toggleDesktopMenuEmail);
mobileMenuBotton.addEventListener("click", toggleMobileMenu);
navBarShoppingCart.addEventListener("click", toggleOrderInCart);


function toggleDesktopMenuEmail() {
    desktopMenu.classList.toggle("inactive");
    if (!productDetail.classList.contains("inactive")){
        productDetail.classList.add("inactive")
    }
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    if (!productDetail.classList.contains("inactive")){
        productDetail.classList.add("inactive")
    }
}
function toggleOrderInCart(){
    productDetail.classList.toggle("inactive");
    if (!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive")
    }
    if (!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.add("inactive")
    }
}