import { removeFromCartAndUpdateStorage } from "./remove.mjs";
import { updateCartTotal } from "./updateCartTotal.mjs";

export function createCart (game) {
    const cartExists = localStorage.getItem('cart');
    if (!cartExists) {
        localStorage.setItem('cart', JSON.stringify([]));
        console.log("No cart, Cart has been added");
    }
}


export function addToCart (game) {
    console.log('Add to cart', game);
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemIndex = cart.findIndex((currentGame) => {
        if (game.id === currentGame.id) {
            return true; 
        }   else {
            return false;
        }
    });

    if (itemIndex === -1 ) {
        cart.push({...game, quantity: 0});
    } else {
        cart[itemIndex].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
}


const shoppingcart = JSON.parse(localStorage.getItem('cart'));

export function removeCartItem(event){
    const buttonClicked = event.target

    let idContainer = buttonClicked.parentElement;

    let itemId = idContainer.getAttribute('data-game-id');

    removeFromCartAndUpdateStorage(itemId);

    buttonClicked.parentElement.remove();

}



export function clearCart () {
    localStorage.removeItem('cart');
    alert('Thank you for your purchase. Your cart has been cleared.');
}



