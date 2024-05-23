console.log("board.js_loaded");

let TaskBoard = []

let BackgroundTaskBoard = [            
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
        "taskid": "3"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "In Progress Example",
        "date": "10.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 0],
        "priority" : ["urgent", "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"],
        "assignedTo" : ["Max Mustermann", "Richard Roberts"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "1",
        "taskid": "2"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "Await Feedback Example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" : [1, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Max Mustermann", "Richard Roberts"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Annika_Michelstadt.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Emmanuel_Mauer.svg"],
        "type" : "2",
        "taskid": "1"
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
        "taskid": "4"
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
        "taskid": "5"
    },
    {
        "label": "/assets/svg/Labels Board card label technical task.svg",
        "title": "Technical Task Example",
        "description": "A Technical Task, enjoy!",
        "date": "03.12.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[0, 1],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Emmanuel Mauer", "Marcel Bensdorf", "Annika Michelstadt"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "2",
        "taskid": "6"
    },


];                                      // -> mit responteToJson befüllen       


//global variables & Elementtargets

const Searchfield = document.getElementById('boardInput').addEventListener('input', findTask);
let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');
let Overlay = document.getElementById('Board');

TaskBoard = BackgroundTaskBoard; //TaskBoard -> RAM Arbeitsarray --> BackgroundTaskBoard -> ROM 
console.log ("TaskBoard:", TaskBoard);

//functions general

function downloadData(){} //load from server    

function uploadData(){} //upload to server

function renderBoard(){ //load Task to Board/actualise while search active
    downloadData(); //load from server, actualise Task - Array
    toDoContainer();    //load to do´s 
    inProgressContainer();       //load tasks in progress
    awaitFeedbackContainer();    //load await feedback
}

