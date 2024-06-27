
let newSurname;
let newLastName;
const moreButton = document.getElementById('more-button');
const moreBtnMenu = document.getElementById('edit-menu');

if (moreButton && moreBtnMenu) {
    function toggleMenu() {
        moreBtnMenu.classList.toggle('hide');
    }
    function closeMenuOnClickOutside(event) {
        if (!moreBtnMenu.contains(event.target) && !moreButton.contains(event.target)) {
            moreBtnMenu.classList.add('hide');
        }
    }
    moreButton.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
} 


async function loadCurrentContactId(){
    let userId = await loadData('currentContact');
    if(window.innerWidth >= 1250){
        await loadSingleContactDesktop(userId);
    }else{
        await loadSingleContact(userId);
    }
}


async function loadSingleContact(id){
    let user;
    for (let i = 0; i < contactsAsJson.length; i++) {
        const element = contactsAsJson[i];
        if (i == id){
            user = element;
        }
    }
    document.getElementsByClassName('name-headline')[0].innerHTML = `${user['vorname']} ${user['name']}`;
    document.getElementsByClassName('email')[0].innerHTML = `${user['mail']}`;
    document.getElementsByClassName('phone')[0].innerHTML = `${user['mobile']}`;
    document.getElementsByClassName('name-pic')[0].outerHTML = drawContactDetailPic(user);
    document.getElementsByClassName('del-btn')[0].outerHTML = `<button class="del-btn" onclick="deleteContact(${id})"></button>`
    document.getElementsByClassName('edit-btn')[0].outerHTML = `<button class="edit-btn" onclick="fillEditContactForm(${id})"></button>`
}


async function loadSingleContactDesktop(id){
    let user;
    for (let i = 0; i < contactsAsJson.length; i++) {
        const element = contactsAsJson[i];
        if (i == id){
            user = element;
        }
    }
    document.getElementsByClassName('name-headline')[0].innerHTML = `${user['vorname']} ${user['name']}`;
    document.getElementsByClassName('email')[0].innerHTML = `${user['mail']}`;
    document.getElementsByClassName('phone')[0].innerHTML = `${user['mobile']}`;
    document.getElementsByClassName('name-pic')[0].outerHTML = drawContactDetailPic(user);
    document.getElementsByClassName('del-btn')[0].outerHTML = `<button class="del-btn" onclick="deleteContact(${id})"></button>`
    document.getElementsByClassName('edit-btn')[0].outerHTML = `<button class="edit-btn" onclick="fillEditContactFormDesktop(${id})"></button>`
}


async function deleteContact(id){
    tokenToDelete = contactsAsJson[id]['id'];
    await deleteData(`contacts/${tokenToDelete}`);
    window.location.href = "/contacts.html";
}


function drawContactDetailPic(user){
    return `<svg class="name-pic" width="42px" height="42px"><circle cx="40" cy="40" r="40" stroke="white" stroke-width="2" fill="${user['color']}" />
    <text x="20" y="48" fill="white" font-size="27px">${user['vorname'].charAt(0)}${user['name'].charAt(0)}</text></svg>`;
}

async function drawContactEditPic(user){
    return `<svg class="contact-pic-edit" width="62px" height="62px"><circle class="circle" cx="60" cy="60" r="58" stroke="white" stroke-width="2" fill="${user['color']}" />
    <text class="circle-text" x="50%" y="55%" fill="white" font-size="47px">${user['vorname'].charAt(0)}${user['name'].charAt(0)}</text></svg>`;
}


async function drawContactEditPicDesktop(user){
    return `<svg id="editContactPic-desktop" class="contact-pic" width="62px" height="62px"><circle class="circle" cx="60" cy="60" r="58" stroke="white" stroke-width="2" fill="${user['color']}" />
    <text class="circle-text" x="20%" y="60%" fill="white" font-size="47px">${user['vorname'].charAt(0)}${user['name'].charAt(0)}</text></svg>`;
}


async function fillEditContactForm(id){
    idToFind = id;
    currentContact = contactsAsJson[idToFind];
    document.getElementById('contact-name').value = `${currentContact['vorname']} ${currentContact['name']}`;
    document.getElementById('contact-mail').value = `${currentContact['mail']}`;
    document.getElementById('contact-phone').value = `${currentContact['mobile']}`;
    document.getElementById('closeEditContactButton').outerHTML = `<button id="closeEditContactButton" class="close-btn" onclick="hideEditOverlay()"></button>`
    document.getElementById('edit-contact-form').onsubmit = function(event) {
        event.preventDefault(); // Verhindert das Standard-Formular-Absenden
        saveEditsToContact(`${currentContact['id']}`);
    };
    document.getElementById('delete-contact-btn').setAttribute('onclick',`deleteContact(${id})`);
    showEditOverlay();
    document.getElementById('editContactPic').outerHTML = await drawContactEditPic(currentContact);
}


