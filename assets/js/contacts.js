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
        
    
            document.getElementById('contact-div').innerHTML += `<div class="contact-section" id="${element}"><p id="headline${element}">${element.toUpperCase(element)}</p></div>`;
            for (let j = 0; j < contactsAsJson.length; j++) {
                const contact = contactsAsJson[j];
                if(contact['vorname'].charAt(0).toUpperCase() === element.toUpperCase()){
                    document.getElementById(`headline${element}`).innerHTML += `<div>${contact['vorname']} ${contact['name']}</div>`
                }
                
            }
        
    }
}




function assignContactToSection(){


}