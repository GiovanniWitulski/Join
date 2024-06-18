
function editAddSubtasks(subtask){
    subtaskCount += 1;
    let inputfield = subtask;
    let subtaskList = document.getElementById('list-of-subtasks');
    if(inputfield.value != ''){
        subtaskList.innerHTML += `<li id=subtask${subtaskCount}><div class="content-of-subtask"><div id="textOfSubtask${subtaskCount}">${subtask}</div> <div class="edit-subtask-div"><button class="edit-btn" onclick="editSubtask('${subtaskCount}')"></button><div class="btn-divider"></div><button onclick="deleteElementById('subtask${subtaskCount}')" class="trash-btn"></button></div></div></li>`;
    }
    inputfield.value = ``;
    onSubtaskBlur();
}


// Placeholder input field //*css*/
    
