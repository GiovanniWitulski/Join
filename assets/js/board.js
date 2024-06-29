let TaskBoard = []
let BackgroundTaskBoard = [] 
let OverlayTask;
let overlayContacts;
let overlayPriority;
let OverlayLabel;
let OverlaySubtasks;
let OverlayTaskBoardPosition;
let overlaySubtaskStorage;
let check0;
let check1;
let check = "/assets/svg/checkmark.svg";
let nocheck = "/assets/svg/rectangle.svg";

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
let overlaySub = document.getElementById('overlaySubCheckbox');

let toDoCard = [];

////////////Main Start Functions///////////

function cleanArrays(){
    TaskBoard = [];
    BackgroundTaskBoard = [];
}

async function downloadData() {
    cleanArrays()
    try {
        const response = await fetch(`${databaseURL}/tasks.json`);
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht in Ordnung');
        }
        const data = await response.json();
        
        Object.values(data).forEach(task => {
            const subtaskArray = Array.isArray(task.subtask) ? task.subtask : [];
            const subtaskSumArray = Array.isArray(task.subtaskSum) ? task.subtaskSum : [];
            const priorityArray = Array.isArray(task.priority) ? task.priority : [];
            const assignedToArray = Array.isArray(task.assignedTo) ? task.assignedTo : [];
            const contactEmblemArray = Array.isArray(task.contactEmblem) ? task.contactEmblem : [];
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
            BackgroundTaskBoard.push(formattedTask);
        });
        TaskBoard = BackgroundTaskBoard;
    } catch (error) {
        console.error('Fehler beim Abrufen und Formatieren der Daten:', error);
    }
    renderBoard();
}

function renderBoard(){ 
    taskContainer();    //render taskcontainers // in case of empty taskboard -> 
                        // put in BackgroundTaskboard = TaskBoard   
}

function overlayTask(id){    
    task = TaskBoard.findIndex(t => t.taskid === id);
    OverlayTaskPopup(task);
}

async function uploadData() {
    const databaseURL = 'https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app';
    try {   const response = await fetch(`${databaseURL}/tasks.json`, {
            method: 'PUT', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(TaskBoard) 
        });
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht in Ordnung');
        } 
        const data = await response.json();
    } catch (error) {
        console.error('Fehler beim Hochladen der Daten:', error);
    }    downloadData();  
}

//Search functions  /////////////////////////////////////////

function findTask(event){
    const SearchedTask = event.target.value;
    if (SearchedTask == ""){
        console.log("input field empty");
        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        awaitFeedback.innerHTML = '';
        TaskBoard = BackgroundTaskBoard;
        renderBoard();                //Searchfield empty again -> reload up do date status
        return;  }                    //Taskboard = BackgroundTaskBoard einfügen
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    awaitFeedback.innerHTML = '';
    searchResult(SearchedTask);
}

function searchResult(s){    
    TaskBoard = [];
    for (let i = 0; i < BackgroundTaskBoard.length; i++) {
        const task = BackgroundTaskBoard[i];        
        if (task.title.toLowerCase().includes(s.toLowerCase()) || task.description.toLowerCase().includes(s.toLowerCase())) {
            console.log("Found at i = ", i);
            TaskBoard.push(task);       
        }
    }
    if (TaskBoard.length === 0){
        alert("No matching Task found!");
    }    
    renderBoard();
}

