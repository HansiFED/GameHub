

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



