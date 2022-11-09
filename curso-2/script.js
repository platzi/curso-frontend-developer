const burgerIcon = document.getElementById("burger-icon")
const emailAnchorMobile = document.getElementById("email-anchor-mobile");
const emailAnchorDesktop = document.getElementById("email-anchor-desktop");
const shoppingAnchor = document.getElementById("shopping-anchor"); 
burgerIcon.addEventListener("click", ftoggleMobileMenu);
emailAnchorMobile.addEventListener("click", ftoggleMobileEmail);
emailAnchorDesktop.addEventListener("click", ftoggleDesktopEmail);
shoppingAnchor.addEventListener("click", ftoggleAsideMenu);

const toggleNav = document.querySelector(".toggle-nav");
const toggleMobileMenu = document.querySelector(".toggle-mobile-menu");
const toggleMobileEmail = document.querySelector(".toggle-mobile-email");
const toggleDesktopEmail = document.querySelector(".toggle-desktop-email");
const toggleAsideMenu = document.querySelector(".toggle-aside-menu");

const shoppingCounter = document.getElementById("shopping-counter");
const closeProductDetail = document.getElementById("close-product-detail");
closeProductDetail.addEventListener("click", closeAsideMenu);
const myOrderContent = document.querySelector(".my-order-content");
const totalPrice = document.getElementById("total-price");

const cardsContainer = document.getElementById("cards-container");
const productList = [];
const shoppingList = [];
let itemCounter = 0;
productList.push({
    classname: "scooter-skate",
    fullname: "Scooter (skate)",
    description: "A skating scooter is a street vehicle with a handlebar, deck, and wheels propelled by a rider pushing off the ground with their leg.",
    img: "https://images.pexels.com/photos/3671151/pexels-photo-3671151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 100
})
productList.push({
    classname: "roller-skates",
    fullname: "Rollerskates",
    description: "Freeskates consist of two separate metal or wooden plates with two wheels attached. Freeskating is practiced around the world.",
    img: "https://media.istockphoto.com/id/182383572/es/foto/pat%C3%ADn-en-l%C3%ADnea.jpg?s=1024x1024&w=is&k=20&c=kKH67u3hYuxv6_Tx8dEI2zhWrq5iS7zmI-XlJF-9X0k=",
    price: 125
})
productList.push({
    classname: "skateboard",
    fullname: "Skateboard",
    description: "A type of sports equipment used for skateboarding. The skateboard must be concaved to perform tricks.",
    img: "https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 150
})
productList.push({
    classname: "bike",
    fullname: "Bike",
    description: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace.",
    img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    price: 240
})
productList.push({
    classname: "scooter-bike",
    fullname: "Scooter (bike)",
    description: "A motorcycle with an underbone or step-through frame, a seat, and a platform for the rider's feet, emphasizing comfort and fuel economy.",
    img: "https://images.pexels.com/photos/159192/vespa-roller-motor-scooter-cult-159192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 360
})
productList.push({
    classname: "motorcycle",
    fullname: "Motorcycle",
    description: "This vehicle serves a range of different purposes: long-distance travel, commuting, cruising, sport (including racing), and off-road riding.",
    img: "https://images.pexels.com/photos/2626665/pexels-photo-2626665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 540
})
productList.push({
    classname: "kart",
    fullname: "Kart",
    description: "Go-karts come in all shapes and forms, from non-motorised models to high-performance racing karts.",
    img: "https://media.istockphoto.com/id/509793078/es/foto/go-kart.jpg?s=1024x1024&w=is&k=20&c=TwJCxnayGmr3CmrCae9C76-cB6BHlPgeD3OqOxyVwf0=",
    price: 720
})
productList.push({
    classname: "quad",
    fullname: "Quad",
    description: "A vehicle that travels on low-pressure tires, as the name implies, it is designed to handle a wider variety of terrain than most other vehicles.",
    img: "https://media.istockphoto.com/id/485397116/es/foto/potente-moderna-atv.jpg?s=1024x1024&w=is&k=20&c=vh9h38qojbMXjaYpTEahA9xgOmeLU1k9rJ0t3AgFojU=",
    price: 999
})
    // let cardFiller = "";
    // cardFiller += `
    // <div class="product-card">
    //   <img src=${product.img} alt="">
    //   <div class="product-info">
    //     <div>
    //     <p>${product.fullname}</p>
    //     <p>${product.price}$</p>
    //     </div>
    //     <figure>
    //       <img src="./icons/bt_add_to_cart.svg" alt="">
    //     </figure>
    //   </div>
    // </div>
    // `
    // cardsContainer.innerHTML = cardFiller;

