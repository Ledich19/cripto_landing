export default function burger() {
  const iconMenu = document.querySelector("#menu-icon");
  const bodyMenu = document.querySelector("#menu-body");

  if (iconMenu) {
    iconMenu.addEventListener("click", () => {
      iconMenu.classList.toggle("_active");
      bodyMenu.classList.toggle("_menu-open");
    });
  }
}
