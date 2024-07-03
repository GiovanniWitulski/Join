let TaskBoard = []
let BackgroundTaskBoard = [] 
let toDoCard = [];
let OverlayTask = []; 
let overlayContacts;
let overlayPriority;
let overlayLabel;
let OverlaySubtasks;
let overlayTaskBoardPosition;
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
let overlay = document.getElementById('overlayContainer');
let overlaySub = document.getElementById('overlaySubCheckbox');



////////////Main Start Functions///////////

function cleanArrays(){
    TaskBoard = [];
    BackgroundTaskBoard = [];
}


async function downloadData() {
    cleanArrays();
    try {
        const data = await fetchData();
        formatTasks(data);
    } catch (error) {
        handleError(error);
    }
    renderBoard();
}


async function fetchData() {
    const response = await fetch(`${databaseURL}/tasks.json`);
    if (!response.ok) {
        throw new Error('Netzwerkantwort war nicht in Ordnung');
    }
    return await response.json();
}


function formatTasks(data) {
    const formattedTasks = Object.values(data).map(formatTask);
    updateTaskBoard(formattedTasks);
}


function formatTask(task) {
    return {
        label: task.label,
        title: task.title,
        description: task.description,
        date: task.date,
        subtask: Array.isArray(task.subtask) ? task.subtask : [],
        subtaskSum: Array.isArray(task.subtaskSum) ? task.subtaskSum : [],
        priority: task.priority || "", 
        assignedTo: Array.isArray(task.assignedTo) ? task.assignedTo : [],
        contactEmblem: Array.isArray(task.contactEmblem) ? task.contactEmblem : [],
        type: task.type,
        taskid: task.taskid
    };
}


function updateTaskBoard(formattedTasks) {
    BackgroundTaskBoard.push(...formattedTasks);
    TaskBoard = BackgroundTaskBoard;
}


function handleError(error) {
    console.error('Fehler beim Abrufen und Formatieren der Daten:', error);
}


function renderBoard(){ 
    taskContainer();                          
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
    }    // downloadData();  
}


//Search functions  /////////////////////////////////////////


function findTask(){
    const inputfield = document.getElementById('boardInput');
    const SearchedTask = inputfield.value;
    if (SearchedTask == ""){
        toDo.innerHTML = '';
        inProgress.innerHTML = '';
        awaitFeedback.innerHTML = '';
        TaskBoard = BackgroundTaskBoard;
        renderBoard();                //Searchfield empty again -> reload up do date status
        return;  }                    //Taskboard = BackgroundTaskBoard einfügen
    
    showSearchResults(SearchedTask);    
}


function showSearchResults(s){
    for (let i = 0; i < BackgroundTaskBoard.length; i++) {
        const task = BackgroundTaskBoard[i];   
        let taskShowId = "Task" + task.taskid;
        document.getElementById(taskShowId).classList.add('hidden');     
        if (task.title.toLowerCase().includes(s.toLowerCase()) || task.description.toLowerCase().includes(s.toLowerCase())) {
            let taskShowId = "Task" + task.taskid;
            document.getElementById(taskShowId).classList.remove('hidden');    
        } 
    }
    if (TaskBoard.length === 0){
        alert("No matching Task found!");
    }    
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
    overlayTaskBoardPosition = i;
    overlayContactsRead(i);
    overlayPrio();
    overlayLabelCheck();
    overlaySubtaskCheck();  
    overlayRender();
    ifOverlay();
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


async function removeTranslate(){
    await new Promise(resolve => setTimeout(resolve, 120));
    document.getElementById('overlayBoard').classList.remove('transition');
}


async function addTranslate(){
    await new Promise(resolve => setTimeout(resolve, 120));
    document.getElementById('overlayBoard').classList.add('transition');
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
        overlayLabel = TechnicalTaskLabel;
    } else {
        overlayLabel = UserStoryLabel;
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
    overlaySubtaskCheck()
    toggleSubstaskRender()
}


function toggleSubstaskRender(){            
    let toggledSubtasks = document.getElementById('overlaySubtaskContainer');
    toggledSubtasks.innerHTML = `${overlaySubtaskStorage}`;
    renderBoard();
}


function showShadow(){ 
    document.getElementById('mainContainerOverlay').classList.add('taskOverlayContainerShadow');
}


function removeShadow(){ 
    document.getElementById('mainContainerOverlay').classList.remove('taskOverlayContainerShadow');
}


async function closeOverlay(){ 
    if (document.getElementById('overlayBoard')) {
        document.getElementById('overlayBoard').classList.add('transition');}
    if (document.getElementById('boardEditTask')) {
        document.getElementById('boardEditTask').classList.add('transition');}        
    await new Promise(resolve => setTimeout(resolve, 120));
    overlay.innerHTML = ``;    
    renderBoard();
    findTask();
    uploadData();
    removeShadow();
}    


async function closeOverlaySideClick(){     
    if (document.getElementById('overlayBoard')) {
        document.getElementById('overlayBoard').classList.add('transition');}
    if (document.getElementById('boardEditTask')) {
        document.getElementById('boardEditTask').classList.add('transition');}        
    await new Promise(resolve => setTimeout(resolve, 120));
    overlay.innerHTML = ``;     
    removeShadow();
    renderBoard();
    findTask();
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
}


// Edit Task function //*css*/` added by Johannes


function switchToAddTask(type){
    if(window.innerWidth < 1250){
        window.location.href="/add_task.html";
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

