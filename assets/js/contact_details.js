   
   let newSurname;
   let newLastName;
   
   
   // Elemente auswählen
   const moreButton = document.getElementById('more-button');
   const moreBtnMenu = document.getElementById('edit-menu');
   
   if (moreButton && moreBtnMenu) {
    // Funktion zum Umschalten des Menüs
    function toggleMenu() {
        moreBtnMenu.classList.toggle('hide');
    }
    
    // Funktion zum Schließen des Menüs, wenn außerhalb geklickt wird
    function closeMenuOnClickOutside(event) {
        if (!moreBtnMenu.contains(event.target) && !moreButton.contains(event.target)) {
            moreBtnMenu.classList.add('hide');
        }
    }
    
    // Event-Listener hinzufügen
    moreButton.addEventListener('click', toggleMenu);
    document.addEventListener('click', closeMenuOnClickOutside);
} 


async function loadCurrentContactId(){
    
    
    let userId = await loadData('currentContact');
    console.log(userId);
   await loadSingleContact(userId)
}




async function loadSingleContact(id){
    
let user;
    for (let i = 0; i < contactsWithoutToken.length; i++) {
        const element = contactsWithoutToken[i];
        if (element['id'] == id){
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


async function deleteContact(id){

    idToFind = id
    indexToDelete = contactsWithoutToken.findIndex(contact => contact.id === idToFind);
    tokenToDelete = contactsWithoutToken[indexToDelete]['token'];
   
    
    await deleteData(`contacts/${tokenToDelete}`);
    window.location.href = "/contacts.html";
  

}

function drawContactDetailPic(user){
    return `<svg class="name-pic" width="42px" height="42px"><circle cx="40" cy="40" r="40" stroke="white" stroke-width="2" fill="${user['color']}" />
    <text x="20" y="48" fill="white" font-size="27px">${user['vorname'].charAt(0)}${user['name'].charAt(0)}</text></svg>`;
   
}


 function fillEditContactForm(id){

    idToFind = id;
    indexToFill = contactsWithoutToken.findIndex(contact => contact.id === idToFind);
    currentContact = contactsWithoutToken[indexToFill];
    
    document.getElementById('contact-name').value = `${currentContact['vorname']} ${currentContact['name']}`;
    document.getElementById('contact-mail').value = `${currentContact['mail']}`;
    document.getElementById('contact-phone').value = `${currentContact['mobile']}`;
    document.getElementById('closeEditContactButton').outerHTML = `<button id="closeEditContactButton" class="close-btn" onclick="hideEditOverlay()"></button>`
    document.getElementById('save-edits-btn').setAttribute('onclick',`saveEditsToContact('${currentContact['token']}')`);
    document.getElementById('delete-contact-btn').setAttribute('onclick',`deleteContact(${id})`);
    showEditOverlay();


}


function showEditOverlay(){

   
    document.getElementById('overlayVeil').classList.remove('displayNone');
    document.getElementById('overlay-editContact').classList.add('showEditContact');
   

}

function hideEditOverlay(){

    document.getElementById('overlayVeil').classList.add('displayNone');
    document.getElementById('overlay-editContact').classList.remove('showEditContact');
}

async function saveEditsToContact(token){
    
     let editedName = document.getElementById('contact-name').value;
     let editedMail = document.getElementById('contact-mail').value;
     let editedPhone = document.getElementById('contact-phone').value;

     
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

     let indexOfCurrentContact = contactsWithoutToken.findIndex(element => element.token === token);
     let contactToUpdate = contactsWithoutToken[indexOfCurrentContact];





     let data = { 
     "mail": editedMail,
     "mobile": editedPhone,
     "name": newLastName,
     "vorname": newSurname,
     "id": contactToUpdate['id'],
     "color": contactToUpdate['color']}
    
    await putData(`contacts/${token}/0`, data);
        
    document.getElementById('edit-contact-form').submit();


}



