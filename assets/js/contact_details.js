const menuButton = document.querySelector('.more-btn');
const sideMenu = document.querySelector('.edit-menu-sb');

menuButton.addEventListener('click', () => {
sideMenu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
    sideMenu.classList.remove('show'); 
}
});
