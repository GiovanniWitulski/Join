


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
    let inputfield = document.getElementById('subtask-input');
    let subtaskList = document.getElementById('list-of-subtasks');

    
    subtaskList.innerHTML += `<li id=subtask${getTheSubtaskCount() + 1}><div class="content-of-subtask">${inputfield.value} <div class="edit-subtask-div"><button class="edit-btn"></button><div class="btn-divider"></div><button onclick="deleteElementById('subtask${getTheSubtaskCount() + 1}')" class="trash-btn"></button></div></div></li>`;
    inputfield.value = ``;
    onSubtaskBlur();

}

function cancelSubtask(){

    let inputfield = document.getElementById('subtask-input');
    inputfield.value = '';
    onSubtaskBlur();
}

function getTheSubtaskCount(){
    let subTaskDiv = document.getElementById('list-of-subtasks');
    if (subTaskDiv){

        let listElements = subTaskDiv.querySelectorAll('li');
        subtaskCount = listElements;
        return subtaskCount.length;

    }else{
        console.log("The element you are looking for could not be found")
    }
}

function deleteElementById(elementId){

    let element = document.getElementById(elementId);
    if (element){
        element.parentNode.removeChild(element);
    }else{
        console.log("The Element with the inserted ID can´t be found");
    }
}