async function fillEditContactFormDesktop(id){
    idToFind = id;
    currentContact = contactsAsJson[idToFind];
    document.getElementById('contact-name-desktop').value = `${currentContact['vorname']} ${currentContact['name']}`;
    document.getElementById('contact-mail-desktop').value = `${currentContact['mail']}`;
    document.getElementById('contact-phone-desktop').value = `${currentContact['mobile']}`;
    document.getElementById('closeEditContactButton').outerHTML = `<button id="closeEditContactButton" class="close-btn" onclick="hideEditOverlayDesktop()"></button>`
    document.getElementById('edit-contact-form-desktop').onsubmit = function(event) {
        event.preventDefault(); // Verhindert das Standard-Formular-Absenden
        saveEditsToContact(`${currentContact['id']}`);
    };
    
    document.getElementById('delete-contact-btn-desktop').setAttribute('onclick',`deleteContact(${id})`);
    showEditOverlayDesktop();
    document.getElementById('editContactPic-desktop').outerHTML = await drawContactEditPicDesktop(currentContact);
}


function showEditOverlay(){
    document.getElementById('overlayVeil').classList.remove('displayNone');
    document.getElementById('overlay-editContact').classList.add('showEditContact');
}


function hideEditOverlay(){
    document.getElementById('overlayVeil').classList.add('displayNone');
    document.getElementById('overlay-editContact').classList.remove('showEditContact');
}


function showEditOverlayDesktop(){
    document.getElementById('edit-contact-container').classList.add('show');
    document.getElementById('overlayVeilAddContact').classList.remove('none');
}


function hideEditOverlayDesktop(){
    document.getElementById('edit-contact-container').classList.remove('show');
    document.getElementById('overlayVeilAddContact').classList.add('none');
}


async function getTheEditedData(element){
    if(window.innerWidth >= 1250){
        return document.getElementById(`${element}-desktop`).value;
    }else{
        return document.getElementById(element).value;
    }
}


async function saveEditsToContact(token){
    let editedName = await getTheEditedData('contact-name');
    let editedMail = await getTheEditedData('contact-mail');
    let editedPhone = await getTheEditedData('contact-phone');
    let words = editedName.split(" ");
    let surname = words[0];
    let lastName = words[1];
    if(surname && lastName){
        newSurname = surname.charAt(0).toUpperCase() + surname.slice(1);
        newLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    }else if(surname && !lastName){
        newSurname = surname.charAt(0).toUpperCase() + surname.slice(1);
        newLastName = ""
    }
    let indexOfCurrentContact = contactsAsJson.findIndex(element => element.id === token);
    let contactToUpdate = contactsAsJson[indexOfCurrentContact];
    let data = { 
        "mail": editedMail,
        "mobile": editedPhone,
        "name": newLastName,
        "vorname": newSurname,
        "id": contactToUpdate['id'],
        "color": contactToUpdate['color']}
        await putData(`contacts/${token}/`, data);
        await submitForm(indexOfCurrentContact);
    }
    
    
    async function submitForm(){
        if(window.innerWidth < 1250){
            document.getElementById('edit-contact-form').submit();
        }else{
            await blendItOut(); 
            loadContacts();
            await loadCurrentContactId();  
        }   
    }
    
    
    async function blendItOut(){
        document.getElementById('edit-contact-container').classList.add('fade');
        document.getElementById('overlayVeilAddContact').classList.add('none');
        document.getElementById('edit-contact-container').classList.remove('show');
        document.getElementById('edit-contact-container').classList.remove('fade');
    }
    
    
    async function checkIfContactWasCreated(){
        let wasContactCreated = localStorage.getItem('contactWasCreated');
        if(wasContactCreated == "true"){
            await showTheNotificaiton();
        }
    }
    
    
    async function showTheNotificaiton(){
        document.getElementById('notificationAddContact').classList.add('showContactAdded');
        setTimeout(() => {
            document.getElementById('notificationAddContact').classList.remove('showContactAdded');
        }, 1000);
        localStorage.clear();
    }
    
    document.addEventListener('DOMContentLoaded', checkIfContactWasCreated);
    