function overlayTask(id){   //transmitt Id of Clicked Tasked -> OverlayTask(Id) 
    console.log("OverlayTask active", id);
    for (i=0; i<TaskBoard.length; i++){
        const TaskId = TaskBoard[i].taskid;
        if (TaskId == id){
            console.log("found Task at:", i);
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

//Board render Tasks 

function toDoContainer (){                  //Jeden ProgressBar eigene ID!
    console.log("toDoContainer_active");
    for(i=0; i<TaskBoard.length; i++){
        const toDoCard = TaskBoard[i];

        if (toDoCard.type == 0){
            console.log("toDoContainer If-Active");
            sumSubtask = toDoCard.subtaskSum[0]+toDoCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;  
            const progressBarId = 'cardToDoBar' + toDoCard.taskid;

            let emblems = '';                           //contact-emblems
            for (let i = 0; i < toDoCard.contactEmblem.length; i++){
                const src = toDoCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }           

                toDo.innerHTML += `
            <div class="card-body" onclick="overlayTask(${toDoCard.taskid})">
            <div id="cardHeader" class="card-header"><img src="${toDoCard.label}" alt="label"></div>
            <div id="cardTitle" class="card-title"><h4>${toDoCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${toDoCard.description}</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="cardToDoBar${toDoCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
            <div class="card-sum-subtask">${sumSubtask}/2 Subtasks</div></div>        
            <div id="cardParticipantsPriority" class="card-participants-priority">
            <div class="card-contact-emblems">${emblems}</div>
            <div><img src="${toDoCard.priority[1]}" alt="priority"></div>
            </div></div>
                    
            `           
            const progressBar = document.getElementById(progressBarId);
            progressBar.setAttribute('width', `${progressInPercent}%`);

        }
    }

    if (toDo.innerHTML === '') {
        toDo.innerHTML = `<img src="assets/svg/assets/svg/board_in_progress_example.svg" class="to-do-container-mobile" alt=""></div>`
    }

    //add Task - Cards with .innerHTML //
    // Label abfragen --> if label1 ---> img src "/img/label1.svg...", 
    // Checkbox abfragen: var checkbox = document.getElementById('checkboxId');
    //                    var checked = checkbox.checked;
}

function inProgressContainer (){
    console.log("inProgressContainer_active");

    for(i=0; i<TaskBoard.length; i++){
        const inProgressCard = TaskBoard[i];
        if (inProgressCard.type == 1){
            console.log("inProgressContainer If-Active");
            sumSubtask = inProgressCard.subtaskSum[0]+inProgressCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            const progressBarId = 'cardInProgressBar' + inProgressCard.taskid;


            let emblems = '';                           //contact-emblems
            for (let i = 0; i < inProgressCard.contactEmblem.length; i++){
                const src = inProgressCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }


            inProgress.innerHTML += `
        <div class="card-body" onclick="overlayTask(${inProgressCard.taskid})">
        <div id="cardHeader" class="card-header"><img src="${inProgressCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h4>${inProgressCard.title}</h4></div>
        <div id="cardDescription" class="card-description"><h4>${inProgressCard.description}</h4></div>
        
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

    /* ACTIVATE LATER -> 
    if (inProgress.innerHTML === '') {
        inProgress.innerHTML = `<img class="no-task-progress" src="/assets/svg/No_tasks_feedback_in_progress.svg" alt="">`
    }
    */
    
}

function awaitFeedbackContainer(){
    console.log("awaitFeedbackContainer_active");

    for(i=0; i<TaskBoard.length; i++){
        const awaitFeedbackCard = TaskBoard[i];
        if (awaitFeedbackCard.type == 2){
            console.log("awaitFeedbackContainer If-Active");
            
            sumSubtask = awaitFeedbackCard.subtaskSum[0]+awaitFeedbackCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            const progressBarId = 'cardAwaitFeedbackBar' + awaitFeedbackCard.taskid;

            let emblems = '';                           //contact-emblems
            for (let i = 0; i < awaitFeedbackCard.contactEmblem.length; i++){
                const src = awaitFeedbackCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }

            awaitFeedback.innerHTML += `
            <div class="card-body" onclick="overlayTask(${awaitFeedbackCard.taskid})">
            <div id="cardHeader" class="card-header"><img src="${awaitFeedbackCard.label}" alt="label"></div>
            <div id="cardTitle" class="card-title"><h4>${awaitFeedbackCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${awaitFeedbackCard.description}</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="cardAwaitFeedbackBar${awaitFeedbackCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
            <div class="card-sum-subtask">${sumSubtask}/2 Subtasks</div></div>        
            <div id="cardParticipantsPriority" class="card-participants-priority">
            <div class="card-contact-emblems">${emblems}</div>
            <div><img src="${awaitFeedbackCard.priority[1]}" alt="priority"></div>
            </div></div>
                
             `             
            const progressBar = document.getElementById(progressBarId);
            progressBar.setAttribute('width', `${progressInPercent}%`);
        }
    }
    if (toDo.innerHTML === '') {
        toDo.innerHTML = `<img src="assets/svg/assets/svg/board_in_progress_example.svg" class="to-do-container-mobile" alt=""></div>`
    }
}

// Overlay Task/Popup (angeklickter Task) // z-index in Class erhöhen! 
                                    // innerHTML += da unterliegender Inhalt soll erhalten bleiben!
                                    // assigned to mit eigener Fkt für Emblem oder als IMG


function OverlayTaskPopup(i){ 
        const OverlayTask = TaskBoard[i];
        Overlay.innerHTML += `  
        <div class="overlay-container">            
        <div class="overlay-task">
        <div id="OverlayHeader" class="overlay-card-header"><img src="${OverlayTask.label}" alt="label"><img src="/assets/svg/Close.svg" alt="close"></div>
        <div id="overlayTitle" class="overlay-card-title">${OverlayTask.title}</div>
        <div id="overlayDescription" class="overlay-card-description">${OverlayTask.description}</div>
        <div id="overlaydueDate" class="overlay-card-due-date"><div class="overlay-date">Due date:</div>${OverlayTask.date}</div>
        <div id="overlaypriority" class="overlay-card-priority"><div class="overlay-card-priority-text">
        Priority</div><div class="overlay-card-priority-text-img">${OverlayTask.priority[0]}<img src="${OverlayTask.priority[1]}" alt="priority"></div>
        </div>
        <div class="assigned-to">
        <div id="overlayAssignedTo"><h3>Assigned to: ${OverlayTask.assignedTo}</h3><div id="participants" class="participants"></div>  
        </div>
        <div class="overlay-card-subtasks">
        <div id="cardSubtasks"><h3>Subtasks: </h3><br><img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${OverlayTask.subtask[0]}<br>
        <img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${OverlayTask.subtask[1]}</div>
        <div id="cardChecklist" class="overlay-card-checklist"></div>
        </div>
        <div class="overlay-card-delete-edit">
        <div><img src="/assets/svg/delete.svg" alt="delete"><h3>Delete</h3></div><div><img src="/assets/svg/edit.svg" alt="Edit"><h3>Edit</h3></div>
        </div>
        </div>
        </div>

        `
} 