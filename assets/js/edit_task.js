let editContacts = [];
let choosenContactsEdit = [];

// Starten der Verarbeitung der Kontaktdatenkette
processContacts().then(() => {
    // Hier können Sie die Funktion aufrufen, die auf editContacts zugreifen soll
    // Beispiel: IhreFunktionDieEditContactsVerwendet();
});

async function loadContacts() {
    const FIREFIREBASE_URL = 'https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app/';
    const endpoint = 'contacts';
    const url = `${FIREFIREBASE_URL}${endpoint}.json`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return Object.values(data); // Gibt ein Array der Kontaktdaten zurück
    } catch (error) {
        console.error('Fehler beim Laden der Kontakte:', error);
        throw error;
    }
}

// Funktion zur Erstellung Profilbild
function createContactEdit(vorname, nachname, color) {
    const vornameInitial = vorname.charAt(0).toUpperCase(); // Erster Buchstabe des Vornamens
    const nachnameInitial = nachname ? nachname.charAt(0).toUpperCase() : ''; // Erster Buchstabe des Nachnamens, falls vorhanden

    // SVG-Formatierung für das Profilbild
    const svgTemplate = `<svg class="profile_pic" width="42px" height="42px">
        <circle cx="21" cy="21" r="20" stroke="white" stroke-width="2" fill="${color}"></circle>
        <text x="12" y="25" fill="white" font-size="12px">${vornameInitial}${nachnameInitial}</text>
    </svg>`;

    return svgTemplate;
}

// Hauptfunktion zum Laden, Verarbeiten und Speichern der Kontaktdaten
async function processContacts() {
    // Sicherstellen, dass editContacts jedes Mal neu initialisiert wird
    editContacts = [];

    try {
        // Laden der Kontaktdaten
        const contacts = await loadContacts();

        // Bearbeiten der Kontaktdaten und Erstellen der SVG-Profile
        contacts.forEach(contact => {
            const { vorname, name, color } = contact;
            const nachname = name || ''; // Der Nachname wird aus dem Feld .name genommen, falls vorhanden

            // Erstellen des SVG für das Profilbild
            const svg = createContactEdit(vorname, nachname, color);

            // Speichern der bearbeiteten Daten im editContacts Array
            editContacts.push({
                assignedTo: [vorname, nachname], // Vorname und Nachname separat speichern
                contactEmblem: svg
            });
        });

        // Ausgabe des editContacts Arrays zur Überprüfung
        console.log('editContacts:', editContacts);
        console.log("editContactlength", editContacts.length);

    } catch (error) {
        console.error('Fehler bei der Verarbeitung der Kontakte:', error);
        throw error;
    }
}


///////// RENDER EDIT TASK ////////// 
function editTaskOverlay(idTask, i){    //use of same container as Overlay/PopupTask
    const editTask = TaskBoard[i];
    let contactListEdit='';
    for (i=0; i<editContacts.length;i++){       
        let prename = editContacts[i].assignedTo[0];
        let name = editContacts[i].assignedTo[1];
        let userIcon = editContacts[i].contactEmblem;
        contactListEdit += '<div id="contactFieldEdit'+i+'" class="contactFieldEdit"><div class="edit-contact-name-svg">'+userIcon+' '+prename+' '+name+'</div><div id="editCheckbox'+i+'"><img class="edit-contact-check" src="/assets/svg/rectangle.svg" alt=""></div></div>';
    } 
    

    /*
    if (editTask.subtask[0] !== undefined){
        
        let subtask1 = editTask.subtask[0];
        let subtaskList = document.getElementById('edit-list-of-subtasks');
        subtaskList.innerHTML += `<li id=subtask1><div class="content-of-subtask"><div id="">${subtask1}</div> <div class="edit-subtask-div"><button class="edit-btn" onclick=""></button><div class="btn-divider"></div><button onclick="" class="trash-btn"></button></div></div></li>`;
    }
    }
    if (editTask.subtask[1] !== undefined){
        secondSubtask = editTask.subtask[1];
        
    }           */ 
 
    Overlay.innerHTML = '';
    Overlay.innerHTML = `
    <div class="board-edit-task">
    <div class="close-edit"><img onclick="closeOverlay(${idTask}, ${i})" src="/assets/svg/close_black.svg" alt="close"></div>

    <form action="/action_page.php">
    <label for="edit_input" class="calendar-icon-label">
    <input type="date" id="edit_input" name="edit_input" class="date-input" placeholder="tt.mm.jjj">
    </label>
    </form>   
    
    
    
    <div class="contact-list-container">
    ${contactListEdit}
    </div>

    `
    // pre-set date // don´t touch
    let initialDate = editTask.date; //  YYYY-MM-DD (!)
    let dateInput = document.getElementById("edit_input");
    dateInput.value = initialDate;
    //

}


