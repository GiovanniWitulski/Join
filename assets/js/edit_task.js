let editContacts = []; //loaded contacts
let editContactsShow = []; //contacts with id for render
let EditTask = [];
let contactListEdit; //liste fürs reinrendern in suche
let taskboardPosition = 0;
let searchButton = "/assets/svg/arrow_drop_downaa.svg";
let newTitle;
let newDescription;
let newDate;
let newPriority;
let choosenContactsEdit = []; //wird befüllt von alt und später neu contacts, variabel

let newSubtasks = [];
let taskIdBoard = 0;




processContacts(); // start load contacts and fill array edit contact

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

// Funktion Profilbild //
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

async function processContacts() {
    editContacts = [];
    editContactsShow = []; // 
    let editContactId = 0; // 

    try {
        const contacts = await loadContacts();
        contacts.forEach(contact => {
            const { vorname, name, color } = contact;
            const nachname = name || ''; 
            const svg = createContactEdit(vorname, nachname, color);

            editContacts.push({
                checked: 0,
                id: editContactId,
                assignedTo: [vorname, nachname], 
                contactEmblem: svg
            });

            editContactsShow.push({
                checked: 0,
                id: editContactId,
                assignedTo: [vorname, nachname], 
                contactEmblem: svg
            });

            editContactId++;
        });

        console.log('editContacts:', editContacts);
        console.log('editContactsShow:', editContactsShow);
        console.log('editContactlength:', editContacts.length); // Länge des editContacts Arrays

    } catch (error) {
        console.error('Fehler bei der Verarbeitung der Kontakte:', error);
        throw error;
    }
}

//search functions //

function filterContactsEdit(eventOrValue) {
    let searchedContact = '';

    if (eventOrValue && eventOrValue.target) {
        searchedContact = eventOrValue.target.value.toLowerCase(); 
    } else {
        searchedContact = ''; 
    }

    if (searchedContact === "") {
        editContactsShow = editContacts;
        renderContactListEdit();
        const SearchList = document.getElementById('contact-list-container');
        SearchList.innerHTML = contactListEdit;         
        return;
    }

    editContactsShow = [];
    for (let i = 0; i < editContacts.length; i++) {
        let prename = editContacts[i].assignedTo[0].toLowerCase(); 
        let name = editContacts[i].assignedTo[1].toLowerCase();    

        if (prename.includes(searchedContact) || name.includes(searchedContact)) {
            const foundContact = editContacts[i];
            editContactsShow.push(foundContact);
        }
    }
    testForChoosenContact();
    document.getElementById('contact-list-container').classList.remove('hiddenMenue');

    console.log("editContactsShow after search", editContactsShow);
    
    const SearchList = document.getElementById('contact-list-container');
    SearchList.innerHTML = contactListEdit;
    
}

function clickButtonSearch(){
    if (searchButton === "/assets/svg/arrow_drop_downaa.svg"){
        searchButton = "/assets/svg/arrow_drop_up.svg";
        document.getElementById('contact-list-container').classList.remove('hiddenMenue');
    }
    else if (searchButton === "/assets/svg/arrow_drop_up.svg"){
        searchButton = "/assets/svg/arrow_drop_downaa.svg";
        document.getElementById('contact-list-container').classList.add('hiddenMenue');
    }    

    return searchButton;
}
// EditedTask -> Taskboard // later upload complete Taskboard

function selectContact (contactId){    
    //1. Schleife, ist es im choosen contacts 2. if not add + set check=1

    for (i=0; i<choosenContactsEdit.length; i++){
        let compareId = choosenContactsEdit[i].id;
        console.log("compare idclick", compareId);
        if (compareId === contactId){
            choosenContactsEdit.splice(i, 1);
            editContacts[contactId].checked = 0;
        } else {
            let addToAssignedTo = editContacts[contactId];
            editContacts[contactId].checked = 1;
            choosenContactsEdit.push(addToAssignedTo)
            console.log("changedto1", editContacts[contactId].checked);
            console.log(editContacts);
         } 
    }
    
    filterContactsEdit();
}

function storeNewData(idTask, i){ //onclick OK BUTTON // delete old task, add new task with old id
    EditTask.title = newTitle;
    EditTask.description = newDescription;
    EditTask.assignedTo = choosenContactsEdit;
    EditTask.date = newDate;
    EditTask.priority = newPriority;
    EditTask.subtask = [];
    EditTask.subtask = newSubtasks;
    overlayDeleteTask(idTask, i);
    TaskBoard.push(); // newTask = editTask
}


