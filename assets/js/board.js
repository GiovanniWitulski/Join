let TaskBoard = []
let BackgroundTaskBoard = [] 

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

////////////Main Start Functions///////////
async function downloadData() {
BackgroundTaskBoard = [];
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

    console.log("Download BackgroundTaskBoard",BackgroundTaskBoard);
    TaskBoard = BackgroundTaskBoard;
    console.log("Download Taskboard", TaskBoard);
    
  } catch (error) {
    console.error('Fehler beim Abrufen und Formatieren der Daten:', error);
  }
  renderBoard();
}

function renderBoard(){ 
    console.log("render_actice");
    console.log("render_Taskboard Inhalt:", TaskBoard);
    toDoContainer();    //render task to do 
    inProgressContainer();       //render tasks in progress 
    awaitFeedbackContainer();    //render task awaiting feedback 
    doneContainer();            //render tasks done 
}

function overlayTask(id){   
    for (i=0; i<TaskBoard.length; i++){
        const TaskId = TaskBoard[i].taskid;
        if (TaskId == id){
            OverlayTaskPopup(i);
        }
    }

}

async function uploadData() {
  const databaseURL = 'https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app';
  try {
    const response = await fetch(`${databaseURL}/tasks.json`, {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(TaskBoard) 
    });
    if (!response.ok) {
      throw new Error('Netzwerkantwort war nicht in Ordnung');
    }
    const data = await response.json();
    console.log('Daten erfolgreich hochgeladen:', data);
  } catch (error) {
    console.error('Fehler beim Hochladen der Daten:', error);
  }
  downloadData();  
}

//Search functions  /////////////////////////////////////////

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
    if (TaskBoard.length === 0){
        alert("No matching Task found!");
    }

    renderBoard();
}

// drag & drop functions  //////////////7
function startDragging(id){
    currentDraggedTask = id;
}

function allowDrop(ev) {
    ev.preventDefault();
  }

function dropAt(newType){
    console.log ("dataUploadDrop");
    for (i=0; i<TaskBoard.length; i++){
        taskToMove = TaskBoard[i].taskid;
        if (taskToMove == currentDraggedTask){
            TaskBoard[i].type = newType;
            uploadData();
            renderBoard();            
            return;
        }
    }
}

// Board render Tasks container /////////////////

