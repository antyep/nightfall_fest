document.addEventListener("DOMContentLoaded", function () {
  fixedNavigation();
  createGallery();
  linkHighlight();
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

function linkHighlight() {
  console.log(`Scroll Y: ${window.scrollY}`);
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-navigation a");

    let current = "";
    sections.forEach((section) => {
      console.log(
        `Section Top: ${section.offsetTop}, Section Height: ${section.offsetHeight}`
      );
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
}