///////// RENDER EDIT TASK ////////// 

function testForChoosenContact (){
    for (i=0; i<editContactsShow; i++){
        editContactsShow[i].checked = 0;
    }
    console.log("testforChoosenactive");
    console.log("testforcontacactive");
    for (i=0; i<EditTask.assignedTo.length; i++){
        let taskAssignedto = EditTask.assignedTo[i];
    for (c=0; c<editContacts.length; c++){
        let fullname = '';
        let vorname = editContacts[c].assignedTo[0];
        let nachname = editContacts[c].assignedTo[1];
        fullname = vorname + ' ' + nachname;
        if (fullname === taskAssignedto){
            console.log("Match :D", fullname);
            editContacts[c].checked = 1;
        }
        
    }
    
}  }

function renderContactListEdit() { //rausgeholt aus render
    contactListEdit = ''
    console.log("renderContalistActive");
    for (i=0; i<editContactsShow.length;i++){  
        let contactCheck = editContactsShow[i].checked;   
        let editContactId = editContactsShow[i].id;
        let prename = editContactsShow[i].assignedTo[0];
        let name = editContactsShow[i].assignedTo[1];
        let userIcon = editContactsShow[i].contactEmblem;
        if (contactCheck === 1){
            contactListEdit += '<div id="'+editContactId+'" onclick="selectContact('+editContactId+')" class="background-blue"><div class="edit-contact-name-svg">'+userIcon+' '+prename+' '+name+'</div><div id="editCheckbox"><img class="edit-contact-check" src="/assets/svg/checkboxWhite.svg" alt=""></div></div>';
        } else {
            ///!!! einfach anderer klasse für div vwerdnen, klasse check klasse uncheckt
        contactListEdit += '<div id="'+editContactId+'" onclick="selectContact('+editContactId+')" class="contactFieldEdit"><div class="edit-contact-name-svg">'+userIcon+' '+prename+' '+name+'</div><div id="editCheckbox'+i+'"><img class="edit-contact-check" src="/assets/svg/rectangle.svg" alt=""></div></div>';
    }
        
    } 
    
    return contactListEdit;
}    

function editTaskOverlay(idTask, i){
    EditTask = TaskBoard[i];
    taskboardPosition = i;
    taskIdBoard = idTask;
    testForChoosenContact ();
    renderContactListEdit();
    editTaskRender();
}

function editTaskRender(){    //use of same container as Overlay/PopupTask
    let editTask = '';
    editTask = EditTask;
    let placeholderTitle = editTask.title;
    let placeholderDescription = editTask.description;

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
    <div class="close-edit"><img onclick="closeOverlay(${taskIdBoard}, ${taskboardPosition})" src="/assets/svg/close_black.svg" alt="close"></div>
    
    <div id="edit-title" class="edit-title">
        <input type="text" id="titleEdit" class="edit-title-input" placeholder="${placeholderTitle}">
    </div>

    <div id="edit-description" class="edit-description">
    <textarea id="descriptionEdit" class="edit-description-input" placeholder="${placeholderDescription}"></textarea>
    </div>

    <form action="/action_page.php">
    <label for="edit_input" class="calendar-icon-label">
    <input type="date" id="edit_input" name="edit_input" class="date-input" placeholder="tt.mm.jjj">
    </label>
    </form>       
    
    <div onclick="clickButtonSearch(); filterContactsEdit();" class="SearchContactEdit">
        <input type="text" id="InputSearchEdit" class="InputSearchEdit" placeholder="Select contacts to assign">
        <div id="ContactListEditButton" class="contact-list-edit-button">
        <img  src="${searchButton}" alt="openContactList"></div>
    </div>
    
    <div id="contact-list-container" class="contact-list-container hiddenMenue">
    ${contactListEdit}
    </div>

    <div id="choosenContacts" class="choosen-contacts">

    </div>
    
    `
    // pre-set date // don´t touch
    let initialDate = editTask.date; //  YYYY-MM-DD (!)
    let dateInput = document.getElementById("edit_input");
    dateInput.value = initialDate;
    //
    const ContactSearchField = document.getElementById('InputSearchEdit').addEventListener('input', filterContactsEdit);
    

}


