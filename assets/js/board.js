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

let BackgroundTaskBoard = [   
    {
        "label": "/assets/svg/Labels Board card label technical task.svg",
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
        "assignedTo" : ["Anton Millenium", "Mitchel Bobford", "Enrico Montequia"], 
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
        "assignedTo" : ["Marcel Bensdorf", "Annika Michelstadt"], 
        "contactEmblem" : ["/assets/svg/contact_emblem_Marcel_Bensdorf.svg", "/assets/svg/contact_emblem_Annika_Michelstadt.svg"],
        "type" : "2",
        "taskid": "7"
    },


];                                      // -> mit responseToJson befüllen       


//global variables & Elementtargets

const Searchfield = document.getElementById('boardInput').addEventListener('input', findTask);
let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');
let done = document.getElementById('doneContainer');
let Overlay = document.getElementById('overlayContainer');

TaskBoard = BackgroundTaskBoard; //TaskBoard -> RAM Arbeitsarray --> BackgroundTaskBoard -> ROM 
console.log ("TaskBoard:", TaskBoard);

//functions general

function downloadData(){} //load from server    

function uploadData(){} //upload to server

function renderBoard(){ //load Task to Board/actualise while search active
    downloadData(); //load from server, actualise Task - Array
    toDoContainer();    //load task to do 
    inProgressContainer();       //load tasks in progress 
    awaitFeedbackContainer();    //load task awaiting feedback 
    doneContainer();            //load tasks done 
}

function closeOverlay(closeId){ // Close Popup Task/OverlayTask
    Overlay.innerHTML = ``;
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

// function overlayDeleteTask(idtask){}

// function overlayEditTask(idtask){}

// function upload 

// function download

// function checkbox -> Wert in Array änder + checkbox 

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
/////////////////////////////////////////////////////////////

//Board render Tasks 

function toDoContainer (){                  
    console.log("toDoContainer_active");
    toDo.innerHTML = '';

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
    inProgress.innerHTML = '';

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
    awaitFeedback.innerHTML = '';

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

function doneContainer(){
    console.log("DoneContainer_active");
    done.innerHTML='';

    for(i=0; i<TaskBoard.length; i++){
        const doneCard = TaskBoard[i];
        if (doneCard.type == 3){
            console.log("doneContainer If-Active");
            
            sumSubtask = doneCard.subtaskSum[0]+doneCard.subtaskSum[1];
            const progressInPercent = sumSubtask * 50;
            const progressBarId = 'doneBar' + doneCard.taskid;

            let emblems = '';                           //contact-emblems
            for (let i = 0; i < doneCard.contactEmblem.length; i++){
                const src = doneCard.contactEmblem[i];
                emblems += '<img class="card-contact-emblems-img" src=" '+src+' " alt="contact-emblem">';
            }

            done.innerHTML += `
            <div class="card-body" onclick="overlayTask(${doneCard.taskid})">
            <div id="cardHeader" class="card-header"><img src="${doneCard.label}" alt="label"></div>
            <div id="cardTitle" class="card-title"><h4>${doneCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${doneCard.description}</h4></div>
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
    if (toDo.innerHTML === '') {
        toDo.innerHTML = `<img src="assets/svg/assets/svg/board_in_progress_example.svg" class="to-do-container-mobile" alt=""></div>`
    }
}



// Overlay TECHNICAL Task/Popup (angeklickter Task) // Template nach ändern Userlabel/TechicalLabel
                                                    //--> class.remove/add -> Textstyle

function OverlayTaskPopup(i){   // TO CODE: EditTaskFkt, DeleteTaskFKT
       
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


        Overlay.innerHTML += `  
        <div id="${OverlayTask.taskid}" class="overlay-container">            
        <div class="overlay-task">
        <div id="OverlayHeader" class="overlay-card-header"><img src="${OverlayTask.label}" alt="label"><img onclick="closeOverlay()" src="/assets/svg/close_black.svg" alt="close"></div>
        <div id="overlayTitle" class="overlay-card-title">${OverlayTask.title}</div>
        <div id="overlayDescription" class="overlay-card-description">${OverlayTask.description}</div>
        <div id="overlaydueDate" class="overlay-card-due-date"><div>Due date:</div><div class="overlay-due-date">${OverlayTask.date}</div></div>
        <div id="overlaypriority" class="overlay-card-priority"><div class="overlay-card-priority-text">
        Priority</div><div class="overlay-card-priority-text-img">${OverlayTask.priority[0]}<img src="${OverlayTask.priority[1]}" alt="priority"></div>
        </div>
        <div id="overlayAssignedTo" class="overlay-assigned-to">
        <div class="overlay-assigned-to-text">Assigned to:</div><div id="overlayParticipants" class="overlay-participants">${overlayContacts}</div>  
        </div>
        <div class="overlay-card-subtasks">
        <div class="overlay-substasks-text">Subtasks:</div><div class="overlay-checkbox"><div class="overlay-substask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, 0, ${i})"  src=${check0}> ${OverlayTask.subtask[0]}</div>
        <div class="overlay-substask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, 1, ${i})"  src=${check1}> ${OverlayTask.subtask[1]}</div></div>
        </div>
        <div class="overlay-card-delete-edit">
        <div onclick="overlayDeleteTask" class="overlay-cde"><img class="overlay-cde-img1" src="/assets/svg/delete.svg" alt="delete">Delete</div><div onclick="window.location.href='//127.0.0.1:5500/add_task.html'" class="overlay-cde"><img class="overlay-cde-img2" src="/assets/svg/edit.svg" alt="Edit">Edit</div>
        </div>
        </div>
        </div>

        `

        

} 