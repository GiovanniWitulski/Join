let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let contactsAsJson;
const BASE_URL = "https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app/";

async function loadContacts(path=""){

    let response = await fetch(BASE_URL + path + ".json");
    contactsAsJson = await response.json();
    createDivs();
}


function createDivs(){

document.getElementById('contact-div').innerHTML = ``;

    for (let i = 0; i < alphabet.length; i++) {
        const element = alphabet[i];
        
    
            document.getElementById('contact-div').innerHTML += `<div class="contact-section" id="${element}"><div class="headline-Div"><p id="headline${element}">${element.toUpperCase(element)}</p></div><div id="contactsOf${element}"></div></div>`;
            for (let j = 0; j < contactsAsJson.length; j++) {
                const contact = contactsAsJson[j];
                if(contact['vorname'].charAt(0).toUpperCase() === element.toUpperCase()){
                    document.getElementById(`contactsOf${element}`).innerHTML += `<div class="singleContact"><svg class="profile_pic" width="42px" height="42px">
                    <circle cx="21" cy="21" r="20" stroke="white" stroke-width="2" fill="orange" />
                    <text x="12" y="25" fill="white" font-size="12px">${contact['vorname'].charAt(0)}${contact['name'].charAt(0)}</text>
                  </svg>
                  <div><p class="names">${contact['vorname']} ${contact['name']}</p><p class="mail">${contact['mail']}</p></div></div>`
                }
                
            }
            if(document.getElementById(`contactsOf${element}`).innerHTML === ''){
                document.getElementById(`${element}`).classList.add('none');


            }
        
    }
}



function showAddContact(){

    document.getElementById('overlay-container').classList.add('show');
}
