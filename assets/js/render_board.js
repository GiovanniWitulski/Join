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


function label(){
                                  //Labeldiscernment
    if(toDoTask.label === 1){
        NewLabel = TechnicalTaskLabel;
    } else {
        NewLabel = UserStoryLabel;
    }                 
}

function amountSubTasks(){     //Anzahl Subtasks
        
                                   //amount solved subtasks
        if (newAmountSubtask === 2){         //"if null" - just for data failures securement
        if (toDoTask.subtaskSum[0] === null && toDoTask.subtaskSum[1] === null){
            newSumSubtask = 0; }            
        if (toDoTask.subtaskSum[0] !== null && toDoTask.subtaskSum[1] !== null){
            newSumSubtask = toDoTask.subtaskSum[0] + toDoTask.subtaskSum[1]; }
        }
        if (newAmountSubtask === 1){
            if(toDoTask.subtaskSum[0] !== null){
                newSumSubtask = toDoTask.subtaskSum[0];
            }
            if(toDoTask.subtaskSum[0] === null){
            newSumSubtask = 0;} 
        }   
         
}

function calcProgressBar(){
    newSumSubtaskCalc = 0;    //Calculation for barchart !!!declared "0"!!! at beginning (svg -reasons)
    newSumSubtaskCalc = newSumSubtask/newAmountSubtask;
    
    newProgressInPercent = newSumSubtaskCalc * 100;  
    newProgressBarId = toDoTask.taskid; //In toDoTask.taskid ändern ! 'cardToDoBar' + toDoCard.taskid; 
    console.log("newProgressBarId",newProgressBarId);
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


function toDoContainer (){             
    toDo.innerHTML = '';

    for(i=0; i<TaskBoard.length; i++){
        const toDoCard = TaskBoard[i];  
        toDoTask = toDoCard;
            newAmountSubtask = toDoTask.subtask.length;
            label(toDoTask); 
            amountSubTasks();
            calcProgressBar();
            descriptionChar();   
            emblemSvg();  
       
        // console.log("ToDo ForLoop Durchlauf", i)
        // if todocardtype start... function -> function ->....-> html create
        if (toDoCard.type == 0){
                      

            //// bis hierhin alles topi :) 


            
            

            


            let priority = '';
            if (toDoCard.priority === "low"){
                priority = "/assets/svg/capa_priority_low.svg";
            }    else if (toDoCard.priority === "medium"){
                priority = "/assets/svg/capa_1_medium_priority.svg";
            }   else if(toDoCard.priority === "urgent") {
                priority = "/assets/svg/Capa_2_Burger menue_Arrow_up.svg"}


                toDo.innerHTML += `
            <div class="card-body" onclick="overlayTask(${toDoCard.taskid})" ondragstart="startDragging(${toDoCard.taskid})" draggable="true">
            <div id="cardHeader" class="card-header">${NewLabel}</div>
            <div id="cardTitle" class="card-title"><h4>${toDoCard.title}</h4></div>
            <div id="cardDescription" class="card-description"><h4>${toDoTask.description}...</h4></div>
            <div id="cardSubtasks" class="card-subtasks"><div class="card-progress-bar">
            <svg width="128" height="8" viewBox="0 0 128 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="128" height="8" rx="4" fill="#F4F4F4"/>
            <rect id="${toDoCard.taskid}" width="0" height="8" rx="4" fill="#4589FF"/></svg> </div> 
            <div class="card-sum-subtask">${newSumSubtask}/${newAmountSubtask} Subtasks</div></div>        
            <div id="cardParticipantsPriority" class="card-participants-priority">
            <div class="card-contact-emblems">${newEmblems}</div>
            <div><img src="${priority}" alt="priority"></div>
            </div></div>
                    
            `           
            const progressBar = document.getElementById(newProgressBarId);
            progressBar.setAttribute('width', `${newProgressInPercent}%`);
            
        }
        //console.log("ToDoGerendert",i);
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
