console.log("board.js_loaded");

/*
let BackgroundTaskBoard = [   
    {
        "label": "/assets/svg/Labels Board card label technical task.svg",
        "title": "Technical Task Example",
        "description": "The code for the example in VS Code has been written",
        "date": "03.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 1],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Emmanuel Mauer", "Marcel Bensdorf", "Annika Michelstadt"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "3",
        "taskid": "1"
    },         
    {
        "label": "/assets/svg/Labels Board card label technical task.svg",
        "title": "Technical Task Example",
        "description": "Write the code for the example in VS Code",
        "date": "03.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 1],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Emmanuel Mauer", "Marcel Bensdorf", "Annika Michelstadt"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "0",
        "taskid": "2"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "In Progress Example",
        "date": "10.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 0],
        "priority" : ["urgent", "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"],
        "assignedTo" : ["Max Bustermann", "Eichard Moberts", "Anton Mabuse"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "1",
        "taskid": "3"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "Await Feedback Example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [1, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Axel Mustermann", "Mitchard Boberts", "Erik Malmö"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "2",
        "taskid": "4"
    }, 
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "Second to do example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [1, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Andrew Millenium", "Marc Bob", "Elke Magneto"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "0",
        "taskid": "5"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "Second in progress example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [0, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Anton Millenium", "Mitchel Bobford", "Enrico Montequia"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "1",
        "taskid": "6"
    },
    {
        "label": "/assets/svg/Labels Board card label technical task.svg",
        "title": "Technical Task Example",
        "description": "A Technical Task, enjoy!",
        "date": "03.12.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 1],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Marcel Bensdorf", "Annika Michelstadt"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "2",
        "taskid": "7"
    },


];                                      // -> Task Sammlung für Testen       
*/

let TaskBoard = []

  let BackgroundTaskBoardAlt= [   
    {
        "label": [0],
        "title": "Technical Task Example",
        "description": "The code for the example in VS Code has been written",
        "date": "03.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 0],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Emmanuel Mauer", "Marcel Bensdorf", "Annika Michelstadt"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "3",
        "taskid": "1"
    },         
    {
        "label": [0],
        "title": "Technical Task Example",
        "description": "Write the code for the example in VS Code",
        "date": "03.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 1],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Emmanuel Mauer", "Marcel Bensdorf", "Annika Michelstadt"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "0",
        "taskid": "2"
    },
    {
        "label": [1],
        "title": "User Story Example",
        "description": "In Progress Example",
        "date": "10.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 0],
        "priority" : ["urgent", "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"],
        "assignedTo" : ["Max Bustermann", "Eichard Moberts", "Anton Mabuse"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "1",
        "taskid": "3"
    },
    {
        "label": [1],
        "title": "User Story Example",
        "description": "Await Feedback Example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [1, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Axel Mustermann", "Mitchard Boberts", "Erik Malmö"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "2",
        "taskid": "4"
    }, 
    {
        "label": [1],
        "title": "User Story Example",
        "description": "Second to do example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [1, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Andrew Millenium", "Marc Bob", "Elke Magneto"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "0",
        "taskid": "5"
    },
    {
        "label": [1],        
        "title": "User Story Example",
        "description": "Second in progress example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [0, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Anton Millenium", "Mitchel Bobford", "Enrico Montequia"], 
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "1",
        "taskid": "6"
    },
    {
        "label": [0],
        "title": "Technical Task Example",
        "description": "A Technical Task, enjoy!",
        "date": "03.12.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 1],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Marcel Bensdorf", "Annika Michelstadt"], 
        "contactEmblem" : ["/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "1",
        "taskid": "7"
    },


];                                      // -> mit responseToJson befüllen       

let BackgroundTaskBoard = [] // Test, backup siehe drüber


//global variables & Elementtargets
const databaseURL = 'https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app';


let currentDraggedTask;
const TechnicalTaskLabel = '<img src="/assets/svg/Labels_Board_card_label_tourquise_Technical_Task.svg" alt="">'
const UserStoryLabel = '<img src="/assets/svg/Labels_Board_card_label_blue_User_Story.svg" alt="">'

