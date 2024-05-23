   
   
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
 } else {
     console.error('Elemente mit den IDs "moreButton" oder "moreBtnMenu" wurden nicht gefunden.');
 }

 



 function loadSingleContactId(){
    

    let userIdAsString = localStorage.getItem('userID');
    if (userIdAsString){
        let userIdAsNumber = Number(userIdAsString);
        
        loadSingleContact(userIdAsNumber);
    }
 }


 function loadSingleContact(id){
    
    let user = contactsAsJson[id];
    
    document.getElementsByClassName('name-headline')[0].innerHTML = `${user['vorname']} ${user['name']}`;
    document.getElementsByClassName('email')[0].innerHTML = `${user['mail']}`;
    document.getElementsByClassName('phone')[0].innerHTML = `${user['mobile']}`;
 }


 window.onload = function(){
   loadSingleContactId();
 }