let clicky = false;
function renderProducts() {
    for (product of productList) {
        const productCardDiv = document.createElement("div");
        productCardDiv.classList.add("product-card");
        cardsContainer.appendChild(productCardDiv);
    
        const productImg = document.createElement("img");
        productImg.title = product.fullname;
        productImg.src = product.img;
        productImg.style.cursor = "pointer";
        productCardDiv.appendChild(productImg);

        const productDescription = document.createElement("div");
        productDescription.classList.add("product-description");
        productDescription.classList.add("toggle-product-description");
        if (window.innerWidth > 640) {
            productDescription.style.position = "absolute";
            productDescription.style.top = "25%";
        }
        productDescription.style.borderRadius = "5%";
        productCardDiv.appendChild(productDescription);

        const figureClose = document.createElement("figure");
        figureClose.classList.add("product-description-close");
        productDescription.appendChild(figureClose);

        const xclose = document.createElement("img");
        xclose.setAttribute("id", `${product.classname}-close`);
        xclose.setAttribute("src", "./icons/icon_close_black.png");
        xclose.setAttribute("alt", "close");
        figureClose.appendChild(xclose);

        const productDescriptionImg = document.createElement("img");
        productDescriptionImg.setAttribute("src", `${product.img}`);
        productDescriptionImg.setAttribute("alt", `${product.fullname}`);
        productDescriptionImg.style.objectFit = "contain";
        productDescription.appendChild(productDescriptionImg);

        const productDescriptionInfo = document.createElement("div");
        productDescriptionInfo.classList.add("product-description-info");
        productDescriptionInfo.style.flexDirection = "column";
        productDescriptionInfo.style.alignItems = "center";
        productDescriptionInfo.style.width = "100%";
        productDescriptionInfo.style.textAlign = "center";
        productDescriptionInfo.style.padding = "1rem";
        productDescriptionInfo.style.background = "lightcyan";
        productDescription.appendChild(productDescriptionInfo);

        const productDescriptionInfoPrice = document.createElement("p");
        productDescriptionInfoPrice.innerText = `${product.price}` + "$";
        productDescriptionInfo.appendChild(productDescriptionInfoPrice);

        const productDescriptionInfoName = document.createElement("p");
        productDescriptionInfoName.innerText = `${product.fullname}`;
        productDescriptionInfo.appendChild(productDescriptionInfoName);

        const productDescriptionInfoText = document.createElement("p");
        productDescriptionInfoText.innerText = `${product.description}`;
        productDescriptionInfo.appendChild(productDescriptionInfoText);

        const productButton = document.createElement("button");
        // productButton.innerText = "Add to cart";
        productButton.classList.add("primary-button");
        productButton.classList.add("add-to-cart-button");
        productDescriptionInfo.appendChild(productButton);
        productButton.addEventListener("click", addItemToCart);


        const cartFigure = document.createElement("figure");
        productButton.appendChild(cartFigure);

        const cartImg = document.createElement("img");
        cartImg.classList.add("add-to-cart");
        cartImg.setAttribute("alt", "add to cart")
        cartImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
        cartFigure.appendChild(cartImg);

        // productDescription.innerHTML = `
        // <figure class="product-description-close">
        //   <img src="./icons/icon_close_black.png" id="x-${product.classname}" alt="close">
        // </figure>
        // <img src=${product.img} alt=${product.fullname}>
        // <div class="product-description-info">
        //   <p>${product.price}$</p>
        //   <p>${product.fullname}</p>
        //   <p>${product.description}</p>
        //   <button class="primary-button add-to-cart-button">
        //     <figure>
        //       <img src="./icons/bt_add_to_cart.svg" class="add-to-cart" alt="add to cart">
        //     </figure>
        //     Add to cart
        //   </button>
        // </div>
        //     `
        xclose.addEventListener("click", () => {
            productDescription.style.width = "360px";
            productDescription.style.height = "auto";
            productDescription.classList.toggle("toggle-product-description");
            cardsContainer.style.gap = "16px 12px";
            clicky = false;
        })

        productImg.addEventListener("click", () => {
            if (!clicky) {
                toggleAsideMenu.classList.add("toggle-aside-menu");
                toggleMobileEmail.classList.add("toggle-mobile-email");
                toggleDesktopEmail.classList.add("toggle-desktop-email");
                if (window.innerWidth < 640) {
                    productDescription.style.width = "90vw";
                    productDescription.style.height = "90vh";
                } else {
                    productDescription.style.width = "60vw";
                    productDescription.style.height = "60vh";
                }
                productDescription.classList.toggle("toggle-product-description");
                cardsContainer.style.gap = "16px 1px";
                clicky = true;
            }
        })
    
        const productInfoDiv = document.createElement("div");
        productInfoDiv.classList.add("product-info");
        productCardDiv.appendChild(productInfoDiv);
    
        const productInfoDivDiv = document.createElement("div");
        productInfoDiv.appendChild(productInfoDivDiv);
    
        const productInfoPrice = document.createElement("p");
        productInfoPrice.innerText = product.price + "$";
        productInfoDivDiv.appendChild(productInfoPrice);
    
        const productInfoName = document.createElement("p");
        productInfoName.innerText = product.fullname;
        productInfoDivDiv.appendChild(productInfoName);
    
        const productInfoFigure = document.createElement("figure");
        productInfoDiv.appendChild(productInfoFigure);
    
        const addToCart = document.createElement("img");
        addToCart.classList.add("mini-add-to-cart");
        addToCart.price = `${product.price}`; 
        addToCart.classname = `${product.classname}`;
        addToCart.fullname = `${product.fullname}`;
        addToCart.itemimg = `${product.img}`;
        addToCart.description = `${product.description}`;
        addToCart.src = "./icons/bt_add_to_cart.svg";
        productInfoFigure.appendChild(addToCart);

        function addItemToCart() {
            /* <div class="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
            </figure>
            <p>Bike</p>
            <p>$30,00</p>
            <img src="./icons/icon_close_black.png" alt="close">
            </div> */
            itemCounter++;
            shoppingList.push({
                classname: addToCart.classname,
                fullname: addToCart.fullname,
                id: addToCart.classname + itemCounter,
                description: addToCart.description,
                img: addToCart.itemimg,
                price: addToCart.price
            })
            const itemID = addToCart.classname + itemCounter;
            console.log(itemID);
            let total = 30;
            for (item of shoppingList) {
                total += +item.price;
            }
            console.log(total);
            shoppingCounter.innerText = shoppingList.length + 1;
            totalPrice.innerText = "$" + total;

            console.log(addToCart.fullname);
            console.log(addToCart.price);
            const shoppingCart = document.createElement("div");
            shoppingCart.classList.add("shopping-cart")
            myOrderContent.appendChild(shoppingCart);

            const shoppingFigure = document.createElement("figure");
            shoppingCart.appendChild(shoppingFigure);

            const shoppingItemImg = document.createElement("img");
            shoppingItemImg.src = addToCart.itemimg;
            shoppingItemImg.alt = addToCart.fullname;
            shoppingFigure.appendChild(shoppingItemImg);

            const shoppingItemName = document.createElement("p");
            shoppingItemName.innerText = addToCart.fullname;
            shoppingCart.appendChild(shoppingItemName);

            const shoppingItemPrice = document.createElement("p");
            shoppingItemPrice.innerText = "$" + addToCart.price;
            shoppingCart.appendChild(shoppingItemPrice);

            const shoppingItemClose = document.createElement("img");
            shoppingItemClose.style.cursor = "pointer";
            
            shoppingItemClose.alt = "remove item";
            shoppingItemClose.src = "./icons/icon_close_black.png";
            shoppingCart.appendChild(shoppingItemClose);
            shoppingItemClose.addEventListener("click", () => {
                console.log("remove: " + itemID);
                myOrderContent.removeChild(shoppingCart);
                const itemIndex = shoppingList.findIndex((item) => item.id == itemID);
                if (itemIndex >= 0) {
                    console.log(itemIndex);
                    shoppingList.splice(itemIndex, 1);
                }

                let total = 30;
                for (item of shoppingList) {
                    total += +item.price;
                }
                console.log(total);
                shoppingCounter.innerText = shoppingList.length + 1;
                totalPrice.innerText = "$" + total;
            })
            toggleAsideMenu.classList.remove("toggle-aside-menu");
        }
        addToCart.addEventListener("click", addItemToCart);
    }
}
renderProducts();

function ftoggleMobileMenu() {
    toggleMobileEmail.classList.add("toggle-mobile-email");
    toggleAsideMenu.classList.add("toggle-aside-menu");
    toggleMobileMenu.classList.toggle("toggle-mobile-menu");
}
function ftoggleMobileEmail() {
    toggleMobileMenu.classList.add("toggle-mobile-menu");
    toggleAsideMenu.classList.add("toggle-aside-menu");
    toggleMobileEmail.classList.toggle("toggle-mobile-email");
}
function ftoggleAsideMenu() {
    toggleMobileMenu.classList.add("toggle-mobile-menu");
    toggleMobileEmail.classList.add("toggle-mobile-email");
    toggleDesktopEmail.classList.add("toggle-desktop-email");
    toggleAsideMenu.classList.toggle("toggle-aside-menu");
}
function ftoggleDesktopEmail() {
    toggleAsideMenu.classList.add("toggle-aside-menu");
    toggleDesktopEmail.classList.toggle("toggle-desktop-email");
}
function closeAsideMenu() {
    toggleAsideMenu.classList.add("toggle-aside-menu");
}