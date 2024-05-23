function showRegisterForm() {
    document.getElementById('signupParentDiv').classList.remove('d-none');
    document.getElementById('loginParentDiv').classList.add('d-none');
} 

function showLoginForm() {
    document.getElementById('signupParentDiv').classList.add('d-none');
    document.getElementById('loginParentDiv').classList.remove('d-none');
}


function validateForm() {
    // 1. Validierung durchführen
    if (!document.getElementById("name").checkValidity()) {
      // Falls ungültig, Fehler anzeigen (z.B. mit einer Meldung)
      return false; // Formularübermittlung stoppen
    }
  
    // 2. Seite wechseln (nach erfolgreicher Validierung)
    window.location.href = document.getElementById("loginForm").action;
  
    return false; // Formularübermittlung stoppen (optional, um Standardverhalten zu verhindern)
  }