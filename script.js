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

  if (sideMenuCharacters === null) {
    document.getElementById('smBtn').innerHTML = 'G';
  }
}

function showPrivacyPolicy() {
  document.getElementById('mobileTamplateContent').style.display = 'none';
}

function showLegalNotice() {
  
}

function highlightNavigationButton() {
  let pfad = window.location.pathname; 

  const menuLinks = document.querySelectorAll('.menu-links');
  menuLinks.forEach(link => link.classList.remove('menu-links-focus'));

  if (pfad.includes('summary')) {
      document.getElementById('summaryBtn').classList.add('menu-links-focus');
  } else if (pfad.includes('add_task')) {
      document.getElementById('addTaskBtn').classList.add('menu-links-focus');
  } else if (pfad.includes('board')) {
      document.getElementById('boardBtn').classList.add('menu-links-focus');
  } else if (pfad.includes('contacts')) {
      document.getElementById('contactsBtn').classList.add('menu-links-focus');
  }
}

