let vornameCapitalized = ""
let nachnameCapitalized = ""
let contactMail = ""
let contactPhone = ""
const URL = "https://join-remotestorage-default-rtdb.europe-west1.firebasedatabase.app/";


function createName(){

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

console.log(vornameCapitalized + nachnameCapitalized);

}

function getMail(){
    contactMail = document.getElementById('contact-mail').value;
}

function getPhoneNumber(){
    contactPhone = document.getElementById('contact-phone').value;
}



function getTheInformation(){

    createName();
    getMail();
    getPhoneNumber();
    postData('contacts');
}




async function postData(path='', data={}, key=''){
    data = {"mail": contactMail, "mobile": contactPhone, "name": nachnameCapitalized, "vorname": vornameCapitalized }
    let response = await fetch(URL + path + key + ".json",{

method: "POST",
header: {

    "Content-Type" : "application/json"


},
body: JSON.stringify(data)

    });
    return responseToJson = await response.json();
    
}



