let editContactsEmblem = [];
let editContacts = []

// load contacts for edit -> saved in right format for Taskboard//
// Extern deklariertes Array für editContacts

// Funktion zum Laden der Kontaktdaten
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

// Funktion zur Erstellung des SVG-basierten Profilbildes
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

    } catch (error) {
        console.error('Fehler bei der Verarbeitung der Kontakte:', error);
    }
}

// Starten der Verarbeitung der Kontaktdatenkette
processContacts();

///////// RENDER EDIT TASK ////////// 
function editTaskOverlay(idTask, i){    //use of same container as Overlay/PopupTask
    const editTask = TaskBoard[i];
    let userEmblems = "";
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
    
    <form action="/action_page.php">    
    <select name="cars" id="cars" class="nameListEdit">
    <option " value="ID NAME Verena Volkers">Verena Volkers</option>
    <option value="ID Thomas Langlang">Thomas Langlang</option>
    <option value="ID oder Name">Verena Keinbart</option>
    <option value="id oder Name">Audius Homan</option>
    </select>
    </form>
    </div>   


    `
    // pre-set Task
    let initialDate = editTask.date; //  YYYY-MM-DD (!)
    let dateInput = document.getElementById("edit_input");
    dateInput.value = initialDate;

    function handleCarSelection() {
        const selectedCar = document.getElementById('cars').value;
        console.log(`Ausgewähltes Auto: ${selectedCar}`);
    }
    
    document.getElementById('cars').addEventListener('change', handleCarSelection);

}


