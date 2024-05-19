function openSideMenu() {
    const sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("side-menu-open");

  document.addEventListener('click', handleClickOutside);
}

function handleClickOutside(event) {
  const sideMenu = document.getElementById("sideMenu");
  const smBtn = document.getElementById("smBtn");

  if (!sideMenu.contains(event.target) && event.target !== smBtn) {
    sideMenu.classList.remove("side-menu-open");
    document.removeEventListener('click', handleClickOutside);
  }
}