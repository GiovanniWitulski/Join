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

function validateForm() {
    // if (!document.getElementById("name").checkValidity()) {
    //   return false; // Formularübermittlung stoppen
    // }
  
    window.location.href = document.getElementById("loginForm").action;
  
    return false;
}

function landingPageAnimation() {
    setTimeout(() => {
        document.getElementById("loadAnimation").classList.add("loader-hidden");
      }, 200);
      setTimeout(() => {
        document.getElementById("loadAnimation").classList.add("d-none");
      }, 1000);
}
