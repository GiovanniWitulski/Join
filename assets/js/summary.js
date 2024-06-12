function updateSummary() {
    document.getElementById('tasksToDoCounter').innerHTML = dataArray.length;
}

async function getData() {
    let 
    try {
      const data = await loadData('tasks');
      const dataArray = [];
      for (const key in data) { 
        if (data.hasOwnProperty(key)) { 
            dataArray.push({ id: key, ...data[key] });
        }
      }
      
      console.log(dataArray.length);
    //   return contacts;
    document.getElementById('tasksToDoCounter').innerHTML = dataArray.length;
    } catch (error) {
      console.error('Fehler beim Laden der Kontakte:', error);
      throw error;
    }
}