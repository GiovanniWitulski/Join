   
   
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