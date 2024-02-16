
// User Stories
// - As a user, I want to view a list of products on the homepage.
// - As a user, I want to filter products by category, gender or genre.
// - As a user, I want to view a single product page with more detail.
// - As a user, I want to add a product to my basket.
// - As a user, I want to remove a product from my basket.
// - As a user, I want to view a summary of my cart on the checkout page.
// - As a user, I want to view an order-confirmation screen after checking out.


// Required Pages
// The following pages are required to complete this assignment.

// - Home Page containing product list `/index.html`
// - Product Page showing all details of a specific product `/product/index.html`
// - Checkout Page showing all items in the basket `/checkout/index.html`
// - Confirmation Page showing a thank you message `/checkout/confirmation/index.html`


// Create HTML for each element

// Append each element to the DOM 

// 




import { noroffGameAPI } from "./constants.mjs"; 
import { myFetcher } from "./fetcher.mjs"; 



// function displayHTML (gamehtml) {

// 	const gameRow1 = document.getElementById('GamesList');
// 	const gameRow2 = document.getElementById('GamesList2');
// 	const gameRow3 = document.getElementById('GamesList3');

// 	gameRow1.append(gamehtml);
// 	gameRow2.append(gamehtml);
// 	gameRow3.append(gamehtml);

// 	console.log(gameRow1, gameRow2, gameRow3);
	

// }



// Takes a game argument, in this case the object data from the API and 
// Creates an <li> item and nests a <img> with the src and alt
// attribute to match the game its creating an <img> for, and then
// appends that to the DOM. 

function indexGameHtmlBuilder (game) {

	const gameRow1 = document.getElementById('GamesList');


	game.forEach(game => {


		const listCreate = document.createElement('li');
		const imageCreate = document.createElement('img');
		imageCreate.setAttribute('src', game.image.url);
		imageCreate.setAttribute('alt', game.title);
		listCreate.append(imageCreate);
		console.log(listCreate);

		gameRow1.append(listCreate);


	});
}






const main = async function () {
	try {
		const games = await myFetcher(noroffGameAPI);
		const gameObjects = games.data;
		console.log('The object information', games);
		console.log('The different objects', gameObjects);
		indexGameHtmlBuilder(gameObjects);
		// displayHTML(gameObjects);
		



	} catch (error) {
		console.error(error);
	}
}

main();