const Searchfield = document.getElementById('boardInput').addEventListener('input', findTask);
let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');
let done = document.getElementById('doneContainer');
let Overlay = document.getElementById('overlayContainer');

console.log ("TaskBoard:", TaskBoard);



////////////functions general///////////


// Funktion zum Abrufen der Daten und Speichern in BackgroundTaskBoard
async function downloadData() {

BackgroundTaskBoard = [];

try {
    const response = await fetch(`${databaseURL}/tasks.json`);
    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht in Ordnung');
    }
    const data = await response.json();

    // Iterieren über jedes Unterobjekt im JSON und Formatieren der Daten
    Object.values(data).forEach(task => {
      // Überprüfen, ob subtask ein Array ist
      const subtaskArray = Array.isArray(task.subtask) ? task.subtask : [];
      // Überprüfen, ob subtaskSum ein Array ist
      const subtaskSumArray = Array.isArray(task.subtaskSum) ? task.subtaskSum : [];
      // Überprüfen, ob priority ein Array ist
      const priorityArray = Array.isArray(task.priority) ? task.priority : [];
      // Überprüfen, ob assignedTo ein Array ist
      const assignedToArray = Array.isArray(task.assignedTo) ? task.assignedTo : [];
      // Überprüfen, ob contactEmblem ein Array ist
      const contactEmblemArray = Array.isArray(task.contactEmblem) ? task.contactEmblem : [];

      // Beispiel: Hier kannst du die Felder des Unterobjekts anpassen und in das neue Format überführen
      const formattedTask = {
        label: task.label,
        title: task.title,
        description: task.description,
        date: task.date,
        subtask: subtaskArray,
        subtaskSum: subtaskSumArray,
        priority: task.priority,
        assignedTo: assignedToArray,
        contactEmblem: contactEmblemArray,
        type: task.type,
        taskid: task.taskid
      };

      // Hinzufügen des formatierten Tasks zum externen Array
      BackgroundTaskBoard.push(formattedTask);
    });

    // Anzeigen der formatierten Daten im externen Array in der Konsole
    console.log("Download BackgroundTaskBoard",BackgroundTaskBoard);
    TaskBoard = BackgroundTaskBoard;
    console.log("Download Taskboard", TaskBoard);
    
  } catch (error) {
    console.error('Fehler beim Abrufen und Formatieren der Daten:', error);
  }
  renderBoard();
  console.log(BackgroundTaskBoardAlt)
}
        
function uploadData(){} //upload to server -> BackupTaskBoard - TaskBoard // TO CODE

function renderBoard(){ //load Task to Board/actualise while search active
    console.log("render_actice");
    console.log("render_Taskboard Inhalt:", TaskBoard);

    toDoContainer();    //render task to do 
    inProgressContainer();       //render tasks in progress 
    awaitFeedbackContainer();    //render task awaiting feedback 
    doneContainer();            //render tasks done 
}
 
function overlayTask(id){   //TO DO: DISCERNMENT -> Technical Task/User Story Task!! -> OverlayTask FKT 
    console.log("OverlayTask active", id);
    for (i=0; i<TaskBoard.length; i++){
        const TaskId = TaskBoard[i].taskid;
        if (TaskId == id){
            OverlayTaskPopup(i);
        }
    }

}

//Search functions 

function findTask(event){
    console.log("findTaskStarted");
    const SearchedTask = event.target.value;
    if (SearchedTask == ""){
        console.log("input field empty");
        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        awaitFeedback.innerHTML = '';
        TaskBoard = BackgroundTaskBoard;
        renderBoard();                //Searchfield empty again -> reload up do date status
        return;                       //Taskboard = BackgroundTaskBoard einfügen
    }
    console.log("Aktueller Suchfeldwert:",SearchedTask);
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    awaitFeedback.innerHTML = '';
    searchResult(SearchedTask);
}

