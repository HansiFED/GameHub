
import { addToCart } from "./addtocart.mjs";
import { createCart } from "./addtocart.mjs";

createCart();

let localStorageGame = JSON.parse(localStorage.getItem('gameInfo'));


function gamePageBuilder () {
   let localStorageGame = JSON.parse(localStorage.getItem('gameInfo'));
   gamePageHTML(localStorageGame);
}



function gamePageHTML (localStorageGame) {
    let gameTitle = document.getElementById('gametitle')
    let gameDesc = document.getElementById('gameshortdesc')
    let gamePrice = document.getElementById('pricetag')
    let mainGameImage = document.getElementById('mainimage')

    gameTitle.innerHTML = localStorageGame.title;
    gameDesc.innerHTML = localStorageGame.description;
    if (localStorageGame.onSale) {
        gamePrice.innerHTML= `${localStorageGame.discountedPrice} $`;
    } else {
        gamePrice.innerText = `${localStorageGame.price} $`;
    }
    mainGameImage.setAttribute('src', localStorageGame.image.url);
}



gamePageBuilder();


let addToCartButton = document.getElementById('addtocart');

addToCartButton.addEventListener('click', () => {
    addToCart(localStorageGame);
})