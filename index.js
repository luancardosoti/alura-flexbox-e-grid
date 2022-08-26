const buttonMenu = document.querySelector('.header__menu');
const elementAside = document.getElementById("aside");
buttonMenu.addEventListener('click', () => {
  const asideIsActive = elementAside.className?.includes("aside--active");

  if(asideIsActive) {
    elementAside.className = "aside";
  } else {
    elementAside.className = "aside aside--active";
  }
});
