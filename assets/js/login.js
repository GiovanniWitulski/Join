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
        inputFieldImg.src = 'assets/svg/visibility_off.svg';
        inputFieldImg.classList.add('cursor-pointer');
        inputField.type = "password";
    } else {
        inputFieldImg.src = 'assets/svg/lock.svg';
        inputFieldImg.classList.remove('cursor-pointer');
    }
}

function showPassword(inputFieldImg) {
    let inputField = inputFieldImg.parentNode.previousElementSibling;
  
    if (inputFieldImg.src.includes('visibility_off.svg')) {
      inputFieldImg.src = '/assets/svg/visibility.svg';   
      inputField.type = "text";                           
    } else {
        if (!inputFieldImg.src.includes('assets/svg/lock.svg')) {
            inputFieldImg.src = '/assets/svg/visibility_off.svg';
            inputField.type = "password";   
        }                       
    }
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
