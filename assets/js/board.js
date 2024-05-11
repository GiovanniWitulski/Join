let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');

let Tasks;     // String der alle Task beinhaltet

function renderBoard(){
    toDoContainer();    //load to do´s 
    inProgressContainer();       //load tasks in progress
    awaitFeedbackContainer();    //load await feedback
    function downloadData(){} //load from server, actualise TaskString

}

function downloadData(){} //load from server
    

function uploadData(){} //upload to server

function findTask(){
    let SearchedTask  = document.getElementById('boardInput').value
    if (SearchedTask == ""){
        console.log("input field empty");
        return;
    }
    console.log(SearchedTask);
    let toDo = document.getElementById('toDoContainer');
    let inProgress = document.getElementById('inProgressContainer');
    let awaitFeedback = document.getElementById('awaitFeedbackContainer');
    toDo.innerHTML = '';
    inProgress.innerHTML = '';
    awaitFeedback.innerHTML = '';

    searchResult(SearchedTask);
}

function searchResult(s){        //Text im Titel oder Beschreibung --> Array Tasks noch auf API umschreiben
    //Datenbankabgleich

    console.log("SearchResul übergabe:", s);

    for(i=0; i<Tasks.length; i++){
        if (Tasks[i].title == s && Tasks[i].type == 0){
            toDoContainer(i);    //Card einfügen
        }
        if (Tasks[i].title == s && Tasks[i].type == 1){
            inProgressContainer(i); `` //Card einfügen
        }
        if (Tasks[i].title == s && Tasks[i].type == 2){
            awaitFeedbackContainer(i);
        }
       }

}
    
function toDoContainer (){
    let toDo = document.getElementById('toDoContainer'); 
}

function inProgressContainer (){
    let inProgress = document.getElementById('inProgressContainer'); 
}

function awaitFeedbackContainer(){
    let inProgress = document.getElementById('inProgressContainer'); 
    awaitFeedback.innerHTML += ``
}




