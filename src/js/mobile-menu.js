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

openMenuBtn.addEventListener("click", function() {
  if (mobileMenu.classList.contains("closed")) {
    mobileMenu.classList.remove("closed");
    mobileMenu.classList.add("is-open");
    menuIcon.setAttribute("href", "/symbol-defs.a8b2e413.svg#icon-close");
  } else {
    mobileMenu.classList.remove("is-open");
    mobileMenu.classList.add("closed");
    menuIcon.setAttribute("href", "/symbol-defs.a8b2e413.svg#icon-menu");
  }
});