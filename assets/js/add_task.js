let subtaskCount = 0;
let priorityOfTask;
let idOfNewTask;

function changeToActive(id){
    let possibleId = ['urgent-btn', 'medium-btn', 'low-btn'];
    possibleId.splice(possibleId.indexOf(id), 1);
    priorityOfTask = id.split('-')[0];
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
    if(inputfield.value != ''){
        subtaskList.innerHTML += `<li id=subtask${subtaskCount}><div class="content-of-subtask"><div id="textOfSubtask${subtaskCount}">${inputfield.value}</div> <div class="edit-subtask-div"><button class="edit-btn" onclick="editSubtask('${subtaskCount}')"></button><div class="btn-divider"></div><button onclick="deleteElementById('subtask${subtaskCount}')" class="trash-btn"></button></div></div></li>`;
    }
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
    if(document.getElementById('optionContainer').innerHTML == ``){
        document.getElementById('optionContainer').innerHTML = ``;
        
        for (let i = 0; i < contactsAsJson.length; i++) {
            const contact = contactsAsJson[i];
            
            document.getElementById('optionContainer').innerHTML += `<div id="contact${i}" class="option" onclick="assignTheContact(this,${i})"><div class="contactNameDiv"><svg class="profile_pic" width="42px" height="42px">
            <circle cx="21" cy="21" r="20" stroke="white" stroke-width="2" fill="${contact['color']}" />
            <text x="12" y="25" fill="white" font-size="12px">${contact['vorname'].charAt(0)}${contact['name'].charAt(0)}</text>
            </svg><div class="contactNames">${contact['vorname']} ${contact['name']}</div></div><img id="checkbox${i}" class="checkbox-icon" src="/assets/svg/rectangle.svg"></div>`;
        }
    }
}


function assignTheContact(element, checkboxID){
    document.getElementById(element.id).classList.toggle('checked');
    let checkbox = document.getElementById(`checkbox${checkboxID}`);
    let src = checkbox.src;
    if(document.getElementById(element.id).classList.contains('checked')){
        checkbox.src = '/assets/svg/checkboxWhite.svg';
    }else{
        checkbox.src = '/assets/svg/rectangle.svg';
    }
    assignPicturesToDiv();
}


function assignPicturesToDiv(){
    let checkedContacts = document.getElementsByClassName('checked');
    document.getElementById('assignedContactPics').innerHTML = ``;
    for (let index = 0; index < checkedContacts.length; index++) {
        const element = checkedContacts[index];
        document.getElementById('assignedContactPics').innerHTML += `<div>${element['childNodes'][0]['firstChild'].outerHTML}</div>`;
    }
}


function showContactsToAssign(){
    document.getElementById('optionContainer').classList.remove('none');
    if(!document.getElementById('dropdown-btn').classList.contains('active')){
        document.getElementById('dropdown-btn').classList.add('active');
    }
}


function filterAssignedContacts(){
    let assignableContacts = document.getElementsByClassName('contactNames');
    let input = document.getElementById('contact-selector');
    let filter = input.value.toLowerCase();
    for (let i = 0; i < assignableContacts.length; i++) {
        const element = assignableContacts[i];
        const text = element.innerText;
        if(!text.toLowerCase().includes(filter)){
            hideThisContact(`contact${i}`);
        }else{
            showThisContact(`contact${i}`);
            if(!document.getElementById(`contact${i}`).classList.contains('checked')){
                document.getElementById(`checkbox${i}`).src = '/assets/svg/rectangle.svg';
            }   
        }
    }
}


function hideThisContact(id){
    document.getElementById(id).classList.add('none');
    document.getElementById(id).classList.remove('option');
}


function showThisContact(id){
    document.getElementById(id).classList.add('option');
    document.getElementById(id).classList.remove('none');
}


function addEventListenerToInput(){
    document.getElementById('contact-selector').addEventListener('input',filterAssignedContacts);
}

