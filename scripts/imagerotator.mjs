

  // List of image URLs
  var images = [
    "./images/game_images/reddeadcover.jpg",
    "./images/game_images/22222.jpg", 
    "./images/game_images/baldursgate.jpg", 
    "./images/game_images/hunt.jpg",
    "./images/game_images/isaac.jpg",
    "./images/game_images/jedi.jpg",
    "./images/game_images/payday.jpg",
    "./images/game_images/ratchet.jpg",
    "./images/game_images/spmann.jpg",

    ]; // Add more image URLs as needed

  // Counter to keep track of the current image
  var currentImageIndex = 0;

  // Function to rotate the images
  function rotateImage() {
    // Update the src attribute of the image element
    document.getElementById("imagebackround").src = images[currentImageIndex];
    
    // Increment the counter
    currentImageIndex ++;
    
    // Reset the counter if it exceeds the number of images
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
  }

  // Call rotateImage function every 3 seconds (adjust as needed)
  setInterval(rotateImage, 10000); // Change the time interval (in milliseconds) as needed
