let Tasks;     // String der alle Task beinhaltet 

const Searchfield = document.getElementById('boardInput').addEventListener('input', findTask);

let toDo = document.getElementById('toDoContainer');
let inProgress = document.getElementById('inProgressContainer');
let awaitFeedback = document.getElementById('awaitFeedbackContainer');

function renderBoard(){
    function downloadData(){} //load from server, actualise Task - Array
    toDoContainer();    //load to do´s 
    inProgressContainer();       //load tasks in progress
    awaitFeedbackContainer();    //load await feedback

}

function downloadData(){} //load from server    

function uploadData(){} //upload to server

function testSearch (event){
    const Suchwert = event.target.value;
    console.log("neuer wert im Suchfeld:", Suchwert );
}

function findTask(event){
    console.log("findTaskStarted");
    const SearchedTask  = event.target.value;
    if (SearchedTask == ""){
        console.log("input field empty");
        renderBoard();                //Searchfield empty again -> reload up do date status
        return;
    }
    console.log("Aktueller Suchfeldwert:",SearchedTask);
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

    console.log("SearchResult übergeben:", s);

    for(i=0; i<Tasks.length; i++){
        if (Tasks[i].title == s && Tasks[i].type == 0){
            toDoContainer(i);    //Card einfügen
        } else if (Tasks[i].description && Tasks[i].type == 0){
            toDoContainer(i);
        }
        if (Tasks[i].title == s && Tasks[i].type == 1){
            inProgressContainer(i); `` //Card einfügen
        } else if (Tasks[i].description && Tasks[i].type == 1){
            inProgressContainer(i);
        }
        if (Tasks[i].title == s && Tasks[i].type == 2){
            awaitFeedbackContainer(i);
        } else if (Tasks[i].description && Tasks[i].type == 2){
            awaitFeedbackContainer(i);
        }
       }

}
    
function toDoContainer (){
    let toDo = document.getElementById('toDoContainer'); 

    //add Task - Cards with .innerHTML //
    // Label abfragen --> if label1 ---> img src "/img/label1.svg...", 
    // Checkbox abfragen: var checkbox = document.getElementById('checkboxId');
    //                    var checked = checkbox.checked;
}

function inProgressContainer (){
    let inProgress = document.getElementById('inProgressContainer'); 
    
    //add Task - Cards with .innerHTML //
}

function awaitFeedbackContainer(){
    let inProgress = document.getElementById('inProgressContainer'); 
    awaitFeedback.innerHTML += ``

    //add Task - Cards with .innerHTML //
}