function searchResult(s){    
    console.log("an SearchResult übergeben:", s);
    TaskBoard = [];
    console.log("Taskboard:", TaskBoard);
    for (let i = 0; i < BackgroundTaskBoard.length; i++) {
        const task = BackgroundTaskBoard[i];

        if (task.title.toLowerCase().includes(s.toLowerCase()) || task.description.toLowerCase().includes(s.toLowerCase())) {
            console.log("Found at i = ", i);
            TaskBoard.push(task);       
        }
    }
    

    renderBoard();
}

// TO CODE: Functions //////////////////////////////////////


// EMBLEMS auf <div>SVG</div> ändern !!!!!!!!!!!

// function overlayEditTask(idtask){} --> Addtask Page -> load editing Task in Form
                                    //--> Taskpopup slide in
                                    //--> Edit Task -> changed addTask as Popup, editetTask-> new task, old task -> delete
// function upload 

// function download


// ^^ in Progress


// function checkbox -> Wert in Array änder + checkbox 


/////////////////////////////////////////////////////////////


// drag & drop functions 
function startDragging(id){
    currentDraggedTask = id;
}

function allowDrop(ev) {
    ev.preventDefault();
  }

function dropAt(newType){
    for (i=0; i<TaskBoard.length; i++){
        taskToMove = TaskBoard[i].taskid;
        if (taskToMove == currentDraggedTask){
            TaskBoard[i].type = newType;
            renderBoard();
            return;
        }
    }
}


//Board render Tasks container

function toDoContainer (){              // EMBLEMS auf <div>SVG</div> ändern
    console.log("todoContainer Active");                
    toDo.innerHTML = '';

    for(i=0; i<TaskBoard.length; i++){
        const toDoCard = TaskBoard[i];

        if (toDoCard.type == 0){
            let amountSubTasks = toDoCard.subtask.length; //amount substasks
            let sumSubtask = 0;                            //amount solved subtasks
            let sumSubtask0 = 0;
            let sumSubtask1 = 0;
            let sumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at beginning (svg -reasons)

            
             if (toDoCard.subtaskSum[0] === null && toDoCard.subtaskSum[1] === null){
                sumSubtask = 0;
            }   else if (toDoCard.subtaskSum[0] !== null && toDoCard.subtaskSum[1] !== null){
                sumSubtask = toDoCard.subtaskSum[0]+toDoCard.subtaskSum[1];
            }   else if (toDoCard.subtaskSum[0] !== null){            
                sumSubtask = toDoCard.subtaskSum[0];
            }
           
            /*
            sumSubtask = sumSubtask0 + sumSubtask1;
            console.log("subtasksum", sumSubtask)
            */

            if (sumSubtask/amountSubTasks === 1){
                sumSubtaskCalc = 2;
            } else if (sumSubtask/amountSubTasks === 0.5){
                sumSubtaskCalc = 1;
            } else if (sumSubtask/amountSubTasks === 0){
                sumSubtaskCalc = 0;
            } 
            const progressInPercent = sumSubtaskCalc * 50;  
            const progressBarId = 'cardToDoBar' + toDoCard.taskid;


            let label;
            if(toDoCard.label == 0){
                label = TechnicalTaskLabel;
            } else {
                label = UserStoryLabel;
            }                 
            
            let lastChar = toDoCard.description[toDoCard.description.length - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?"){
                console.log("foundchar:", lastChar);
                toDoCard.description = toDoCard.description.slice(0, -1);
            }

            let emblems = '';                           //contact-emblems
            for (let i = 0; i < toDoCard.contactEmblem.length; i++){
                const svg = toDoCard.contactEmblem[i];
                emblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
            }           


            let priority = '';
            if (toDoCard.priority === "low"){
                priority = "/assets/svg/capa_priority_low.svg";
            }    else if (toDoCard.priority === "medium"){
                priority = "/assets/svg/capa_1_medium_priority.svg";
            }   else if(toDoCard.priority === "urgent") {
                priority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}


                toDo.innerHTML += `
            <div class="card-body" onclick="overlayTask(${toDoCard.taskid})" ondragstart="startDragging(${toDoCard.taskid})" draggable="true">
            <div id="cardHeader" class="card-header">${label}</div>
            <div id="cardTitle" class="card-title"><h4>${toDoCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${toDoCard.description}...</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="cardToDoBar${toDoCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
            <div class="card-sum-subtask">${sumSubtask}/${amountSubTasks} Subtasks</div></div>        
            <div id="cardParticipantsPriority" class="card-participants-priority">
            <div class="card-contact-emblems">${emblems}</div>
            <div><img src="${priority}" alt="priority"></div>
            </div></div>
                    
            `           
            const progressBar = document.getElementById(progressBarId);
            progressBar.setAttribute('width', `${progressInPercent}%`);

        }
    }
    
    if (toDo.innerHTML == ''){
        toDo.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/No_tasks_feedback_to_do.svg" alt="no-task-to-do">`
    }
}

