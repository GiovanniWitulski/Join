// Board render Tasks container /////////////////

let toDoTask = []
let newLabel;   
let newSumSubtask;
let newAmountSubtask;
let newSumSubtaskCalc;
let newProgressInPercent;
let newProgressBarId;
let newEmblems;
let newPriority;
let subTaskChecked;
let taskToMove;

// content functions //

function startReadingTasks(){
    for(x=0; x<TaskBoard.length; x++){
        const toDoCard = TaskBoard[x];              
        toDoTask = toDoCard;
            subTaskCheck();
            readInTasks();
        if (toDoCard.type === 0 || toDoCard.type === "0"){
            renderToDo();       }
        if (toDoCard.type === 1 || toDoCard.type === "1"){
            renderInProgress();    }
        if (toDoCard.type === 2 || toDoCard.type === "2"){            
            renderAwaitFeedback();  }
        if (toDoCard.type === 3 || toDoCard.type === "3"){            
            renderDone();   }  }
}

function subTaskCheck(){ 
    subTaskChecked = 0;  
    if(toDoTask.subtaskSum){
    if (toDoTask.subtaskSum.length > 0){
    subTaskChecked = 1; 
    } else {
        subTaskChecked = 0;
    }    
    }
}

function subTaskNoShow(){
    if (subTaskChecked === 0){       
       let idSubtask = 'cardSubtasks' + toDoTask.taskid;
       document.getElementById(idSubtask).classList.add('hidden');
    } 
}

function readInTasks(){         //reading Tasksinformation
    label(toDoTask); 
    amountSubTasks();
    calcProgressBar();
    descriptionChar();   
    emblemSvg();  
    priorityEmblem();
}

function label(){     
    if(toDoTask.label === 1){
        newLabel = technicalTaskLabel;
    } else {
        newLabel = userStoryLabel;
    }                 
}

function amountSubTasks(){     
    newAmountSubtask = toDoTask.subtask.length;
    newSumSubtask = 0;
    if(subTaskChecked === 1){
    for (i=0;i<newAmountSubtask;i++){
        newSumSubtask += toDoTask.subtaskSum[i]; //
    }
    }
    if(subTaskChecked === 0){
        newSumSubtask = 0; newAmountSubtask = 0;
    } 
}

function calcProgressBar(){  
    newSumSubtaskCalc = 0;     
    newSumSubtaskCalc = newSumSubtask/newAmountSubtask;      
    if (subTaskChecked === 1){
    newProgressInPercent = newSumSubtaskCalc * 100;}
    if (subTaskChecked === 0){
    newProgressInPercent = 0; 
    }
    newProgressBarId = toDoTask.taskid; 
}

function descriptionChar(){
    let lastChar = toDoTask.description[toDoTask.description.length - 1];
    if (lastChar === "." || lastChar === "!" || lastChar === "?"){
        toDoTask.description = toDoTask.description.slice(0, -1);
    }                                 
}

function emblemSvg() {            
    newEmblems = '';  
        if (toDoTask.contactEmblem.length > 0){                        
        for (let i = 0; i < toDoTask.contactEmblem.length; i++){
            const svg = toDoTask.contactEmblem[i];
            newEmblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
            if (i === 3){
                if(toDoTask.contactEmblem.length > 3){
                    let otherEmblems = toDoTask.contactEmblem.length - 4;
                    if (otherEmblems === 0){break;}
                    newEmblems+= `<div class="card-contact-emblems-others" style="font-weight: bold; font-size: 16px;">+${otherEmblems}</div>`
                }                
                break;}
        } }          
}

function priorityEmblem(){
    newPriority = '';
            if (toDoTask.priority){
            if (toDoTask.priority === "low"){
                newPriority = "/assets/svg/capa_priority_low.svg";
            }    else if (toDoTask.priority === "medium"){
                newPriority = "/assets/svg/capa_1_medium_priority.svg";
            }   else if(toDoTask.priority === "urgent") {
                newPriority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}
            }
}

// container render-functions //

