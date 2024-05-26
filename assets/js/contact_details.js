   
   
   
   
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
    for (let i = 0; i < contactsAsJson.length; i++) {
        const element = contactsAsJson[i];
        if (element['id'] == id){
            user = element;
        }
        
    }

    
    
    document.getElementsByClassName('name-headline')[0].innerHTML = `${user['vorname']} ${user['name']}`;
    document.getElementsByClassName('email')[0].innerHTML = `${user['mail']}`;
    document.getElementsByClassName('phone')[0].innerHTML = `${user['mobile']}`;
    document.getElementsByClassName('name-pic')[0].outerHTML = drawContactDetailPic(user);
    document.getElementsByClassName('del-btn')[0].outerHTML = `<button class="del-btn" onclick="deleteContact(${id})"></button>`
}


async function deleteContact(id){

    idToFind = id
    indexToDelete = contactsAsJson.findIndex(contact => contact.id === idToFind);
    contactsAsJson.splice(indexToDelete, 1); 
    
    await putData('contacts', contactsAsJson);
    window.location.href = "/contacts.html";

}

function drawContactDetailPic(user){
    return `<svg class="name-pic" width="42px" height="42px"><circle cx="40" cy="40" r="40" stroke="white" stroke-width="2" fill="${user['color']}" />
    <text x="20" y="48" fill="white" font-size="27px">${user['vorname'].charAt(0)}${user['name'].charAt(0)}</text></svg>`;
   
}