function inProgressContainer (){
    inProgress.innerHTML = '';

    for(i=0; i<TaskBoard.length; i++){
        const inProgressCard = TaskBoard[i];
        if (inProgressCard.type == 1){
            sumSubtask = inProgressCard.subtaskSum[0]+inProgressCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            const progressBarId = 'cardInProgressBar' + inProgressCard.taskid;

            let label;
            if(inProgressCard.label == 0){
                label = TechnicalTaskLabel;
            } else {
                label = UserStoryLabel;
            }       
            
            let lastChar = inProgressCard.description[inProgressCard.description.length - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?"){
                console.log("foundchar:", lastChar);
                inProgressCard.description = inProgressCard.description.slice(0, -1);
            }


            let emblems = '';                           //contact-emblems
            for (let i = 0; i < inProgressCard.contactEmblem.length; i++){
                const src = inProgressCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }


            inProgress.innerHTML += `
        <div class="card-body" onclick="overlayTask(${inProgressCard.taskid})" ondragstart="startDragging(${inProgressCard.taskid})" draggable="true">
        <div id="cardHeader" class="card-header">${label}</div>
        <div id="cardTitle" class="card-title"><h4>${inProgressCard.title}</h4></div>
        <div id="cardDescription" class="card-description"><h4>${inProgressCard.description}...</h4></div>
        
        <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
        <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
        <rect id="cardInProgressBar${inProgressCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
        <div class="card-sum-subtask">${sumSubtask}/2 Subtasks</div></div>
        <div id="cardParticipantsPriority" class="card-participants-priority">
        <div class="card-contact-emblems">${emblems}</div>
        <div><img src="${inProgressCard.priority[1]}" alt="priority"></div>
        </div></div>

        
         `
        
        const progressBar = document.getElementById(progressBarId);
        progressBar.setAttribute('width', `${progressInPercent}%`);

        }
    }

    if (inProgress.innerHTML == ''){
        inProgress.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/No_tasks_feedback_in_progress.svg" alt="no-task-in-progress">`
    }
    
}

function awaitFeedbackContainer(){
    awaitFeedback.innerHTML = '';

    for(i=0; i<TaskBoard.length; i++){
        const awaitFeedbackCard = TaskBoard[i];
        if (awaitFeedbackCard.type == 2){
            
            sumSubtask = awaitFeedbackCard.subtaskSum[0]+awaitFeedbackCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            const progressBarId = 'cardAwaitFeedbackBar' + awaitFeedbackCard.taskid;

            let label;
            if(awaitFeedbackCard.label == 0){
                label = TechnicalTaskLabel;
            } else {
                label = UserStoryLabel;
            }          
            
            let lastChar = awaitFeedbackCard.description[awaitFeedbackCard.description.length - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?"){
                console.log("foundchar:", lastChar);
                awaitFeedbackCard.description = awaitFeedbackCard.description.slice(0, -1);
            }


            let emblems = '';                           //contact-emblems
            for (let i = 0; i < awaitFeedbackCard.contactEmblem.length; i++){
                const src = awaitFeedbackCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }

            awaitFeedback.innerHTML += `
            <div class="await-feedback-cards-container">
            <div class="card-body" onclick="overlayTask(${awaitFeedbackCard.taskid})" ondragstart="startDragging(${awaitFeedbackCard.taskid})" draggable="true">
            <div id="cardHeader" class="card-header">${label}</div>
            <div id="cardTitle" class="card-title"><h4>${awaitFeedbackCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${awaitFeedbackCard.description}...</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="cardAwaitFeedbackBar${awaitFeedbackCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
            <div class="card-sum-subtask">${sumSubtask}/2 Subtasks</div></div>        
            <div id="cardParticipantsPriority" class="card-participants-priority">
            <div class="card-contact-emblems">${emblems}</div>
            <div><img src="${awaitFeedbackCard.priority[1]}" alt="priority"></div>
            </div></div>
            </div>
                
             `             
            const progressBar = document.getElementById(progressBarId);
            progressBar.setAttribute('width', `${progressInPercent}%`);
        }
    }
    if (awaitFeedback.innerHTML === '') {
        awaitFeedback.innerHTML = `<img src="/assets/svg/no_tasks_awaiting_feedback.png" class="to-do-container-mobile" alt="no-task-awaits-feedback"></div>`
    }


}                                       //-> TO CODE: Taskslider left <-> right

