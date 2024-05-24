function showRegisterForm() {
    document.getElementById('signupParentDiv').classList.remove('d-none');
    document.getElementById('loginParentDiv').classList.add('d-none');
} 

function showLoginForm() {
    document.getElementById('signupParentDiv').classList.add('d-none');
    document.getElementById('loginParentDiv').classList.remove('d-none');
}

function changeInputFieldImg(inputField) {
    let passwordValue = inputField.value
    let inputIconDiv = inputField.nextElementSibling;
    let inputFieldImg = inputIconDiv.querySelector("img");
    console.log(passwordValue);
    if (passwordValue !== '') {
        inputFieldImg.src = "assets/svg/visibility_off.svg";
    } else {
        inputFieldImg.src = "assets/svg/lock.svg";
    }
}

function showPassword() {

}

// function validateForm() {
//     // 1. Validierung durchführen
//     if (!document.getElementById("name").checkValidity()) {
//       // Falls ungültig, Fehler anzeigen (z.B. mit einer Meldung)
//       return false; // Formularübermittlung stoppen
//     }
  
//     // 2. Seite wechseln (nach erfolgreicher Validierung)
//     window.location.href = document.getElementById("loginForm").action;
  
//     return false; // Formularübermittlung stoppen (optional, um Standardverhalten zu verhindern)
// }

// function landingPageAnimation() {
//     const loadAnimation = document.getElementById('loadAnimation');
//     const logInHeaderLogo = document.getElementById('logInHeaderLogo');

//     // Simuliert Ladeverzögerung (ersetzen Sie dies durch Ihre tatsächliche Ladeladegik)
//     setTimeout(() => {
//       loadAnimation.classList.add('loader-hidden'); // Blende den Lader aus
    
//       // Optional: Entferne den Lader aus dem DOM nach Abschluss der Animation
//       loadAnimation.addEventListener('transitionend', () => {
//         loadAnimation.remove(); 
//       });
    
//     }, 3000); // Blende den Lader nach 3 Sekunden aus 
// }