function hideContactsToAssign(button){
    document.getElementById('optionContainer').classList.add('none');
    if(button.classList.contains('active')){
        button.classList.toggle('active');
    } 
}


async function getTheDataForPostTask(event) {
    
    event.preventDefault();
    const data = {
        title: document.getElementById('title-input').value,
        description: document.getElementById('descriptionInput').value,
        priority: priorityOfTask,
        assignedTo: fetchAllAssignedContacts(),
        contactEmblem: getTheEmblemsOfAssignedContacts(),
        date: document.getElementById('datePicker').value,
        subtask: getTheSubtasksOfTask(),
        label: getTheCategoryOfTask(),
        subtaskSum: getTheSubtaskStatus(getTheSubtasksOfTask()),
        type: "0",
        taskid: await getTheIdOfTask()
    };
    await postData('tasks', data);
    await showNotification();
    
    //document.getElementById('addTaskForm').submit();
}


async function showNotification() {
    const notificationElement = document.getElementById('taskAddedNotification');
notificationElement.classList.remove('none');

setTimeout(() => {
    notificationElement.classList.add('showNotification');
}, 100);

    
    // 2000 Millisekunden = 2 Sekunden
    setTimeout(function() {
        window.location.href = "/board.html";
    }, 1000);
}


async function getTheIdOfTask(){
    let id = await loadData('taskId');
    if(id != null){
        idOfNewTask = id + 1;
        await putData('taskId', idOfNewTask);
    }else{
        idOfNewTask = 0;
        await putData('taskId', idOfNewTask);
    }
    return idOfNewTask;  
}


function getTheSubtaskStatus(subtasks){
    let subtaskStatus = [];
    for (let index = 0; index < subtasks.length; index++) {
        const element = subtasks[index];
        subtaskStatus.push(0); 
    }
    return subtaskStatus;
}


function getTheCategoryOfTask(){
    let selection = document.getElementsByClassName('selector dropdown-img');
    let selectedCategory = selection[0].options.selectedIndex;
    return selectedCategory
}


function getTheSubtasksOfTask(){
    let listOfSubtasks = document.getElementsByClassName('content-of-subtask');
    let subtasksAsText = [];
    for (let index = 0; index < listOfSubtasks.length; index++) {
        const subtask = listOfSubtasks[index].childNodes[0].innerHTML;
        subtasksAsText.push(subtask);
    }
    return subtasksAsText;
}


function getTheEmblemsOfAssignedContacts(){
    let listOfCheckedContacts = document.getElementsByClassName('checked');
    let listOfContactEmblems = [];
    for (let index = 0; index < listOfCheckedContacts.length; index++) {
        const emblem = listOfCheckedContacts[index].childNodes[0].firstChild.outerHTML;
        listOfContactEmblems.push(emblem);
    }
    return listOfContactEmblems;
}


function fetchAllAssignedContacts(){
    let listOfCheckedContacts = document.getElementsByClassName('checked');
    let listOfAssignedNames = [];
    for (let i = 0; i < listOfCheckedContacts.length; i++) {
        const contact = listOfCheckedContacts[i].childNodes[0].children[1].innerHTML;
        listOfAssignedNames.push(contact);
    }
    return listOfAssignedNames;
}


document.addEventListener('DOMContentLoaded', addEventListenerToInput);
document.addEventListener('DOMContentLoaded', () => {
    let subtaskInputField = document.getElementById('subtask-input');
    subtaskInputField.addEventListener('keydown', function(event){
        if(event.key === 'Enter'){
            event.preventDefault();
            addToSubtasks();
        }
    })
});


document.addEventListener('click', function(event){
    let optionContainer = document.getElementById('optionContainer');
    if(!optionContainer.contains(event.target) && event.target != document.getElementById('contact-selector')){
        let button = document.getElementById('dropdown-btn');
        hideContactsToAssign(button);
    }else{
        renderAssignSelector();
        showContactsToAssign();
    }
})
