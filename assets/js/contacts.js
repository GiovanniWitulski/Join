let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let contactsAsJson;
let contactToDisplay = 0;
let colors = ['#FF7A00', '#FF5EB3', '#6E52FF','#9327FF', '#00BEE8', '#1FD7C1', '#FF745E', '#FFA35E','#FC71FF','#FFC701', '#0038FF', '#C3FF2B', '#FFE62B', '#FF4646', '#FFBB2B'];
let contactsWithoutToken = [];

async function getAColor(){
    let randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


async function loadContacts(){
    
    
    contactsAsJson = await getContacts();
   
    createDivs();
}


async function readTheTokens(){
    for(const key in contactsAsJson){
        if(contactsAsJson.hasOwnProperty(key)){
            const array = contactsAsJson[key];
            const token = {token: key};
            
            array.forEach(element => {
                contact = {...element, ...token};
                contactsWithoutToken.push(contact);
            });
        }
    }
}


function createDivs(){
    if(document.getElementById('contact-div')){
        document.getElementById('contact-div').innerHTML = ``;
        for (let i = 0; i < alphabet.length; i++) {
            const element = alphabet[i];
            document.getElementById('contact-div').innerHTML += `<div class="contact-section" id="${element}"><div class="headline-Div"><p id="headline${element}">${element.toUpperCase(element)}</p></div><div id="contactsOf${element}"></div></div>`;
            for (let j = 0; j < contactsAsJson.length; j++) {
                const contact = contactsAsJson[j];
                if(contact['vorname'].charAt(0).toUpperCase() === element.toUpperCase()){
                    document.getElementById(`contactsOf${element}`).innerHTML += generateHTMLcodeForContacts(contact, j);
                }
            }
            if(document.getElementById(`contactsOf${element}`).innerHTML === ''){
                document.getElementById(`${element}`).classList.add('none');   
            }
        }
    }  
}


function generateHTMLcodeForContacts(contact, j){
    return `<a  onclick="refreshContactToLoad(${j}, 'currentContact')"  id="${j}" class="singleContact"><svg class="profile_pic" width="42px" height="42px">
    <circle cx="21" cy="21" r="20" stroke="white" stroke-width="2" fill="${contact['color']}" />
    <text x="12" y="25" fill="white" font-size="12px">${contact['vorname'].charAt(0)}${contact['name'].charAt(0)}</text>
    </svg>
    <div><p class="names">${contact['vorname']} ${contact['name']}</p><p class="mail">${contact['mail']}</p></div></a>`
}


async function refreshContactToLoad(id, path) {
    contactToDisplay = id;
    await putData(path,id)
    if (window.innerWidth >= 1250){
        loadCurrentContactId('desktop');
        showContactDetails();
    }else{
         window.location.href = "/assets/templates/contact_details.html";
    }
   
}


function showContactDetails(){
    
    document.getElementById('middle-container-desktop').classList.add('show');
}

function showAddContact(){
    document.getElementById('overlay-container').classList.add('show');
    document.getElementById('overlayVeilAddContact').classList.remove('none');
}


document.addEventListener('DOMContentLoaded', loadContacts('contacts'));


function hideTheFormular(elementToHide){
    document.getElementById('contact-name').value = ``;
    document.getElementById('contact-mail').value = ``;
    document.getElementById('contact-phone').value = ``;
    document.getElementById(elementToHide).classList.remove('show');
    document.getElementById('overlayVeilAddContact').classList.add('none');
}


async function fillEditContactFormDesktop(id){
    idToFind = id;
   // indexToFill = contactsAsJson.findIndex(contact => contact.id === idToFind);
    currentContact = contactsAsJson[idToFind];
    document.getElementById('contact-name-desktop').value = `${currentContact['vorname']} ${currentContact['name']}`;
    document.getElementById('contact-mail-desktop').value = `${currentContact['mail']}`;
    document.getElementById('contact-phone-desktop').value = `${currentContact['mobile']}`;
    document.getElementById('closeEditContactButton-desktop').outerHTML = `<button id="closeEditContactButton" class="close-btn" onclick="hideEditOverlay()"></button>`
    document.getElementById('save-edits-btn-desktop').setAttribute('onclick',`saveEditsToContact('${currentContact['id']}')`);
    document.getElementById('delete-contact-btn-desktop').setAttribute('onclick',`deleteContact(${id})`);
    showEditOverlay();
    document.getElementById('editContactPic-desktop').outerHTML = await drawContactEditPic(currentContact);
}


function rewriteButton(){

    if(document.getElementsByClassName('add-contact-btn')[0]){
        if(window.innerWidth >= 1250){
           document.getElementsByClassName('add-contact-btn')[0].innerHTML = `Add new contact`;
    }else{
        document.getElementsByClassName('add-contact-btn')[0].innerHTML = ``;
    }
    }
    
     
    
}


document.addEventListener('DOMContentLoaded', rewriteButton);
window.addEventListener('resize', rewriteButton);





