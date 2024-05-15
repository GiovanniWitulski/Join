console.log("board.js_loaded");

let TaskBoard = [           
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
        "taskid": "1"
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
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "1",
        "taskid": "2"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "Await Feedback Example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "subtaskSum" :[1, 1],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Max Mustermann", "Richard Roberts"], // oder Id's der Mitarbeiter
        "contactEmblem" : ["/assets/svg/contact_emblem_Emmanuel_Mauer.svg", "/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "2",
        "taskid": "3"
    }
];                         


//global variables & Elementtargets

const Searchfield = document.getElementById('boardInput').addEventListener('input', findTask);
let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');
let Overlay = document.getElementById('Board');

//functions

function downloadData(){} //load from server    

function uploadData(){} //upload to server

function renderBoard(){
    downloadData(); //load from server, actualise Task - Array
    toDoContainer();    //load to do´s 
    inProgressContainer();       //load tasks in progress
    awaitFeedbackContainer();    //load await feedback

}

//Search functions 

function findTask(event){
    console.log("findTaskStarted");
    const SearchedTask = event.target.value;
    if (SearchedTask == ""){
        console.log("input field empty");
        renderBoard();                //Searchfield empty again -> reload up do date status
        return;
    }
    console.log("Aktueller Suchfeldwert:",SearchedTask);
    let toDo = document.getElementById('toDoContainer');
    let inProgress = document.getElementById('inProgressContainer');
    let awaitFeedback = document.getElementById('awaitFeedbackContainer');
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    awaitFeedback.innerHTML = '';

    searchResult(SearchedTask);
}

function searchResult(s){       
    console.log("SearchResult übergeben:", s);

    for(i=0; i<TaskBoard.length; i++){
        if (TaskBoard[i].title == s && TaskBoard[i].type == 0){
            toDoContainer(i);    //Card einfügen
        } else if (TaskBoard[i].description == s && TaskBoard[i].type == 0){
            toDoContainer(i);   //Card einfügen
        }
        if (TaskBoard[i].title == s && TaskBoard[i].type == 1){
            inProgressContainer(i);   //Card einfügen
        } else if (TaskBoard[i].description == s && TaskBoard[i].type == 1){
            inProgressContainer(i);  //Card einfügen
        }
        if (TaskBoard[i].title == s && TaskBoard[i].type == 2){
            awaitFeedbackContainer(i);  //Card einfügen
        } else if (TaskBoard[i].description == s && TaskBoard[i].type == 2){
            awaitFeedbackContainer(i);  //Card einfügen
        }
       }

}

//Board render Tasks
        
        //--> Subtasks variable (subtaskSum[1,0] --> 1+0 -> (AdditionswertArray -> 1/2 Subtasks erledigt)
        // contact emblems über eigene FKT einfügen lassen, da Anzahl variieren kann.
        //Falls Subtasks nicht immer zwei Stück -> progressbar => sumSubtask/subtask.length = X -> % progressbar
function toDoContainer (){
    console.log("toDoContainer_active");
    for(i=0; i<TaskBoard.length; i++){
        const toDoCard = TaskBoard[i];
        if (toDoCard.type == 0){
            console.log("toDoContainer If-Active");

            sumSubtask = toDoCard.subtaskSum[0]+toDoCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            

            console.log("Sumsubtask",sumSubtask);
            toDo.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="${toDoCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h4>${toDoCard.title}</h4></div>
        <div id="cardDescription" class="card-description"><h4>${toDoCard.description}</h4></div>

        <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
        <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
        <rect id="progressRect" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
        <div class="card-sum-subtask">${sumSubtask}/2 Subtask</div></div>
        
        <div id="cardParticipantsPriority" class="card-participants-prority">
        <div id="cardContactEmblems" class="card-contact-emblems">
        <img src="${toDoCard.contactEmblem[0]}" alt="emblem"><img src="${toDoCard.contactEmblem[1]}" alt="emblem"><img src="${toDoCard.contactEmblem[2]}" alt="emblem"> 
        <div id="cardPriority"><img src="${toDoCard.priority[1]}" alt="priority"></div>
        </div>
        
         `
         const progressBar = document.getElementById('progressRect');
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

            inProgress.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="${inProgressCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h4>${inProgressCard.title}</h4></div>
        <div id="cardDescription" class="card-description"><h4>${inProgressCard.description}</h4></div>
        
        <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
        <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
        <rect id="cardInProgressBar" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
        <div class="card-sum-subtask">${sumSubtask}/2 Subtask</div></div>

        <div id="cardParticipantsPriority" class="card-participants-prority">
        <div id="cardContactEmblems" class="card-contact-emblems">
        <img src="${inProgressCard.contactEmblem[0]}" alt="emblem"><img src="${inProgressCard.contactEmblem[1]}" alt="emblem"><img src="${inProgressCard.contactEmblem[2]}" alt="emblem"> 
        <div id="cardPriority"><img src="${inProgressCard.priority[1]}" alt="priority"></div>
        </div>

         `
         const progressBar = document.getElementById('cardInProgressBar');
         progressBar.setAttribute('width', `${progressInPercent}%`);

        }
    }

    if (inProgress.innerHTML === '') {
        inProgress.innerHTML = `<img class="no-task-progress" src="/assets/svg/No_tasks_feedback_in_progress.svg" alt="">`
    }
    
}