function renderToDo(){
    toDo.innerHTML += `
    <div id="Task${toDoTask.taskid}" class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${newLabel}<div><img onclick="renderMoveTask(event, ${x})" class="edit-task-category-svg" src="/assets/svg/arrow-left-line.svg" alt="editCategory"></div></div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks${toDoTask.taskid}" class="card-subtasks"><div class="card-progress-bar">
    <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
    <rect id="${toDoTask.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
    <div class="card-sum-subtask">${newSumSubtask}/${newAmountSubtask} Subtasks</div></div>        
    <div id="cardParticipantsPriority" class="card-participants-priority">
    <div class="card-contact-emblems">${newEmblems}</div>
    <div><img src="${newPriority}" alt="priority"></div>
    </div></div>
            
    `           
    const progressBar = document.getElementById(newProgressBarId);
    progressBar.setAttribute('width', `${newProgressInPercent}%`);
    subTaskNoShow();
}

function renderInProgress(){
    inProgress.innerHTML += `
    <div id="Task${toDoTask.taskid}" class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${newLabel}<img onclick="renderMoveTask(event, ${x})" class="edit-task-category-svg" src="/assets/svg/arrow-left-line.svg" alt="editCategory"></div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks${toDoTask.taskid}" class="card-subtasks"><div class="card-progress-bar">
    <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
    <rect id="${toDoTask.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
    <div class="card-sum-subtask">${newSumSubtask}/${newAmountSubtask} Subtasks</div></div>        
    <div id="cardParticipantsPriority" class="card-participants-priority">
    <div class="card-contact-emblems">${newEmblems}</div>
    <div><img src="${newPriority}" alt="priority"></div>
    </div></div>
            
    `           
    const progressBar = document.getElementById(newProgressBarId);
    progressBar.setAttribute('width', `${newProgressInPercent}%`);
    subTaskNoShow();
}

function renderAwaitFeedback(){
    awaitFeedback.innerHTML += `
    <div id="Task${toDoTask.taskid}" class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${newLabel}<img onclick="renderMoveTask(event, ${x})" class="edit-task-category-svg" src="/assets/svg/arrow-left-line.svg" alt="editCategory"></div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks${toDoTask.taskid}" class="card-subtasks"><div class="card-progress-bar">
    <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
    <rect id="${toDoTask.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
    <div class="card-sum-subtask">${newSumSubtask}/${newAmountSubtask} Subtasks</div></div>        
    <div id="cardParticipantsPriority" class="card-participants-priority">
    <div class="card-contact-emblems">${newEmblems}</div>
    <div><img src="${newPriority}" alt="priority"></div>
    </div></div>
            
    `           
    const progressBar = document.getElementById(newProgressBarId);
    progressBar.setAttribute('width', `${newProgressInPercent}%`);
    subTaskNoShow();
}

function renderDone(){
    done.innerHTML += `
    <div id="Task${toDoTask.taskid}" class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${newLabel}<img onclick="renderMoveTask(event, ${x})" class="edit-task-category-svg" src="/assets/svg/arrow-left-line.svg" alt="editCategory"></div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks${toDoTask.taskid}" class="card-subtasks"><div class="card-progress-bar">
    <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
    <rect id="${toDoTask.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
    <div class="card-sum-subtask">${newSumSubtask}/${newAmountSubtask} Subtasks</div></div>        
    <div id="cardParticipantsPriority" class="card-participants-priority">
    <div class="card-contact-emblems">${newEmblems}</div>
    <div><img src="${newPriority}" alt="priority"></div>
    </div></div>
            
    `           
    const progressBar = document.getElementById(newProgressBarId);
    progressBar.setAttribute('width', `${newProgressInPercent}%`);
    subTaskNoShow();
}

function taskContainer(){             
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    awaitFeedback.innerHTML = '';
    done.innerHTML = '';
    startReadingTasks();
    ifContainerEmpty();    
}


function ifContainerEmpty(){
    if (toDo.innerHTML == ''){
        toDo.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/no_task_to_do.png" alt="no-task-to-do">`
    }
    if (inProgress.innerHTML == ''){
        inProgress.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/No_tasks_in_progress.png" alt="no-task-in-progress">`
    }
    if (awaitFeedback.innerHTML === '') {
        awaitFeedback.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/no_tasks_awaiting_feedback.png" class="to-do-container-mobile" alt="no-task-awaits-feedback"></div>`
    }
    if (done.innerHTML === '') {
        done.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/no_tasks_done.png" class="to-do-container-mobile" alt="no-task-done"></div>`
    }
}

/// render Overlay Task /// 

