// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
  
//     const toggleMenu = () => {
//       const isMenuOpen =
//         openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     // Close the mobile menu on wider screens if the device orientation changes
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//     });
//   })();


const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const menuIcon = document.querySelector('.js-menu-icon');
const header = document.querySelector('.header');

openMenuBtn.addEventListener("click", function() {
  mobileMenu.classList.toggle("is-open");
  menuIcon.setAttribute("href", "/symbol-defs.a8b2e413.svg#icon-" + (mobileMenu.classList.contains("is-open") ? "close" : "menu"));
  if (mobileMenu.classList.contains("is-open")) {
    header.style.position = "fixed";
  } else {
    header.style.position = "absolute";
  }
});