function awaitFeedbackContainer(){
    console.log("awaitFeedbackContainer_active");

    for(i=0; i<TaskBoard.length; i++){
        const awaitFeedbackCard = TaskBoard[i];
        if (awaitFeedbackCard.type == 2){
            console.log("awaitFeedbackContainer If-Active");
            sumSubtask = awaitFeedbackCard.subtaskSum[0]+awaitFeedbackCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;

            awaitFeedback.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="${awaitFeedbackCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h4>${awaitFeedbackCard.title}</h4></div>
        <div id="cardDescription" class="card-description"><h4>${awaitFeedbackCard.description}</h4></div>
        
        <div class="assigned-to">
        <div id="assignedTo"><h4>Assigned to: ${awaitFeedbackCard.assignedTo}</h4><div id="participants" class="participants"></div>
        </div>
        <div class="card-subtasks">
        <div id="cardSubtasks" class="card-subtasks">         <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
        <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
        <rect id="awaitFeedbackBar" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
        <div class="card-sum-subtask">${sumSubtask}/2 Subtask</div></div>

        <div id="cardParticipantsPriority" class="card-participants-prority">
        <div id="cardContactEmblems" class="card-contact-emblems">
        <img src="${awaitFeedbackCard.contactEmblem[0]}" alt="emblem"><img src="${awaitFeedbackCard.contactEmblem[1]}" alt="emblem"><img src="${awaitFeedbackCard.contactEmblem[2]}" alt="emblem"> 
        <div id="cardPriority"><img src="${awaitFeedbackCard.priority[1]}" alt="priority"></div>
        </div>

        
         `
         const progressBar = document.getElementById('awaitFeedbackBar');
         progressBar.setAttribute('width', `${progressInPercent}%`);

        }
    }

    if (toDo.innerHTML === '') {
        toDo.innerHTML = `<img src="assets/svg/assets/svg/board_in_progress_example.svg" class="to-do-container-mobile" alt=""></div>`
    }

}

// Overlay Task (angeklickter Task) // z-index in Class erhöhen! 
                                    // innerHTML += da unterliegender Inhalt soll erhalten bleiben!
                                    // assigned to mit eigener Fkt für Emblem oder als IMG
function OverlayTask(i){ 
        const Overlay = TaskBoard[i];
        Overlay.innerHTML += `              
        <div class="overlay-task">
        <div id="verlayHeader" class="card-header"><img src="${Overlay.label}" alt="label"><img src="/assets/svg/Close.svg" alt="close"></div>
        <div id="overlyTitle" class="card-title"><h2>${Overlay.title}</h2></div>
        <div id="overlayDescription" class="card-description"><h3>${Overlay.description}</h3></div>
        <div id="overlaydueDate" class="due-date"><div class="overlay-date">Due date:</div><h3>${Overlay.date}</h3></div>
        <div id="overlaypriority" class="overlay-priority"></div>
        <div class="assigned-to">
        <div id="overlayAssignedTo"><h3>Assigned to: ${Overlay.assignedTo}</h3><div id="participants" class="participants"></div>  
        </div>
        <div class="card-subtasks">
        <div id="cardSubtasks"><h3>Subtasks: </h3><br><img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${Overlay.subtask[0]}<br>
        <img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${Overlay.subtask[1]}</div>
        <div id="cardChecklist" class="checklist"></div>
        </div>
        <div class="delete-edit">
        <div><img src="/assets/svg/delete.svg" alt="delete"><h3>Delete</h3></div><div><img src="/assets/svg/edit.svg" alt="Edit"><h3>Edit</h3></div>
        </div>
        </div>

        `
}