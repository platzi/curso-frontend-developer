const navBarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenuBotton = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const productDetail = document.querySelector(".product-detail");
const navBarShoppingCart = document.querySelector(".navbar-shopping-cart");
const cardsContainer= document.querySelector('.cards-container');
const productDetailAside = document.querySelector('.product-detail-aside')
const productDetailAsideClose = document.querySelector('.product-detail-aside-close')



navBarEmail.addEventListener("click", toggleDesktopMenuEmail);
mobileMenuBotton.addEventListener("click", toggleMobileMenu);
navBarShoppingCart.addEventListener("click", toggleOrderInCart);
productDetailAsideClose.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenuEmail() {
    desktopMenu.classList.toggle("inactive");
    if (!productDetail.classList.contains("inactive")){
        productDetail.classList.add("inactive")
    }
    productDetailAside.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    if (!productDetail.classList.contains("inactive")){
        productDetail.classList.add("inactive")
    }
    productDetailAside.classList.add('inactive');
}
function toggleOrderInCart(){
    productDetail.classList.toggle("inactive");
    if (!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.add("inactive")
    }
    if (!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.add("inactive")
    }
    productDetailAside.classList.add('inactive');
}
function openProductDetailAside(){
    productDetailAside.classList.remove('inactive');
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
    productDetail.classList.add("inactive");
}
function closeProductDetailAside(){
    productDetailAside.classList.add('inactive');
}


/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
    </div> */

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Cellphone",
    price: 300,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600",
});
productList.push({
    name: "Camera",
    price: 500,
    image: "https://images.pexels.com/photos/2294897/pexels-photo-2294897.jpeg?auto=compress&cs=tinysrgb&w=600",
})

function renderProducts(array){
    for (product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
        productCard.appendChild(productImage);
        productImage.addEventListener('click', openProductDetailAside);
    
        const productInfoDiv = document.createElement('div');
        productInfoDiv.classList.add('product-info');
        productCard.appendChild(productInfoDiv);
    
        const productInfoDivDiv = document.createElement('div');
        productInfoDiv.appendChild(productInfoDivDiv);
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        productInfoDivDiv.appendChild(productPrice);
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
        productInfoDivDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        productInfoDiv.appendChild(productInfoFigure);
    
        const imageAddToCart = document.createElement('img');
        imageAddToCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
        productInfoFigure.appendChild(imageAddToCart);
    
        cardsContainer.appendChild(productCard); 
    }
}

renderProducts(productList);