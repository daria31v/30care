const burgerIcon = document.getElementById("burger-menu-icon");
const mobileMenu = document.querySelector(".burger-overlay");

burgerIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-hidden');
});

document.addEventListener('click', (event) => {
  if (!mobileMenu.contains(event.target) && !burgerIcon.contains(event.target)) {
    mobileMenu.classList.add('is-hidden');
  }
});