function doneContainer(){
    done.innerHTML='';

    for(i=0; i<TaskBoard.length; i++){
        const doneCard = TaskBoard[i];
        if (doneCard.type == 3){
            
            sumSubtask = doneCard.subtaskSum[0]+doneCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            const progressBarId = 'doneBar' + doneCard.taskid;

            let label;
            if(doneCard.label == 0){
                label = TechnicalTaskLabel;
            } else {
                label = UserStoryLabel;
            }          
            
            let lastChar = doneCard.description[doneCard.description.length - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?"){
                console.log("foundchar:", lastChar);
                doneCard.description = doneCard.description.slice(0, -1);
            }


            let emblems = '';                           //contact-emblems
            for (let i = 0; i < doneCard.contactEmblem.length; i++){
                const src = doneCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }

            done.innerHTML += `
            <div class="card-body" onclick="overlayTask(${doneCard.taskid})" ondragstart="startDragging(${doneCard.taskid})" draggable="true">
            <div id="cardHeader" class="card-header">${label}</div>
            <div id="cardTitle" class="card-title"><h4>${doneCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${doneCard.description}...</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="doneBar${doneCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
            <div class="card-sum-subtask">${sumSubtask}/2 Subtasks</div></div>        
            <div id="cardParticipantsPriority" class="card-participants-priority">
            <div class="card-contact-emblems">${emblems}</div>
            <div><img src="${doneCard.priority[1]}" alt="priority"></div>
            </div></div>
                
             `             
            const progressBar = document.getElementById(progressBarId);
            progressBar.setAttribute('width', `${progressInPercent}%`);
        }
    }

    if (done.innerHTML === '') {
        done.innerHTML = `<img src="/assets/svg/no_tasks_done.png" class="to-do-container-mobile" alt="no-task-done"></div>`
    }
}

// OVERLAY TASK / POPUP ///////////////////////