function toDoContainer (){             
    toDo.innerHTML = '';

    for(i=0; i<TaskBoard.length; i++){
        const toDoCard = TaskBoard[i];

        if (toDoCard.type == 0){
            let amountSubTasks = toDoCard.subtask.length; //amount substasks
            let sumSubtask = 0;                            //amount solved subtasks
            let sumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at beginning (svg -reasons)

            if (amountSubTasks === 2){         //"if null" - just for data failures securement
            if (toDoCard.subtaskSum[0] === null && toDoCard.subtaskSum[1] === null){
                sumSubtask = 0; }            
            if (toDoCard.subtaskSum[0] !== null && toDoCard.subtaskSum[1] !== null){
                sumSubtask = toDoCard.subtaskSum[0] + toDoCard.subtaskSum[1]; }
            }

            if (amountSubTasks === 1){
                if(toDoCard.subtaskSum[0] !== null){
                    sumSubtask = toDoCard.subtaskSum[0];
                }
                if(toDoCard.subtaskSum[0] === null){
                sumSubtask = 0;} 
            }
            
            
            if (sumSubtask/amountSubTasks === 1){
                sumSubtaskCalc = 2;
            } else if (sumSubtask/amountSubTasks === 0.5){
                sumSubtaskCalc = 1;
            } else if (sumSubtask/amountSubTasks === 0){
                sumSubtaskCalc = 0;
            } 
            const progressInPercent = sumSubtaskCalc * 50;  
            const progressBarId = 'cardToDoBar' + toDoCard.taskid;


            let label;                              //Labeldiscernment
            if(toDoCard.label === 1){
                label = TechnicalTaskLabel;
            } else {
                label = UserStoryLabel;
            }                 
            
            let lastChar = toDoCard.description[toDoCard.description.length - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?"){
                toDoCard.description = toDoCard.description.slice(0, -1);
            }                                 //preparing optic for description

            let emblems = '';                          //contact-emblems
            for (let i = 0; i < toDoCard.contactEmblem.length; i++){
                const svg = toDoCard.contactEmblem[i];
                emblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
                if (i === 5){break;}
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
        toDo.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/no_task_to_do.png" alt="no-task-to-do">`
    }
}

function inProgressContainer(){
  inProgress.innerHTML = '';

  for(i=0; i<TaskBoard.length; i++){
      const inProgressCard = TaskBoard[i];
      if (inProgressCard.type == 1){
        let amountSubTasks = inProgressCard.subtask.length; //amount substasks
        let sumSubtask = 0;                            //amount solved subtasks
        let sumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at start (svg -reasons)

        if (amountSubTasks === 2){         //"if null" - just for data failures securement
        if (inProgressCard.subtaskSum[0] === null && inProgressCard.subtaskSum[1] === null){
            sumSubtask = 0; }            
        if (inProgressCard.subtaskSum[0] !== null && inProgressCard.subtaskSum[1] !== null){
            sumSubtask = inProgressCard.subtaskSum[0] + inProgressCard.subtaskSum[1]; }
        }

        if (amountSubTasks === 1){
            if(inProgressCard.subtaskSum[0] !== null){
                sumSubtask = inProgressCard.subtaskSum[0];
            }
            if(inProgressCard.subtaskSum[0] === null){
            sumSubtask = 0;} 
        }
        
        
        if (sumSubtask/amountSubTasks === 1){
            sumSubtaskCalc = 2;
        } else if (sumSubtask/amountSubTasks === 0.5){
            sumSubtaskCalc = 1;
        } else if (sumSubtask/amountSubTasks === 0){
            sumSubtaskCalc = 0;
        } 
        const progressInPercent = sumSubtaskCalc * 50;  
        const progressBarId = 'cardToDoBar' + inProgressCard.taskid;


        let label;
          if(inProgressCard.label == 1){
              label = TechnicalTaskLabel;
          } else {
              label = UserStoryLabel;
          }       
          
          let lastChar = inProgressCard.description[inProgressCard.description.length - 1];
          if (lastChar === "." || lastChar === "!" || lastChar === "?"){
              console.log("foundchar:", lastChar);
              inProgressCard.description = inProgressCard.description.slice(0, -1);
          }

          let emblems = '';                          //contact-emblems
          for (let i = 0; i < inProgressCard.contactEmblem.length; i++){
              const svg = inProgressCard.contactEmblem[i];
              emblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
              if (i === 5){break;}
          }           

          let priority = '';
          if (inProgressCard.priority === "low"){
              priority = "/assets/svg/capa_priority_low.svg";
          }    else if (inProgressCard.priority === "medium"){
              priority = "/assets/svg/capa_1_medium_priority.svg";
          }   else if(inProgressCard.priority === "urgent") {
              priority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}


          inProgress.innerHTML += `
          <div class="card-body" onclick="overlayTask(${inProgressCard.taskid})" ondragstart="startDragging(${inProgressCard.taskid})" draggable="true">
          <div id="cardHeader" class="card-header">${label}</div>
          <div id="cardTitle" class="card-title"><h4>${inProgressCard.title}</h4></div>
          <div id="cardDescription" class="card-description"><h4>${inProgressCard.description}...</h4></div>
          <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
          <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
          <rect id="cardToDoBar${inProgressCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
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

  if (inProgress.innerHTML == ''){
      inProgress.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/No_tasks_in_progress.png" alt="no-task-in-progress">`
  }
  
}

function awaitFeedbackContainer(){
    awaitFeedback.innerHTML = '';
  
    for(i=0; i<TaskBoard.length; i++){
        const awaitFeedbackCard = TaskBoard[i];
        if (awaitFeedbackCard.type == 2){
            
          let amountSubTasks = awaitFeedbackCard.subtask.length; //amount substasks
          let sumSubtask = 0;                            //amount solved subtasks
          let sumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at beginning (svg -reasons)
  
          if (amountSubTasks === 2){         //"if null" - just for data failures securement
          if (awaitFeedbackCard.subtaskSum[0] === null && awaitFeedbackCard.subtaskSum[1] === null){
              sumSubtask = 0; }            
          if (awaitFeedbackCard.subtaskSum[0] !== null && awaitFeedbackCard.subtaskSum[1] !== null){
              sumSubtask = awaitFeedbackCard.subtaskSum[0] + awaitFeedbackCard.subtaskSum[1]; }
          }
  
          if (amountSubTasks === 1){
              if(awaitFeedbackCard.subtaskSum[0] !== null){
                  sumSubtask = awaitFeedbackCard.subtaskSum[0];
              }
              if(awaitFeedbackCard.subtaskSum[0] === null){
              sumSubtask = 0;} 
          }
          
          
          if (sumSubtask/amountSubTasks === 1){
              sumSubtaskCalc = 2;
          } else if (sumSubtask/amountSubTasks === 0.5){
              sumSubtaskCalc = 1;
          } else if (sumSubtask/amountSubTasks === 0){
              sumSubtaskCalc = 0;
          } 
          const progressInPercent = sumSubtaskCalc * 50;  
          const progressBarId = 'cardToDoBar' + awaitFeedbackCard.taskid;
  
  
          let label;                              //Labeldiscernment
          if(awaitFeedbackCard.label == 1){
              label = TechnicalTaskLabel;
          } else {
              label = UserStoryLabel;
          }                 
          
          let lastChar = awaitFeedbackCard.description[awaitFeedbackCard.description.length - 1];
          if (lastChar === "." || lastChar === "!" || lastChar === "?"){
              awaitFeedbackCard.description = awaitFeedbackCard.description.slice(0, -1);
          }                                 //preparing optic for description
  
          let emblems = '';                          //contact-emblems
          for (let i = 0; i < awaitFeedbackCard.contactEmblem.length; i++){
              const svg = awaitFeedbackCard.contactEmblem[i];
              emblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
              if (i === 5){break;}
          }           
  
  
          let priority = '';
          if (awaitFeedbackCard.priority === "low"){
              priority = "/assets/svg/capa_priority_low.svg";
          }    else if (awaitFeedbackCard.priority === "medium"){
              priority = "/assets/svg/capa_1_medium_priority.svg";
          }   else if(awaitFeedbackCard.priority === "urgent") {
              priority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}
  
  
  
            awaitFeedback.innerHTML += `
            <div class="await-feedback-cards-container">
            <div class="card-body" onclick="overlayTask(${awaitFeedbackCard.taskid})" ondragstart="startDragging(${awaitFeedbackCard.taskid})" draggable="true">
            <div id="cardHeader" class="card-header">${label}</div>
            <div id="cardTitle" class="card-title"><h4>${awaitFeedbackCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${awaitFeedbackCard.description}...</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="cardToDoBar${awaitFeedbackCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
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
    if (awaitFeedback.innerHTML === '') {
        awaitFeedback.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/no_tasks_awaiting_feedback.png" class="to-do-container-mobile" alt="no-task-awaits-feedback"></div>`
    }
  
  
}                                       
  
function doneContainer(){             
    done.innerHTML = '';
  
    for(i=0; i<TaskBoard.length; i++){
        const doneCard = TaskBoard[i];
  
        if (doneCard.type == 3){
            let amountSubTasks = doneCard.subtask.length; //amount substasks
            let sumSubtask = 0;                            //amount solved subtasks
            let sumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at beginning (svg -reasons)
  
            if (amountSubTasks === 2){         //"if null" - just for data failures securement
            if (doneCard.subtaskSum[0] === null && doneCard.subtaskSum[1] === null){
                sumSubtask = 0; }            
            if (doneCard.subtaskSum[0] !== null && doneCard.subtaskSum[1] !== null){
                sumSubtask = doneCard.subtaskSum[0] + doneCard.subtaskSum[1]; }
            }
  
            if (amountSubTasks === 1){
                if(doneCard.subtaskSum[0] !== null){
                    sumSubtask = doneCard.subtaskSum[0];
                }
                if(doneCard.subtaskSum[0] === null){
                sumSubtask = 0;} 
            }            
            
            if (sumSubtask/amountSubTasks === 1){
                sumSubtaskCalc = 2;
            } else if (sumSubtask/amountSubTasks === 0.5){
                sumSubtaskCalc = 1;
            } else if (sumSubtask/amountSubTasks === 0){
                sumSubtaskCalc = 0;
            } 
            const progressInPercent = sumSubtaskCalc * 50;  
            const progressBarId = 'cardToDoBar' + doneCard.taskid;
  
  
            let label;                              //Labeldiscernment
            if(doneCard.label == 1){
                label = TechnicalTaskLabel;
            } else {
                label = UserStoryLabel;
            }                 
            
            let lastChar = doneCard.description[doneCard.description.length - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?"){
                doneCard.description = doneCard.description.slice(0, -1);
            }                                 //preparing optic for description
  
            let emblems = '';                          //contact-emblems
            for (let i = 0; i < doneCard.contactEmblem.length; i++){
                const svg = doneCard.contactEmblem[i];
                emblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
                if (i === 5){break;}
            }           
  
  
            let priority = '';
            if (doneCard.priority === "low"){
                priority = "/assets/svg/capa_priority_low.svg";
            }    else if (doneCard.priority === "medium"){
                priority = "/assets/svg/capa_1_medium_priority.svg";
            }   else if(doneCard.priority === "urgent") {
                priority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}
  
  
                done.innerHTML += `
            <div class="card-body" onclick="overlayTask(${doneCard.taskid})" ondragstart="startDragging(${doneCard.taskid})" draggable="true">
            <div id="cardHeader" class="card-header">${label}</div>
            <div id="cardTitle" class="card-title"><h4>${doneCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${doneCard.description}...</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="cardToDoBar${doneCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
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
    
    if (done.innerHTML === '') {
        done.innerHTML = `<img class="placeholder-container-img" src="/assets/svg/no_tasks_done.png" class="to-do-container-mobile" alt="no-task-done"></div>`
    }
}
  
// OVERLAY TASK / POPUP ///////////////////////


function OverlayTaskPopup(i) {
    document.getElementById('mobileTamplateContent').classList.add('background-fade');
    document.getElementById('Board').classList.add('background-fade');
    const OverlayTask = TaskBoard[i];
    let emblem = '';
    let overlayContacts = '';
    for (let c = 0; c < OverlayTask.contactEmblem.length; c++) {
        const contactName = OverlayTask.assignedTo[c];
        const src = OverlayTask.contactEmblem[c];
        emblem = src;
        overlayContacts += '<div class="overlay-assigned-to-contacts">' + emblem + '<div class="overlay-contact-name">' + contactName + '</div></div>';
    }

    let priority = '';
    if (OverlayTask.priority === "low") {
        priority = "/assets/svg/capa_priority_low.svg";
    } else if (OverlayTask.priority === "medium") {
        priority = "/assets/svg/capa_1_medium_priority.svg";
    } else if (OverlayTask.priority === "urgent") {
        priority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"
    }

    const checkmark0 = OverlayTask.subtaskSum[0];
    const checkmark1 = OverlayTask.subtaskSum[1];
    let check0 = '';
    let check1 = '';
    let check = "/assets/svg/checkmark.svg";
    let nocheck = "/assets/svg/rectangle.svg";
    if (checkmark0 == 0) { check0 = nocheck; } else { check0 = check; }
    if (checkmark1 == 0) { check1 = nocheck; } else { check1 = check; }

    let label;
    if (OverlayTask.label == 1) {
        label = TechnicalTaskLabel;
    } else {
        label = UserStoryLabel;
    }

    Overlay.innerHTML = `
        <div id="${OverlayTask.taskid}" class="overlay-container">
            <div class="overlay-task">
                <div id="overlayHeader" class="overlay-card-header">${label}<img onclick="closeOverlay()" src="/assets/svg/close_black.svg" alt="close"></div>
                <div id="overlayTitle" class="overlay-card-title">${OverlayTask.title}</div>
                <div id="overlayDescription" class="overlay-card-description">${OverlayTask.description}</div>
                <div id="overlaydueDate" class="overlay-card-due-date"><div id="overlayDueDate">Due date:</div><div class="overlay-due-date">${OverlayTask.date}</div></div>
                <div id="overlaypriority" class="overlay-card-priority"><div id="overlayPriorityText" class="overlay-card-priority-text">
                Priority</div><div class="overlay-card-priority-text-img"><img src="${priority}" alt="priority">${OverlayTask.priority}</div>
                </div>
                <div id="overlayAssignedTo" class="overlay-assigned-to">
                <div id="overlayAssignedToText" class="overlay-assigned-to-text">Assigned to:</div><div id="overlayParticipants" class="overlay-participants">${overlayContacts}</div>
                </div>
                <div class="overlay-card-subtasks">
                <div id="overlaySubstasksText" class="overlay-substasks-text">Subtasks:</div><div class="overlay-checkbox"><div id="overlaySubtask0" class="overlay-subtask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, 0, ${i})"  src=${check0}> ${OverlayTask.subtask[0]}</div>
                <div id="overlaySubtask1" class="overlay-subtask"><img class="overlay-checkbox-img" onclick="toggleCheckboxValue(${OverlayTask.taskid}, 1, ${i})"  src=${check1}> ${OverlayTask.subtask[1]}</div></div>
                </div>
                <div class="overlay-card-delete-edit">
                <div onclick="overlayDeleteTask(${OverlayTask.taskid}, ${i})" class="overlay-cde"><img class="overlay-cde-img1" src="/assets/svg/delete.svg" alt="delete">Delete</div><div class="placeholder-div">|</div><div onclick="editTaskOverlay(${OverlayTask.taskid}, ${i})" class="overlay-cde"><img class="overlay-cde-img2" src="/assets/svg/Subtasks%20icons11-4.svg" alt="Edit">Edit</div>
                </div>
            </div>
        </div>
    `;

    if (OverlayTask.subtask[0] === undefined) {
        document.getElementById('overlaySubtask0').style.display = 'none';
    }
    if (OverlayTask.subtask[1] === undefined || OverlayTask.subtask[1] === null) {
        console.log("subtask1=0");
        document.getElementById('overlaySubtask1').style.display = 'none';
        document.getElementById('overlaySubtask1').classList.add('hide');
    }

    if (OverlayTask.label === 1) {
        document.getElementById('overlayDueDate').style.cssText = 'font-weight: 700; color: #42526E;';
        document.getElementById('overlayAssignedToText').style.cssText = 'font-weight: 700; color: #42526E;';
        document.getElementById('overlayPriorityText').style.cssText = 'font-weight: 700; color: #42526E;';
        document.getElementById('overlaySubstasksText').style.cssText = 'font-weight: 700; color: #42526E;';
    }
}

function toggleCheckboxValue(taskid, position, o) {
    console.log("toggleCheckboxValue id: position:", taskid, position);
    for (let i = 0; i < TaskBoard.length; i++) {
        const findTask = TaskBoard[i].taskid;
        let subtaskValue = TaskBoard[i].subtaskSum[position];
        if (findTask == taskid) {
            console.log("task found at array position:", i);
            console.log("old subtaskSum value:", subtaskValue);
            if (subtaskValue === 0) {
                TaskBoard[i].subtaskSum[position] = 1;
            } else {
                TaskBoard[i].subtaskSum[position] = 0;
            }
            console.log("new subtaskSum value:", TaskBoard[i].subtaskSum[position]);
        }
    }

    // Aktualisiere die Anzeigeeigenschaften der Subtasks vor dem Aufruf von OverlayTaskPopup
    const OverlayTask = TaskBoard[o];
    if (OverlayTask.subtask[0] === undefined) {
        document.getElementById('overlaySubtask0').style.display = 'none';
    }
    if (OverlayTask.subtask[1] === undefined || OverlayTask.subtask[1] === null) {
        console.log("subtask1=0");
        document.getElementById('overlaySubtask1').style.display = 'none';
        document.getElementById('overlaySubtask1').classList.add('hide');
    }

    OverlayTaskPopup(o);
    renderBoard();
}

function closeOverlay(closeId){ // Close Popup Task/OverlayTask
    Overlay.innerHTML = ``;    
    document.getElementById('mobileTamplateContent').classList.remove('background-fade');
    document.getElementById('Board').classList.remove('background-fade');
    renderBoard();
}                                   

function overlayDeleteTask(idTask, i){          //TO CODE: update to server! -> update BackgroundTaskBoard -> update TaskBoard
    let taskToDelete = BackgroundTaskBoard[i];
    if (taskToDelete.taskid == idTask){
        closeOverlay(idTask);
        TaskBoard.splice(i, 1);
        uploadData();
    } else {
        console.log("Taskid & Position Backgroundtaskboard inkongruent.");
    }    
}

function deleteTask(i){
    TaskBoard.splice(i, 1);
    console.log("task aus Taskboard gelöscht stelle", i);
    console.log(TaskBoard);
}

// Edit Task function //*css*/`
    
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