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
  let greetingMsg = getTimeOfDayGreeting();
  greetingElement = document.getElementById('greetingMsgAnimation');
  if (greetingMsg != null) {
      greetingElement.innerHTML = greetingMsg;
  } else {
      greetingElement.style.display = 'none'; 
  }

  localStorage.removeItem("welcomeMsg"); 
  
  greetingElement.addEventListener('animationend', () => {
      greetingElement.classList.remove('greetingMsgAnimation');
      greetingElement.style.display = 'none';
  });
}

function getTimeOfDayGreeting() {
  let welcomneMsg = localStorage.getItem('welcomeMsg');
  let now = new Date();
  let hour = now.getHours();
  if (welcomneMsg != null && hour >= 5 && hour < 12) {
    return `Good Morning ${welcomneMsg}`;
  } else if (welcomneMsg && hour >= 12 && hour < 18) {
    return `Good Afternoon ${welcomneMsg}`;
  } else if (welcomneMsg && hour > 18) {
    return `Good Evening ${welcomneMsg}`;
  } else {
    return null;
  }
}