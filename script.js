function init() {
    includeHTML();
}

function toggleCheckbox(checkboxImg) {
    const currentSrc = checkboxImg.src;

    if (currentSrc.endsWith('rectangle.svg')) {
        checkboxImg.src = '/assets/svg/checkmark.svg';
    } else {
        checkboxImg.src = '/assets/svg/rectangle.svg';
    }
}

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

function setSideMenuCharacters() {
    let sideMenuCharacters = localStorage.getItem('sideMenuCharacters');
    document.getElementById('smBtn').innerHTML = sideMenuCharacters;
}

function showPrivacyPolicy() {
  document.getElementById('mobileTamplateContent').style.display = 'none';
}

function showLegalNotice() {
  
}