// drag & drop functions  //////////////7
function startDragging(id){
    currentDraggedTask = id;
    highlight(id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dropAt(newType, id){
    for (i=0; i<TaskBoard.length; i++){
        taskToMove = TaskBoard[i].taskid;
        if (taskToMove == currentDraggedTask){
            TaskBoard[i].type = newType;                     
            uploadData();
            renderBoard();       
            removeHighlight(id);
            return;
        }
    }
}

// OVERLAY TASK / POPUP ///////////////////////

function OverlayTaskPopup(i) {
    OverlayTask = TaskBoard[i];
    OverlayTaskBoardPosition = i;
    overlayContactsRead(i);
    overlayPrio();
    overlayLabelCheck();
    overlaySubtaskCheck();  
    overlayRender();
    removeTranslate();
    showShadow();
}

function overlayContactsRead(i){
    
    overlayContacts = '';
    let emblem = '';
    if(TaskBoard[i].contactEmblem.length > 0){
     
        for (let c = 0; c < OverlayTask.contactEmblem.length; c++) {
            const contactName = OverlayTask.assignedTo[c];
            const src = OverlayTask.contactEmblem[c];
            emblem = src;
            overlayContacts += '<div class="overlay-assigned-to-contacts">' + emblem + '<div class="overlay-contact-name">' + contactName + '</div></div>';
        }
    }else{
    }    
}

function overlayPrio(){
    overlayPriority = '';
    if (OverlayTask.priority === "low") {
        overlayPriority = "/assets/svg/capa_priority_low.svg";
    } else if (OverlayTask.priority === "medium") {
        overlayPriority = "/assets/svg/capa_1_medium_priority.svg";
    } else if (OverlayTask.priority === "urgent") {
        overlayPriority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"
    }
}

async function overlayRender(){
    Overlay.innerHTML = `
    <div id="${OverlayTask.taskid}" class="overlay-container">
    <div id= "overlayBoard" class="overlay-task transition">
    <div id="overlayHeader" class="overlay-card-header">${OverlayLabel}<img class="close-overlay" onclick="closeOverlay()" src="/assets/svg/close_black.svg" alt="close"></div>
    <div id="overlayTitle" class="overlay-card-title">${OverlayTask.title}</div>
    <div id="overlayDescription" class="overlay-card-description">${OverlayTask.description}</div>
    <div id="overlaydueDate" class="overlay-card-due-date"><div id="overlayDueDate">Due date:</div><div class="overlay-due-date">${OverlayTask.date}</div></div>
    <div id="overlaypriority" class="overlay-card-priority"><div id="overlayPriorityText" class="overlay-card-priority-text">
    Priority</div><div class="overlay-card-priority-text-img"><img src="${overlayPriority}" alt="priority">${OverlayTask.priority}</div>
    </div>
    <div id="overlayAssignedTo" class="overlay-assigned-to">
    <div id="overlayAssignedToText" class="overlay-assigned-to-text">Assigned to:</div><div id="overlayParticipants" class="overlay-participants">${overlayContacts}</div>
    </div>
    <div class="overlay-card-subtasks">
    <div id="overlaySubstasksText" class="overlay-substasks-text">Subtasks:</div>
    <div id="overlaySubtaskContainer">${overlaySubtaskStorage}</div>
    </div>        
    <div class="overlay-card-delete-edit">
    <div onclick="overlayDeleteTask(${OverlayTask.taskid}, ${OverlayTaskBoardPosition})" class="overlay-cde"><img class="overlay-cde-img1" src="/assets/svg/delete.svg" alt="delete">Delete</div><div class="placeholder-div">|</div><div onclick="editTaskOverlay(${OverlayTask.taskid}, ${OverlayTaskBoardPosition})" class="overlay-cde"><img class="overlay-cde-img2" src="/assets/svg/Subtasks%20icons11-4.svg" alt="Edit">Edit</div>
    </div>
    </div>
    </div>
    `;

    ifOverlay();     
   
    
}

async function removeTranslate(){
    await new Promise(resolve => setTimeout(resolve, 120));
    document.getElementById('overlayBoard').classList.remove('transition');
}

async function addTranslate(){
    await new Promise(resolve => setTimeout(resolve, 120));
    document.getElementById('overlayBoard').classList.add('transition');
}

function overlayCheckmark(){
    const checkmark0 = OverlayTask.subtaskSum[0];
    const checkmark1 = OverlayTask.subtaskSum[1];
    check0 = '';
    check1 = '';
    let check = "/assets/svg/checkmark.svg";
    let nocheck = "/assets/svg/rectangle.svg";
    if (checkmark0 == 0) { check0 = nocheck; } else { check0 = check; }
    if (checkmark1 == 0) { check1 = nocheck; } else { check1 = check; }
}

function overlaySubtaskCheck(){
    overlaySubtaskStorage = '';
    if (OverlayTask.subtask.length > 0){
        for(i = 0; i < OverlayTask.subtaskSum.length; i++){
            let checkmark = OverlayTask.subtaskSum[i];        
            if (checkmark == 1){
                overlaySubtaskStorage += `<div id="overlaySubtask4" class="overlay-subtask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, ${i})"  src=${check}> ${OverlayTask.subtask[i]}</div>
                `;}
                if (checkmark == 0){
                    overlaySubtaskStorage += `<div id="overlaySubtask4" class="overlay-subtask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, ${i})"  src=${nocheck}> ${OverlayTask.subtask[i]}</div>
                    `;}
                }
            }
        }
        
function overlayLabelCheck(){
    if (OverlayTask.label == 1) {
        OverlayLabel = TechnicalTaskLabel;
    } else {
        OverlayLabel = UserStoryLabel;
    }
}

function ifOverlay(){
    if (OverlayTask.subtask === undefined || OverlayTask.subtask === null) {
        document.getElementById('overlaySubtaskContainer').classList.add('hide'); }
        if (OverlayTask.label === 1) {
            document.getElementById('overlayDueDate').style.cssText = 'font-weight: 700; color: #42526E;';
            document.getElementById('overlayAssignedToText').style.cssText = 'font-weight: 700; color: #42526E;';
            document.getElementById('overlayPriorityText').style.cssText = 'font-weight: 700; color: #42526E;';
            document.getElementById('overlaySubstasksText').style.cssText = 'font-weight: 700; color: #42526E;';
        }
    }
            
function toggleCheckboxValue(taskid, position) {
    for (let i = 0; i < TaskBoard.length; i++) {
        const findTask = TaskBoard[i].taskid;
        let subtaskValue = TaskBoard[i].subtaskSum[position];
        if (findTask == taskid) {
            if (subtaskValue === 0) {
                TaskBoard[i].subtaskSum[position] = 1;
            } else {
                TaskBoard[i].subtaskSum[position] = 0;
            }
        }
    }
    OverlayTaskPopup(OverlayTaskBoardPosition);
    document.getElementById('overlayBoard').classList.remove('transition');
    renderBoard();
}

function showShadow(){ 
    document.getElementById('mainContainerOverlay').classList.add('addTaskOverlayContainerShowing');
}

function removeShadow(){ 
    document.getElementById('mainContainerOverlay').classList.remove('addTaskOverlayContainerShowing');
}

async function closeOverlay(closeId){ // Close Popup Task/OverlayTask
    if (document.getElementById('overlayBoard')) {
        document.getElementById('overlayBoard').classList.add('transition');}
    if (document.getElementById('boardEditTask')) {
        document.getElementById('boardEditTask').classList.add('transition');}        
    await new Promise(resolve => setTimeout(resolve, 120));
    Overlay.innerHTML = ``;    
    renderBoard();
    uploadData();
    removeShadow();
}        

function overlayDeleteTask(idTask, i){         
    let taskToDelete = BackgroundTaskBoard[i];
    if (taskToDelete.taskid == idTask){
        TaskBoard.splice(i, 1);
        closeOverlay(idTask);
    } else {
        console.log("Taskid & Position Backgroundtaskboard inkongruent.");
    }    
}

function deleteTask(i){
    TaskBoard.splice(i, 1);
    console.log(TaskBoard);
}

// Edit Task function //*css*/` added by Johannes

function switchToAddTask(type){
    if(window.innerWidth < 1250){
        window.location.href='//127.0.0.1:5500/add_task.html';
    }else{ 
        changeToActive('medium-btn');
        document.getElementById('addTaskOverlayContainer').classList.remove('addTaskOverlayContainer');
        document.getElementById('addTaskOverlayContainer').classList.add('addTaskOverlayContainerShowing');
        document.getElementById('addTaskForm').onsubmit = function(event){
            getTheDataForPostTask(event, type);            
            
        }        
        document.getElementById('body').classList.add('noScroll');
        
    }
}

function hideOverlay(){
    document.getElementById('addTaskOverlayContainer').classList.remove('addTaskOverlayContainerShowing');
    document.getElementById('addTaskOverlayContainer').classList.add('addTaskOverlayContainer');
    document.getElementById('body').classList.remove('noScroll');
    changeToActive('medium-btn');
    clearTheForm();
}