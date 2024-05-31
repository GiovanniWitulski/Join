let vornameCapitalized = ""
let nachnameCapitalized = ""
let contactMail = ""
let contactPhone = ""
let contactId;
let contactColor;
const URL = "https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app/";


async function createName(){
    let fullName = document.getElementById('contact-name').value;
    let words = fullName.split(" ");
    let vorname = words[0];
    let nachname = words[1];
    if(vorname && nachname){
        vornameCapitalized = vorname.charAt(0).toUpperCase() + vorname.slice(1);
        nachnameCapitalized = nachname.charAt(0).toUpperCase() + nachname.slice(1);
    }else if(vorname && !nachname){
        vornameCapitalized = vorname.charAt(0).toUpperCase() + vorname.slice(1);
        nachnameCapitalized = ""
    }  
}


async function getMail(){
    contactMail = document.getElementById('contact-mail').value;
}


async function getPhoneNumber(){
    contactPhone = document.getElementById('contact-phone').value;
}


async function getId(){
    if(contactsWithoutToken){
        contactId = contactsWithoutToken.length;  
    }else{
        contactId = 0;
    } 
}


async function getTheInformation(event){
    event.preventDefault(); //formular wird von sofortigem reload aufgehalten
    await createName();
    await getMail();
    await getPhoneNumber();
    await getId();
    contactColor = await getAColor();
    await postContact('contacts/'); 
    await refreshContactToLoad(contactId, 'currentContact');   
}


async function postContact(path='', data={}) {
    data = await getDataForPostContact();
    let fetchResponse = await fetch(URL + path + ".json");
    let currentData = await fetchResponse.json();
    if (!Array.isArray(currentData)) {
        currentData = [];
    }
    currentData.push(data);
    await postData(path,currentData);
}

async function getDataForPostContact(){
return {
    "mail": contactMail,
    "mobile": contactPhone,
    "name": nachnameCapitalized,
    "vorname": vornameCapitalized,
    "id": contactId,
    "color": contactColor
};
}



