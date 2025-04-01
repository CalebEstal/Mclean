let currentProject = "";
let currentIndex = 0; // Track the current image index
let intervalId = null; // Store the interval ID
const projects = {
  project1: [
    "./assets/images/Deck-Photos/Deck 1.jpg",
    "./assets/images/deck-Photos/deck 2.jpg",
    "./assets/images/deck-Photos/deck 3.jpg",
    "./assets/images/deck-Photos/deck 4.jpg",
    "./assets/images/deck-Photos/deck 5.jpg",
    "./assets/images/deck-Photos/deck 6.jpg",
    "./assets/images/deck-Photos/deck 7.jpg",
    "./assets/images/deck-Photos/deck 8.jpg",
    "./assets/images/deck-Photos/deck 9.jpg",
    "./assets/images/deck-Photos/deck 10.jpg",
    "./assets/images/deck-Photos/deck 11.jpg",
    "./assets/images/deck-Photos/deck 12.jpg",
    "./assets/images/deck-Photos/deck 13.jpg",
    "./assets/images/deck-Photos/deck 14.jpg",
    "./assets/images/deck-Photos/deck 15.jpg",
    "./assets/images/deck-Photos/deck 16.jpg",
    "./assets/images/deck-Photos/deck 17.jpg",
    "./assets/images/deck-Photos/deck 18.jpg",
    "./assets/images/deck-Photos/deck 19.jpg",
  ],
  project2: [
    "./assets/images/Entertainment-Center/1.jpg",
    "./assets/images/Entertainment-Center/2.jpg",
  ],
  // Add more projects as needed
};

function openSlideshow(project) {
  currentProject = project;
  currentIndex = 0; // Reset the index to the first image
  const images = projects[project];
  document.getElementById("slideshow-image").src = images[currentIndex];
  document.getElementById("slideshow-modal").style.display = "block";

  // Start cycling through images every 3 seconds
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length; // Cycle to the next image
    document.getElementById("slideshow-image").src = images[currentIndex];
  }, 3000); // Change the duration as needed (3000ms = 3 seconds)
}

function closeSlideshow() {
  document.getElementById("slideshow-modal").style.display = "none";
  clearInterval(intervalId); // Stop the image cycling when the slideshow is closed
}

document.addEventListener("click", function (e) {
  if (e.target.matches(".modal")) {
    closeSlideshow();
  }
});

// Optional: Add navigation to switch images
document.addEventListener("keydown", function (e) {
  const images = projects[currentProject];
  if (e.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("slideshow-image").src = images[currentIndex];
  } else if (e.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("slideshow-image").src = images[currentIndex];
  }
});
