document.addEventListener("DOMContentLoaded", function () {
  fixedNavigation();
  createGallery();
});

function fixedNavigation() {
  const header = document.querySelector(".header");
  const aboutFest = document.querySelector(".about-fest");

  document.addEventListener("scroll", function () {
    if (aboutFest.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}

function createGallery() {
  const IMAGE_QUANTITY = 16;
  const gallery = document.querySelector(".gallery-img");

  for (let i = 1; i <= IMAGE_QUANTITY; i++) {
    const image = document.createElement("IMG");
    image.src = `./src/img/gallery/event/${i}.jpg`;
    image.alt = "gallery img";

    image.onclick = function () {
      showImage(i);
    };

    gallery.appendChild(image);
  }

  function showImage(i) {
    const image = document.createElement("IMG");
    image.src = `./src/img/gallery/event/${i}.jpg`;
    image.alt = "gallery img";

    const modal = document.createElement("DIV");
    modal.classList.add("modal");
    modal.onclick = closeModal;

    const closeModalButton = document.createElement("BUTTON");
    closeModalButton.textContent = "X";
    closeModalButton.classList.add("close-button");
    closeModalButton.onclick = closeModal;

    modal.appendChild(image);
    modal.appendChild(closeModalButton);

    const body = document.querySelector("body");
    body.classList.add("overflow-hidden");
    body.appendChild(modal);
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal?.remove();

    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}
