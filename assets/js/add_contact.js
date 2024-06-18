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
    if(contactsAsJson){
        contactId = contactsAsJson.findIndex(element => element.vorname === (vornameCapitalized));
        console.log(contactId);
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
    await getDataForPostContact('contacts/'); 
    await confirmContactCreation();
    await checkIfDesktop();
    
}


async function checkIfDesktop(){
   
    if(window.innerWidth < 1250){
            await refreshContactToLoad(contactsAsJson.length, 'currentContact');   
    }else{

        hideTheFormular('overlay-container');
        loadContacts();
    }
        
    
        
    }
    


async function confirmContactCreation(){

    if(window.innerWidth < 1250){
        localStorage.setItem('contactWasCreated', 'true'); 
    }
   
}




// async function getDataForPostContact(){
// return {
//     "mail": contactMail,
//     "mobile": contactPhone,
//     "name": nachnameCapitalized,
//     "vorname": vornameCapitalized,
//     "id": contactId,
//     "color": contactColor
// };
// }

async function getDataForPostContact(path){
    
        let data = {
            "mail": contactMail,
            "mobile": contactPhone,
            "name": nachnameCapitalized,
            "vorname": vornameCapitalized,
            "color": contactColor
        } 
     
    
    
        postData(path, data);
    }