function OverlayTaskPopup(i){   // TO CODE/CONNECT: EditTaskFkt, DeleteTaskFKT
       
        const OverlayTask = TaskBoard[i];
        let overlayContacts = '';
         for (let c = 0; c < OverlayTask.contactEmblem.length; c++){
            const src = OverlayTask.contactEmblem[c];
            const contactName = OverlayTask.assignedTo[c];
            
            overlayContacts += '<div class="overlay-assigned-to-contacts"><img class="overlay-contact-emblems-img" src=" '+src+' " alt="contact-emblem"><div class="overlay-contact-name">'+contactName+'</div></div>';
        }           

        const checkmark0 = OverlayTask.subtaskSum[0];
        const checkmark1 = OverlayTask.subtaskSum[1];
        let check0 = '';   let check1 = ''; 
        let check = "/assets/svg/checkmark.svg"; let nocheck = "/assets/svg/rectangle.svg";
        if (checkmark0 == 0){check0 = nocheck;} else {check0 = check;}
        if (checkmark1 == 0){check1 = nocheck;} else {check1 = check;}
        
        let label;
        if(OverlayTask.label == 0){
            label = TechnicalTaskLabel;
        } else {
            label = UserStoryLabel;
        }            

        Overlay.innerHTML += `  
        <div id="${OverlayTask.taskid}" class="overlay-container">            
        <div class="overlay-task">
        <div id="overlayHeader" class="overlay-card-header">${label}<img onclick="closeOverlay()" src="/assets/svg/close_black.svg" alt="close"></div>
        <div id="overlayTitle" class="overlay-card-title">${OverlayTask.title}</div>
        <div id="overlayDescription" class="overlay-card-description">${OverlayTask.description}</div>
        <div id="overlaydueDate" class="overlay-card-due-date"><div id="overlayDueDate">Due date:</div><div class="overlay-due-date">${OverlayTask.date}</div></div>
        <div id="overlaypriority" class="overlay-card-priority"><div id="overlayPriorityText" class="overlay-card-priority-text">
        Priority</div><div class="overlay-card-priority-text-img">${OverlayTask.priority[0]}<img src="${OverlayTask.priority[1]}" alt="priority"></div>
        </div>
        <div id="overlayAssignedTo" class="overlay-assigned-to">
        <div id="overlayAssignedToText" class="overlay-assigned-to-text">Assigned to:</div><div id="overlayParticipants" class="overlay-participants">${overlayContacts}</div>  
        </div>
        <div class="overlay-card-subtasks">
        <div id="overlaySubstasksText" class="overlay-substasks-text">Subtasks:</div><div class="overlay-checkbox"><div class="overlay-substask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, 0, ${i})"  src=${check0}> ${OverlayTask.subtask[0]}</div>
        <div class="overlay-substask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, 1, ${i})"  src=${check1}> ${OverlayTask.subtask[1]}</div></div>
        </div>
        <div class="overlay-card-delete-edit">
        <div onclick="overlayDeleteTask(${OverlayTask.taskid}, ${i})" class="overlay-cde"><img class="overlay-cde-img1" src="/assets/svg/delete.svg" alt="delete">Delete</div><div onclick="window.location.href='//127.0.0.1:5500/add_task.html'" class="overlay-cde"><img class="overlay-cde-img2" src="/assets/svg/edit.svg" alt="Edit">Edit</div>
        </div>
        </div>
        </div>

        `
        if (OverlayTask.label == 1){
            document.getElementById('overlayDueDate').style.cssText = 'font-weight: 700; color: #42526E;';
            document.getElementById('overlayAssignedToText').style.cssText = 'font-weight: 700; color: #42526E;';
            document.getElementById('overlayPriorityText').style.cssText = 'font-weight: 700; color: #42526E;';
            document.getElementById('overlaySubstasksText').style.cssText = 'font-weight: 700; color: #42526E;';

        }   
} 

function toggleCheckboxValue(taskid, position, o) {
    console.log("toggleCheckboxValue id: position:", taskid, position);

    for (i=0; i<TaskBoard.length; i++){
        const findTask = TaskBoard[i].taskid;
        let subtaskValue = TaskBoard[i].subtaskSum[position];


        if (findTask == taskid){   
            console.log("taskfound at arrayposition:", i);
            console.log(" alter sumbSumvalue:", subtaskValue);

            
            if (subtaskValue === 0) {
                TaskBoard[i].subtaskSum[position] = 1;
            } else {
                TaskBoard[i].subtaskSum[position] = 0;

             }
            
             console.log("Neuer sumbSumvalue:", TaskBoard[i].subtaskSum[position]);

        }
            
    }
    OverlayTaskPopup(o);
    renderBoard();
}

function closeOverlay(closeId){ // Close Popup Task/OverlayTask
    Overlay.innerHTML = ``;
}                                   

function overlayDeleteTask(idTask, i){          //TO CODE: update to server! -> update BackgroundTaskBoard -> update TaskBoard
    let taskToDelete = BackgroundTaskBoard[i];
    if (taskToDelete.taskid == idTask){
        closeOverlay(idTask);
        TaskBoard.splice(i, 1);
        renderBoard();
    } else {
        console.log("Taskid & Position Backgroundtaskboard inkongruent.");
    }
}

