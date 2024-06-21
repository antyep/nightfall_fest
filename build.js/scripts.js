document.addEventListener("DOMContentLoaded", function () {
  createGallery();
});

function createGallery() {
  const IMAGE_QUANTITY = 16;
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= IMAGE_QUANTITY; i++) {
    const image = document.createElement("IMG");
    image.src = `./src/img/gallery/event/${i}.jpg`;
    image.alt = "gallery img";
    console.log(image);

    image.onclick = function () {
      showImage(i);
    };

    gallery.appendChild(image);
  }

  function showImage(i) {
    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = closeModal;

    const body = document.querySelector("body");
    body.appendChild(modal);
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");

  modal?.remove();
}
