const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  });
  
  window.addEventListener("scroll", () => {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
  });

  // Swiper principal
  const swiper = new Swiper(".swiper", {
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // Swiper de peliculas
  const swiper2 = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay:3000,
      disableOnInteraction: 1,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      568: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 5,
      },
      968: {
        slidesPerView: 6,
      },
      
    },
  });