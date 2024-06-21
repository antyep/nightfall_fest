document.addEventListener("DOMContentLoaded", function () {
  createGallery();
});

function createGallery() {
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= 16; i++) {
    const image = document.createElement("IMG");
    image.src = `./src/img/gallery/event/${i}.jpg`;
    image.alt = "gallery img";
    console.log(image);

    gallery.appendChild(image);
  }
}
