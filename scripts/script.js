


const noroffAPI = "https://v2.api.noroff.dev/gamehub";


// fetch URL(noroffAPI);


// console.log(noroffAPI.json());


let gamesArr = [];

let gameListClassSelector = document.getElementsByClassName('TopSellerGames');

console.log(gamesArr);



 for (let i = 0; i < gamesArr.length; i++) {
    
    let testTemplate = `<li><img src="${gamesArr.data[i].image}" alt="game cover" /></li>`




 }


    console.log(gameListClassSelector);
 
// const start = async(url) => {
//     try {
//         let response = await fetch(url);
//         let movies = await response.json();
//         listMovies(movies.data);
//         createSortButton(movies.data);
//         console.log(movies.data);
//     } catch (error) {
//         console.error("Could not fetch data from API" + error);
//     }
// }

// start(apiUrl);



