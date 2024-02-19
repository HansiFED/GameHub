


function gamePageBuilder () {
   let localStorageGame = JSON.parse(localStorage.getItem('gameInfo'));
   console.log(localStorageGame);
   gamePageHTML(localStorageGame);
}



function gamePageHTML (localStorageGame) {
    let gameTitle = document.getElementById('gametitle')
    let gameDesc = document.getElementById('gameshortdesc')
    let gamePrice = document.getElementById('pricetag')
    let mainGameImage = document.getElementById('mainimage')

    console.log(localStorageGame);
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