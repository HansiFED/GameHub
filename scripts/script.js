


const noroffAPI = "https://v2.api.noroff.dev/gamehub";





// async function doFetch(url) {
//    const data = await fetch(url);
//    const json = await data.json();
//    return json;
//  }


// let test1 = doFetch(noroffAPI);

// console.log(test1);




// // --------------------------------------------------------------------------------------





	// We fetch the data from the URL
	fetch('https://v2.api.noroff.dev/gamehub')
	  // We have to asynchronously parse the data into JSON
	  //   so we can make use of it
	  .then((response) => response.json())
	  // Data is now available as
	  .then((json) => console.log(json.data))






// -------------------------------------------------------------------------------
// // Try/catch/finally example
// // Let’s extend our API call example to include a try/catch block:

// // async function doFetch(url) {
// //    try {
// //      const data = await fetch(url);
// //      const json = await data.json();
// //      return json;
// //    } catch (error) {
// //      console.log(error);
// //    } finally {
// //      console.log('API call is done');
// //    }
// //  }
// -------------------------------------------------------------------------------