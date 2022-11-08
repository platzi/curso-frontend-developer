const burgerIcon = document.getElementById("burger-icon")
const platziAnchor = document.getElementById("platzi-anchor");
const shoppingAnchor = document.getElementById("shopping-anchor"); 
burgerIcon.addEventListener("click", ftoggleMobileMenu);
platziAnchor.addEventListener("click", ftoggleDesktopMenu);
shoppingAnchor.addEventListener("click", ftoggleAsideMenu);

const toggleNav = document.querySelector(".toggle-nav");
const toggleMobileMenu = document.querySelector(".toggle-mobile-menu");
const toggleDesktopMenu = document.querySelector(".toggle-desktop-menu");
const toggleAsideMenu = document.querySelector(".toggle-aside-menu");

const cardsContainer = document.getElementById("cards-container");
const productList = [];
productList.push({
    name: "Scooter (skate)",
    img: "https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 100
})
productList.push({
    name: "Rollerskates",
    img: "https://media.istockphoto.com/id/182383572/es/foto/pat%C3%ADn-en-l%C3%ADnea.jpg?s=1024x1024&w=is&k=20&c=kKH67u3hYuxv6_Tx8dEI2zhWrq5iS7zmI-XlJF-9X0k=",
    price: 125
})
productList.push({
    name: "Skateboard",
    img: "https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 150
})
productList.push({
    name: "Bike",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 240
})
productList.push({
    name: "Scooter (bike)",
    img: "https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 360
})
productList.push({
    name: "Motorcycle",
    img: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 540
})
productList.push({
    name: "Kart",
    img: "https://media.istockphoto.com/id/509793078/es/foto/go-kart.jpg?s=1024x1024&w=is&k=20&c=TwJCxnayGmr3CmrCae9C76-cB6BHlPgeD3OqOxyVwf0=",
    price: 720
})
productList.push({
    name: "Quad",
    img: "https://media.istockphoto.com/id/485397116/es/foto/potente-moderna-atv.jpg?s=1024x1024&w=is&k=20&c=vh9h38qojbMXjaYpTEahA9xgOmeLU1k9rJ0t3AgFojU=",
    price: 999
})
    // let cardFiller = "";
    // cardFiller += `
    // <div class="product-card">
    //   <img src=${product.img} alt="">
    //   <div class="product-info">
    //     <div>
    //     <p>${product.name}</p>
    //     <p>${product.price}$</p>
    //     </div>
    //     <figure>
    //       <img src="./icons/bt_add_to_cart.svg" alt="">
    //     </figure>
    //   </div>
    // </div>
    // `
    // cardsContainer.innerHTML = cardFiller;

function renderProducts() {
    for (product of productList) {
        const productCardDiv = document.createElement("div");
        productCardDiv.classList.add("product-card");
        cardsContainer.appendChild(productCardDiv);
    
        const productImg = document.createElement("img");
        productImg.src = product.img;
        productCardDiv.appendChild(productImg);
    
        const productInfoDiv = document.createElement("div");
        productInfoDiv.classList.add("product-info");
        productCardDiv.appendChild(productInfoDiv);
    
        const productInfoDivDiv = document.createElement("div");
        productInfoDiv.appendChild(productInfoDivDiv);
    
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = product.price + "$";
        productInfoDivDiv.appendChild(productInfoPrice);
    
        const productInfoName = document.createElement("p");
        productInfoName.innerText = product.name;
        productInfoDivDiv.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement("figure");
        productInfoDiv.appendChild(productInfoFigure);
    
        const addToCart = document.createElement("img");
        addToCart.src = "./icons/bt_add_to_cart.svg";
        productInfoFigure.appendChild(addToCart);
    }
}
renderProducts();

function ftoggleMobileMenu() {
    const isAsideClosed = toggleAsideMenu.classList.contains("toggle-aside-menu");
    if (!isAsideClosed) {
        toggleAsideMenu.classList.toggle("toggle-aside-menu");
    }toggleMobileMenu.classList.toggle("toggle-mobile-menu");

}

function ftoggleDesktopMenu() {
    const isAsideClosed = toggleAsideMenu.classList.contains("toggle-aside-menu");
    if (!isAsideClosed) {
        toggleAsideMenu.classList.toggle("toggle-aside-menu");
    }
    toggleDesktopMenu.classList.toggle("toggle-desktop-menu");
}

function ftoggleAsideMenu() {
    const isMobileClosed = toggleMobileMenu.classList.contains("toggle-mobile-menu");
    if (!isMobileClosed) {
        toggleMobileMenu.classList.toggle("toggle-mobile-menu");
    }
    const isDesktopClosed = toggleDesktopMenu.classList.contains("toggle-desktop-menu");
    if (!isDesktopClosed) {
        toggleDesktopMenu.classList.toggle("toggle-desktop-menu");
    }
    toggleAsideMenu.classList.toggle("toggle-aside-menu");
}