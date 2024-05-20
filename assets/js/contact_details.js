const moreButton = document.querySelector('.more-btn');
const moreBtnMenu = document.querySelector('.edit-menu-sb');

moreButton.addEventListener('click', () => {
moreBtnMenu.classList.toggle('show');
});

document.addEventListener('click', (event) => {
if (!moreBtnMenu.contains(event.target) && !moreButton.contains(event.target)) {
    moreBtnMenu.classList.remove('show'); 
}
});



function displayContact(contactID){


}
