// Board render Tasks container /////////////////

//RenderArrays -> nach innerHTML+= leeren!
let toDoTask = []
let NewLabel;
let newSumSubtask;
let newAmountSubtask;
let newSumSubtaskCalc;
let newProgressInPercent;
let newProgressBarId;
let newEmblems;
let newPriority;
let subTaskChecked;

// content functions //

function startReadinTasks(){
    for(i=0; i<TaskBoard.length; i++){
        
        const toDoCard = TaskBoard[i];         
        toDoTask = toDoCard;
            subTaskCheck();
            readInTasks();
        if (toDoCard.type == 0){
            renderToDo();                    
        }
        if (toDoCard.type == 1){
            renderInProgress();
        }
        if (toDoCard.type == 2){            
            renderAwaitFeedback();                      
        }
        if (toDoCard.type == 3){            
            renderDone();                      
        }

    }
}

function subTaskCheck(){ 
    subTaskChecked = 0;
    if (toDoTask.subtaskSum.length > 0){
    subTaskChecked = 1; 
    } else {
        subTaskChecked = 0;
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
                                 //Labeldiscernment
    if(toDoTask.label === 1){
        NewLabel = TechnicalTaskLabel;
    } else {
        NewLabel = UserStoryLabel;
    }                 
}

function amountSubTasks(){     //Anzahl Subtasks 

    newAmountSubtask = toDoTask.subtask.length;
    newSumSubtask = 0;

    if(subTaskChecked === 1){
    for (i=0;i<newAmountSubtask;i++){
        newSumSubtask += toDoTask.subtaskSum[i];
        
        
    }
    //console.log("AmountSubTasks: erledigte tasks",newSumSubtask, toDoTask.taskid);
    }

    if(subTaskChecked === 0){
        newSumSubtask = 0; newAmountSubtask = 0;
        //console.log("AmountSubTasks: taskidCHECK0",newSumSubtask, toDoTask.taskid);

    } //stage one catch null -> stage 2 subsum berechen
    //console.log("taskid, submsubtaskchecked", toDoTask.taskid, subTaskChecked) ;
    console.log("AmountSubTasks: taskid, submsubtaskchecked", toDoTask.taskid, subTaskChecked) ;

}

function calcProgressBar(){  
    console.log("calcProgBar: taskid, submsubtaskchecked", toDoTask.taskid, subTaskChecked) ;

    newSumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at beginning (svg -reasons)    
    newSumSubtaskCalc = newSumSubtask/newAmountSubtask;      
    if (subTaskChecked === 1){
    newProgressInPercent = newSumSubtaskCalc * 100;  }
    if (subTaskChecked === 0){
    newProgressInPercent = 0; 
    console.log("calcProgbar CHECK 0"); 
    }
    console.log("calcProgressBAr taskid, newProgreessinPercent", toDoTask.taskid, newProgressInPercent) ;

    newProgressBarId = toDoTask.taskid; // alt 'cardToDoBar' + toDoCard.taskid; 
    // evtl hier das einfügen der progressbar das streikt. mit if
}

function descriptionChar(){
    let lastChar = toDoTask.description[toDoTask.description.length - 1];
    if (lastChar === "." || lastChar === "!" || lastChar === "?"){
        toDoTask.description = toDoTask.description.slice(0, -1);
    }                                 //preparing optic for description
}

function emblemSvg() {            //contact-emblems
    newEmblems = '';                          
        for (let i = 0; i < toDoTask.contactEmblem.length; i++){
            const svg = toDoTask.contactEmblem[i];
            newEmblems += `<div class="card-contact-emblems-icon">${svg}</div>`;
            if (i === 5){break;}
        }           
}

function priorityEmblem(){
    newPriority = '';
            if (toDoTask.priority === "low"){
                newPriority = "/assets/svg/capa_priority_low.svg";
            }    else if (toDoTask.priority === "medium"){
                newPriority = "/assets/svg/capa_1_medium_priority.svg";
            }   else if(toDoTask.priority === "urgent") {
                newPriority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}

}


// container html-functions //


function renderToDo(){
    toDo.innerHTML += `
    <div class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${NewLabel}</div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
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
}

function renderInProgress(){
    inProgress.innerHTML += `
    <div class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${NewLabel}</div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
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
}

function renderAwaitFeedback(){
    awaitFeedback.innerHTML += `
    <div class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${NewLabel}</div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
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
}

function renderDone(){
    done.innerHTML += `
    <div class="card-body" onclick="overlayTask(${toDoTask.taskid})" ondragstart="startDragging(${toDoTask.taskid})" draggable="true">
    <div id="cardHeader" class="card-header">${NewLabel}</div>
    <div id="cardTitle" class="card-title"><h4>${toDoTask.title}</h4></div>
    <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
    <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
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
}

function taskContainer(){             
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    awaitFeedback.innerHTML = '';
    done.innerHTML = '';
    startReadinTasks();
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


