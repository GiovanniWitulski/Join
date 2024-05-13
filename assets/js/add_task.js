


let subtaskCount = 0;

function changeToActive(id){
let possibleId = ['urgent-btn', 'medium-btn', 'low-btn'];
possibleId.splice(possibleId.indexOf(id), 1);
    let element = document.getElementById(id)
    element.classList.toggle(`${id}-active`);

    for (let i = 0; i < possibleId.length; i++) {
        const element = possibleId[i];
        document.getElementById(element).classList.remove(`${element}-active`);
        
    }
}

function changeButtons(){

    if (document.getElementById('subtask-buttons').classList.contains('none')){
        document.getElementById('subtask-buttons').classList.remove('none');
        document.getElementById('subtask-plus-button-div').classList.add('none');
    }

}

function onSubtaskBlur(){
    let inputfield = document.getElementById('subtask-input');

    if(inputfield.value === ''){
        if(!document.getElementById('subtask-buttons').classList.contains('none')){
        document.getElementById('subtask-buttons').classList.add('none');
        document.getElementById('subtask-plus-button-div').classList.remove('none');
    }
    }

    
}

function addBlurListener(){
    let subtaskInput = document.getElementById('subtask-input');

    if(subtaskInput){
       

        subtaskInput.addEventListener("blur", onSubtaskBlur);
    }
}

document.addEventListener("DOMContentLoaded", addBlurListener);

function addToSubtasks(){
     subtaskCount += 1;
    let inputfield = document.getElementById('subtask-input');
    let subtaskList = document.getElementById('list-of-subtasks');

    
    subtaskList.innerHTML += `<li id=subtask${subtaskCount}><div class="content-of-subtask"><div id="textOfSubtask${subtaskCount}">${inputfield.value}</div> <div class="edit-subtask-div"><button class="edit-btn" onclick="editSubtask('${subtaskCount}')"></button><div class="btn-divider"></div><button onclick="deleteElementById('subtask${subtaskCount}')" class="trash-btn"></button></div></div></li>`;
    inputfield.value = ``;
    onSubtaskBlur();
   

}

 function editSubtask(id){
    let subtaskToChange = document.getElementById(`subtask${id}`);
    let valueToInsert = document.getElementById(`textOfSubtask${id}`).innerHTML;
    if(subtaskToChange){

        let inputToEdit = document.createElement('div');
        inputToEdit.setAttribute('id', `subtask${id}`);
        inputToEdit.innerHTML = `<input type="text" value="${valueToInsert}" id="edit-${subtaskToChange.getAttribute('id')}"><div class="edit-subtask-buttons"><button onclick="deleteSubtask('subtask${id}')" class="trash-btn"></button><div class="btn-divider"></div><button onclick="confirmEditedSubtask('${inputToEdit.id}', '${id}')" class="correct-btn"></button></div>`
        inputToEdit.classList.add('renameSubtaskDiv');
        inputToEdit.focus();
        subtaskToChange.parentNode.replaceChild(inputToEdit, subtaskToChange);
    }else{
        console.log('The list item could not be found');
    }
}


function confirmEditedSubtask(id, functionValue){

    let subtask = document.getElementById(id);
    let editedText = document.getElementById(`edit-subtask${functionValue}`).value;
    
    if(subtask){

        let subtaskToConfirm = document.createElement('li');
        subtaskToConfirm.setAttribute('id', id);
        subtaskToConfirm.innerHTML = `<div class="content-of-subtask"><div id="textOfSubtask${functionValue}">${editedText}</div><div class="edit-subtask-div"><button class="edit-btn" onclick="editSubtask('${functionValue}')"></button><div class="btn-divider"></div><button class="trash-btn" onclick="deleteElementById('subtask${functionValue}')"></button></div></div>`
        subtask.parentNode.replaceChild(subtaskToConfirm, subtask);
    }else{
        console.log("error");
    }



}


function deleteSubtask(id){
    let subtaskToDelete = document.getElementById(id);
    subtaskToDelete.parentNode.removeChild(subtaskToDelete);
    
}


function cancelSubtask(){

    let inputfield = document.getElementById('subtask-input');
    inputfield.value = '';
    onSubtaskBlur();
}

/*function getTheSubtaskCount(){
    let subTaskDiv = document.getElementById('list-of-subtasks');
    if (subTaskDiv){

        let listElements = subTaskDiv.querySelectorAll('li', 'div');
        subtaskCount = listElements;
        return subtaskCount.length;

    }else{
        console.log("The element you are looking for could not be found")
    }
}*/

function deleteElementById(elementId){
   
    let element = document.getElementById(elementId);
    if (element){
        element.parentNode.removeChild(element);
       
      
    }else{
        console.log("The Element with the inserted ID can´t be found");
    }
    
}


function renderAssignSelector(){
document.getElementById('contact-selector').innerHTML = `<option value disabled selected>Select contacts to assign</option>`;
    for (let i = 0; i < contactsAsJson.length; i++) {
        const contact = contactsAsJson[i];
        
        document.getElementById('contact-selector').innerHTML += `<option class="option" value="${i}">${contact['vorname']} ${contact['name']}</option>`
    }
}