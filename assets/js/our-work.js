const carousel = document.getElementById("carousel");
let scrollAmount = 0;

function autoScrollCarousel() {
  const cardWidth = 300 + 24; // 300px width + 1.5rem gap (24px)
  scrollAmount += cardWidth;

  if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
    scrollAmount = 0;
  }

  carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
}

setInterval(autoScrollCarousel, 3000);
