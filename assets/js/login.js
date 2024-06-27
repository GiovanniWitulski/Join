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
    getSideMenuCharacters('login');
  
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

function signUp(event) {
    event.preventDefault();
    let requiredMsg = document.querySelector('.required-msg');
    let password = document.getElementById("signUpPasswordIndexHtml").value;
    let confirmPassword = document.getElementById("signUpConfirmPasswordIndexHtml").value;

    if (password !== confirmPassword) {
        console.log('ungleich');
        requiredMsg.style.display = 'block';
    } else {
        console.log('gleich');
        getSideMenuCharacters('signUp');
        window.location.href = document.getElementById("signUpForm").action;
    }
}

function getSideMenuCharacters(loginChoice) {
    if (loginChoice === 'login') {
        localStorage.setItem('sideMenuCharacters', 'SM');
    }

    if (loginChoice === 'signUp') {
        let name =  document.getElementById('signUpNameIndexHtml').value
        let sideMenuCharacters = name.slice(0, 2).toUpperCase();
        localStorage.setItem('sideMenuCharacters', sideMenuCharacters);
    }

    if (loginChoice === 'guest' || loginChoice === null) {
        localStorage.setItem('sideMenuCharacters', 'G');
    }
}