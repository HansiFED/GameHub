

export function indexGameHtmlBuilder (game) {


	const gameRow1 = document.getElementById('GamesList');

	gameRow1.innerHTML = "";


	game.forEach(game => {

		// Here I create the elements neccessary for the games. 

		const listCreate = document.createElement('li');
		const imageCreate = document.createElement('img');
		const gameTitle = document.createElement('p')
		const priceCreate = document.createElement('p');


		//Here i change the elements to what I want them to contain / be. 

		imageCreate.setAttribute('src', game.image.url);
		imageCreate.setAttribute('alt', game.title);
		listCreate.append(imageCreate);
		gameTitle.innerText = game.title;
		if (game.onSale) {
			priceCreate.innerText = `Sale: ${game.discountedPrice} $`;
			priceCreate.className = 'gameonSale';
		} else {
			priceCreate.innerText = `${game.price} $`;
		}
		gameTitle.className = 'gametitle';
		console.log(listCreate);
		listCreate.append(gameTitle);
		listCreate.appendChild(priceCreate);
		gameRow1.append(listCreate);


	});
}