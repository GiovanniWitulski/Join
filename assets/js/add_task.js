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