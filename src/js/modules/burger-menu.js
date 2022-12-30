export default function burger() {
  const iconMenu = document.querySelector(".menu__icon");
  const bodyMenu = document.querySelector(".menu__body");

  if (iconMenu) {
    iconMenu.addEventListener("click", () => {
      iconMenu.classList.toggle("_active");
      bodyMenu.classList.toggle("_menu-open");
    });
  }
}
