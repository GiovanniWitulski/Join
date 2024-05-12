
// String der alle Task beinhalt, Testweise befüllt

let Tasks = [           
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
    function downloadData(){} //load from server, actualise Task - Array
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

function searchResult(s){        //Text im Titel oder Beschreibung --> Array Tasks noch auf API umschreiben
    //Datenbankabgleich

    console.log("SearchResult übergeben:", s);

    for(i=0; i<Tasks.length; i++){
        if (Tasks[i].title == s && Tasks[i].type == 0){
            toDoContainer(i);    //Card einfügen
        } else if (Tasks[i].description == s && Tasks[i].type == 0){
            toDoContainer(i);   //Card einfügen
        }
        if (Tasks[i].title == s && Tasks[i].type == 1){
            inProgressContainer(i);   //Card einfügen
        } else if (Tasks[i].description == s && Tasks[i].type == 1){
            inProgressContainer(i);  //Card einfügen
        }
        if (Tasks[i].title == s && Tasks[i].type == 2){
            awaitFeedbackContainer(i);  //Card einfügen
        } else if (Tasks[i].description == s && Tasks[i].type == 2){
            awaitFeedbackContainer(i);  //Card einfügen
        }
       }

}
    
function toDoContainer (){

    for(i=0; i<Tasks.length; i++){
        const toDoCard = Task[i];
        if (toDo.type == 0){
            toDo.innerHTML += `
        <div class="card-body">
        <div id="cardHeader" class="card-header"><img src="" alt="label"></div>
        <div id="cardTitle" class="card-title"><h1></h1></div>
        <div id="cardDescription" class="card-description"><h3></h3></div>
        <div id="dueDate" class="due-date"><h3></h3></div>
        <div class="assigned-to">
        <div id="assignedTo"><h3>Assigned to:</h3><div id="participants" class="participants"></div>
        </div>
        <div class="card-subtasks">
        <div id="cardSubtasks"><h3>Subtasks</h3></div>
        <div id="cardChecklist" class="checklist"></div>
        </div>
        <div class="delete-edit">
        <div><img src="/assets/svg/delete.svg" alt="delete"><h3>Delete</h3></div><div><img src="/assets/svg/edit.svg" alt="Edit"><h3>Edit</h3></div>
        </div>
        </div>
         `
        }
    }

    //add Task - Cards with .innerHTML //
    // Label abfragen --> if label1 ---> img src "/img/label1.svg...", 
    // Checkbox abfragen: var checkbox = document.getElementById('checkboxId');
    //                    var checked = checkbox.checked;
}

function inProgressContainer (){
    let inProgress = document.getElementById('inProgressContainer'); 
    
    //add Task - Cards with .innerHTML //
}

function awaitFeedbackContainer(){
    let inProgress = document.getElementById('inProgressContainer'); 
    awaitFeedback.innerHTML += ``

    //add Task - Cards with .innerHTML //
}




