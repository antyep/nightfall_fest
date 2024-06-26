document.addEventListener("DOMContentLoaded", function () {
  fixedNavigation();
  createGallery();
  linkHighlight();
  scrollNav();
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
    const image = document.createElement("PICTURE");
    image.innerHTML = `
    <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="gallery image">
`;

    image.onclick = function () {
      showImage(i);
    };

    gallery.appendChild(image);
  }

  function showImage(i) {
    const image = document.createElement("PICTURE");
    image.innerHTML = `
    <source srcset="build/img/gallery/event/${i}.avif" type="image/avif">
    <source srcset="build/img/gallery/event/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="build/img/gallery/event/${i}.jpg" alt="gallery image">
`;

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
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-navigation a");

    let current = "";
    sections.forEach((section) => {
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

function scrollNav() {
  const navLinks = document.querySelectorAll(".main-navigation a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionScroll = e.target.getAttribute("href");
      const section = document.querySelector(sectionScroll);

      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}
