console.log("board.js_loaded");

let TaskBoard = [           
    {
        "label": "/assets/svg/Labels Board card label technical task.svg",
        "title": "Technical Task Example",
        "description": "To Do Example",
        "date": "03.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "priority" : ["medium", "/assets/svg/capa_1_medium_priority.svg"],
        "assignedTo" : ["Max Mustermann", "Richard Roberts"], // oder Id's der Mitarbeiter
        "type" : "0",
        "taskid": "1"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "In Progress Example",
        "date": "10.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "priority" : ["urgent", "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"],
        "assignedTo" : ["Max Mustermann", "Richard Roberts"], // oder Id's der Mitarbeiter
        "type" : "1",
        "taskid": "2"
    },
    {
        "label": "/assets/svg/Labels_Board_card_label_blue_User_Story.svg",
        "title": "User Story Example",
        "description": "Await Feedback Example",
        "date": "08.05.2035",
        "subtask" : ["check this subtask.", "click on the small box to check it."],
        "priority" : ["low", "/assets/svg/capa_priority_low.svg"],
        "assignedTo" : ["Max Mustermann", "Richard Roberts"], // oder Id's der Mitarbeiter
        "type" : "2",
        "taskid": "3"
    }
];                         


//global variables

const Searchfield = document.getElementById('boardInput').addEventListener('input', findTask);
let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');

//functions



function downloadData(){} //load from server    

function uploadData(){} //upload to server

function renderBoard(){
    downloadData(); //load from server, actualise Task - Array
    toDoContainer();    //load to do´s 
    inProgressContainer();       //load tasks in progress
    awaitFeedbackContainer();    //load await feedback

}

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
    
function toDoContainer (){
    console.log("toDoContainer_active");
    for(i=0; i<TaskBoard.length; i++){
        const toDoCard = TaskBoard[i];
        if (toDoCard.type == 0){
            console.log("toDoContainer If-Active");
            toDo.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="${toDoCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h2>${toDoCard.title}</h2></div>
        <div id="cardDescription" class="card-description"><h3>${toDoCard.description}</h3></div>
        <div id="dueDate" class="due-date"><h3>${toDoCard.date}</h3></div>
        <div class="assigned-to">
        <div id="assignedTo"><h3>Assigned to: ${toDoCard.assignedTo}</h3><div id="participants" class="participants"></div>
        </div>
        <div class="card-subtasks">
        <div id="cardSubtasks"><h3>Subtasks: </h3><br><img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${toDoCard.subtask[0]}<br>
                               <img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${toDoCard.subtask[1]}</div>
        <div id="cardChecklist" class="checklist"></div>
        </div>
        <div class="delete-edit">
        <div><img src="/assets/svg/delete.svg" alt="delete"><h3>Delete</h3></div><div><img src="/assets/svg/edit.svg" alt="Edit"><h3>Edit</h3></div>
        </div>
        </div>
         `
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
            inProgress.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="${inProgressCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h2>${inProgressCard.title}</h2></div>
        <div id="cardDescription" class="card-description"><h3>${inProgressCard.description}</h3></div>
        <div id="dueDate" class="due-date"><h3>${inProgressCard.date}</h3></div>
        <div class="assigned-to">
        <div id="assignedTo"><h3>Assigned to: ${inProgressCard.assignedTo}</h3><div id="participants" class="participants"></div>
        </div>
        <div class="card-subtasks">
        <div id="cardSubtasks"><h3>Subtasks: </h3><br><img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${inProgressCard.subtask[0]}<br>
                               <img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${inProgressCard.subtask[1]}</div>
        <div id="cardChecklist" class="checklist"></div>
        </div>
        <div class="delete-edit">
        <div><img src="/assets/svg/delete.svg" alt="delete"><h3>Delete</h3></div><div><img src="/assets/svg/edit.svg" alt="Edit"><h3>Edit</h3></div>
        </div>
        </div>
         `
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
            awaitFeedback.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="${awaitFeedbackCard.label}" alt="label"></div>
        <div id="cardTitle" class="card-title"><h2>${awaitFeedbackCard.title}</h2></div>
        <div id="cardDescription" class="card-description"><h3>${awaitFeedbackCard.description}</h3></div>
        <div id="dueDate" class="due-date"><h3>${awaitFeedbackCard.date}</h3></div>
        <div class="assigned-to">
        <div id="assignedTo"><h3>Assigned to: ${awaitFeedbackCard.assignedTo}</h3><div id="participants" class="participants"></div>
        </div>
        <div class="card-subtasks">
        <div id="cardSubtasks"><h3>Subtasks: </h3><br><img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${awaitFeedbackCard.subtask[0]}<br>
                               <img onclick="toggleCheckbox(this)"  src="/assets/svg/rectangle.svg"> ${awaitFeedbackCard.subtask[1]}</div>
        <div id="cardChecklist" class="checklist"></div>
        </div>
        <div class="delete-edit">
        <div><img src="/assets/svg/delete.svg" alt="delete"><h3>Delete</h3></div><div><img src="/assets/svg/edit.svg" alt="Edit"><h3>Edit</h3></div>
        </div>
        </div>
         `
        }
    }

    if (toDo.innerHTML === '') {
        toDo.innerHTML = `<img src="assets/svg/assets/svg/board_in_progress_example.svg" class="to-do-container-mobile" alt=""></div>`
    }

}




