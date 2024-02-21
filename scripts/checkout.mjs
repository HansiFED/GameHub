import { createCart } from "./addtocart.mjs"
createCart();


const shoppingcart = JSON.parse(localStorage.getItem('cart'));


//Make HTML for each element 
//Append the elements so that they show on the page





function generateCheckoutHtml () {
    if (localStorage.getItem('cart') !== '[]') {

        
        let main = document.querySelector('main');
        let mainCheckoutContainer = document.createElement('div');
        let emptyCartText = document.getElementById('emptycartheader1');
        let addGamesText = document.getElementById('addgamestocart');
        addGamesText.remove();
        emptyCartText.innerText = 'Your shopping cart:'
        document.getElementById('textcontainercheckout').style.paddingBottom = '10vh';



        shoppingcart.forEach((element) => {

            //Create all the neccessary elements for the shoppingcart items
            let elementBox = document.createElement('div');
            let imageCreator = document.createElement('img');
            let checkoutGameTitle = document.createElement('h3');
            let checkoutGamePrice = document.createElement('p');
            let checkoutGamePriceCheck = () => {
            if (element.onSale) {
                return element.discountedPrice;
            } else {
                return element.price; }}


            let checkoutRemoveButton = document.createElement('button');
            let gamePriceTotal = document.createElement('p');


        

            //Assign them the right values
            imageCreator.src = element.image.url;
            checkoutGameTitle.innerText = element.title;
            checkoutGamePrice.innerText =  `Price: ${checkoutGamePriceCheck()}$`
            checkoutRemoveButton.innerText = 'Remove';
            gamePriceTotal.innerText = element.price * element.quantity;
            



            //Append everything to where it belongs
            elementBox.append(imageCreator, checkoutGameTitle, checkoutGamePrice, checkoutRemoveButton);
            mainCheckoutContainer.append(elementBox);
            main.append(mainCheckoutContainer);



            //Assign them the right classes for CSS manipulation. 
            imageCreator.classList = 'checkoutImages';
            elementBox.classList = 'elementbox';





        });
    } 
}

generateCheckoutHtml();