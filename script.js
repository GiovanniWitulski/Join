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
    let sideMenu = document.getElementById("sideMenu");
    sideMenu.classList.toggle("side-menu-open");
  
  document.addEventListener('click', handleClickOutside);
}

function dNoneSideMenu() {
  let sideMenu = document.getElementById("sideMenu");

  setTimeout(() => {
    sideMenu.classList.add("d-none");
}, 1000);
}

function handleClickOutside(event) {
  let sideMenu = document.getElementById("sideMenu");
  let smBtn = document.getElementById("smBtn");

  if (!sideMenu.contains(event.target) && event.target !== smBtn) {
    sideMenu.classList.remove("side-menu-open");
    document.removeEventListener('click', handleClickOutside);
  }
}

async function setSideMenuCharacters() {
  let sideMenuCharacters = localStorage.getItem('sideMenuCharacters');
  document.getElementById('smBtn').innerHTML = sideMenuCharacters;

  if (sideMenuCharacters === null) {
    document.getElementById('smBtn').innerHTML = 'G';
  }
}

function highlightNavigationButton() {
  let pfad = window.location.pathname; 

  let menuLinks = document.querySelectorAll('.menu-links');
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


function greetingMsg() {
  let greetingElement = document.getElementById('greetingMsgAnimation');
  if (localStorage.getItem('isSignedUp') === 'true') {
    let userName = localStorage.getItem('userName');
    let greetingMsg = getTimeOfDayGreeting();
    if (greetingMsg != null) {
        greetingElement.innerHTML = `${greetingMsg} ${userName}`;
        greetingElement.classList.add('greetingMsgAnimation');
    }
    greetingElement.addEventListener('animationend', () => {
      localStorage.removeItem('isSignedUp');
      greetingElement.classList.remove('greetingMsgAnimation');
      greetingElement.style.display = 'none';
  }); 
  } else {
    greetingElement.style.display = 'none'; 
}
}

function getTimeOfDayGreeting() {
  let now = new Date();
  let hour = now.getHours();
  if (hour >= 5 && hour < 12) {
    return `Good Morning`;
  } else if (hour >= 12 && hour < 18) {
    return `Good Afternoon`;
  } else if (hour > 18) {
    return `Good Evening`;
  } else {
    return null;
  }
}

function backToLoginPage() {
  history.back();
}