function overlayRender(){
    overlay.innerHTML = `
    <div id="${OverlayTask.taskid}" class="overlay-container">
    <div id= "overlayBoard" class="overlay-task transition">
    <div id="overlayHeader" class="overlay-card-header">${overlayLabel}<img class="close-overlay" onclick="closeOverlay()" src="/assets/svg/close_black.svg" alt="close"></div>
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
    <div onclick="overlayDeleteTask(${OverlayTask.taskid}, ${overlayTaskBoardPosition})" class="overlay-cde"><div class="overlay-cde-delete-svg">Delete</div></div><div class="placeholder-div">|</div><div onclick="editTaskOverlay(${OverlayTask.taskid}, ${overlayTaskBoardPosition})" class="overlay-cde-edit"><div class="overlay-cde-edit-svg">Edit</div></div>
    </div>
    </div>
    </div>
    `;        
}

/// render - EditTask - container ///

function renderEditTask(){
    overlay.innerHTML = `
    <div id="boardEditTask" class="board-edit-task">
    <div class="close-edit"><img onclick="closeOverlay(${taskIdBoard}, ${taskboardPosition})" class ="close-overlay" src="/assets/svg/close_black.svg" alt="close"></div>
    <h4 style="font-weight: 400;">Title</h4>
    <div id="edit-title" class="edit-title">
    <input type="text" id="titleEdit" class="edit-title-input" value="${editTitle}">
    </div>
    <h4 style="font-weight: 400;">Description</h4>
    <div id="edit-description" class="edit-description">
    <textarea id="descriptionEdit" class="edit-description-input">${editDescription}</textarea>
    </div>
    <h4 style="font-weight: 400;">Due date</h4>
    <form action="/action_page.php">
    <label for="calender_input" class="calendar-icon-label">
    <input type="date" id="edit_input" name="date_input" class="date-input" placeholder="tt.mm.jjj">
    </label>
    </form>   
    <h4 style="font-weight: 400;">Priority</h4>
    <div id="editPriorityButtonsdiv" class="edit-priority-buttons-div"></div>
    <h4 style="font-weight: 400;">Assigned to</h4>
    <div class="SearchContactEdit">
        <input onclick="checkInputFieldValue();"type="text" id="InputSearchEdit" class="InputSearchEdit" placeholder="Select contacts to assign">
        <div id="ContactListEditButton" class="contact-list-edit-button">
        <img onclick="clickButtonSearch();" src="/assets/svg/arrow_drop_downaa.svg" alt="openContactList"></div>
    </div>    
    <div class="edit-contact-list">
    <div id="contact-list-container" class="contact-list-container hiddenMenue">
    ${contactListEdit}
    </div></div> 
    <div id="choosenContacts" class="choosen-contacts">
    </div>
    <h4 style="font-weight: 400;">Subtasks</h4>
    <div id="editSubtaskInput" class="edit-subtask-input">
    <input type="text" id="subtaskEdit" class="subtask-edit-input" placeholder="Add new Subtask"><div  class="edit-subtask-add"><img class="edit-subtask-buttons-img-add" onclick="editAddSub()" src="/assets/svg/check_black.svg" alt="addsubtask" width="14" height="14"><div class="placeholder-div-edit-subtask">|</div><img class="edit-subtask-buttons-img-delete" onclick="emptyEditSub();" src="/assets/svg/Close_black.svg" alt="delete"></div>
    </div>
    <div id="editRenderSubtasks" class="edit-render-subtasks"></div> 
    <div class="edit-ok-button"><button onclick="storeNewData(${taskboardPosition})" class="edit-button">OK</button></div>
    `

} 
/// Move Task Popup /// --> Move out functions if space need for other render (then ggf. render_board at least load )

async function renderMoveTask(event, i){
    event.stopPropagation();
    taskToMove = i;
    document.getElementById('taskSwitchCategory').classList.remove('hide');

    await new Promise(resolve => setTimeout(resolve, 200));
    document.getElementById('taskSwitchCategory').classList.remove('transition')
    showShadow();
}

async function closeMoveTask(){
    document.getElementById('taskSwitchCategory').classList.add('transition')    
    await new Promise(resolve => setTimeout(resolve, 120));
    document.getElementById('taskSwitchCategory').classList.add('hide');    
    removeShadow();
}

function moveCategoryTask(newType){
    TaskBoard[taskToMove].type = newType
    uploadData();
    renderBoard();
    findTask();
}

/// highlight drop container ///

function highlight(id) {
    document.getElementById(id).classList.add('drag-area-highlight');
}

function removeHighlight(id) {
    document.getElementById(id).classList.remove('drag-area-highlight');
}