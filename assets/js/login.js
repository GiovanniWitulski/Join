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
    let passwordDontMatchMsg = document.getElementById('passwordDontMatch');
    let password = document.getElementById("signUpPasswordIndexHtml").value;
    let confirmPassword = document.getElementById("signUpConfirmPasswordIndexHtml").value;
    let privacyPolicyCheck = document.getElementById('acceptPrivacyPolicy');

    if (password === confirmPassword && privacyPolicyCheck.src.includes(`/assets/svg/checkmark.svg`)) {
        console.log('gleich');
        getSideMenuCharacters('signUp');
        setProfile();
        signupSuccessfullAnimation();
    } else {
        console.log('ungleich');
        passwordDontMatchMsg.classList.remove('d-none');
    }
}

// getSideMenuCharacters BEARBEITEN
function getSideMenuCharacters(loginChoice) {
    if (loginChoice === 'login') {
        localStorage.setItem('sideMenuCharacters', 'SM');
        localStorage.setItem('welcomeMsg', '!');
    }

    if (loginChoice === 'signUp') {
        let name =  document.getElementById('signUpNameIndexHtml').value
        let sideMenuCharacters = name.slice(0, 2).toUpperCase();
        localStorage.setItem('sideMenuCharacters', sideMenuCharacters);
        localStorage.setItem('welcomeMsg', name);
    }

    if (loginChoice === 'guest' || loginChoice === null) {
        localStorage.setItem('sideMenuCharacters', 'G');
        localStorage.setItem('welcomeMsg', '!');
    }
}

function signupSuccessfullAnimation() {
    let signupSuccessfullContainer = document.getElementById('signupSuccessfullContainer');
    signupSuccessfullContainer.style.display = 'flex';

    setTimeout(() => {
        signupSuccessfullContainer.style.display = 'none';
        showLoginForm();
    }, 1000);
}


async function setProfile() {
    let data = await getDataForProfile();
    postData('user', data)
}

async function getDataForProfile() {
    userData = {
        mail: document.getElementById('signUpEmailIndexHtml').value,
        name: document.getElementById('signUpNameIndexHtml').value,
        password: document.getElementById('signUpPasswordIndexHtml').value,
    };
    return userData;
}

async function getUsers() {
    try {
      let data = await loadData('user');
      let user = [];
      for (const key in data) { 
        if (data.hasOwnProperty(key)) { 
            user.push({ id: key, ...data[key] });
        }
      }
    
      return user;

    } catch (error) {
      console.error('Fehler beim Laden des User:', error);
      throw error;
    }
}

async function getSignedUpMail() {
    let users = await getUsers();
    let userMails = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        userMails.push(user.mail);
    }
    return userMails;
}

async function getSignedUpPssword() {
    let users = await getUsers()
    let userPasswords = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        userPasswords.push(user.password);
    }
    return userPasswords;
}

async function comparePasswords() {
    let signedUpPsswords = await getSignedUpPssword();
    let enteredPassword =  document.getElementById('loginPasswordIndexHtml').value;
    for (let i = 0; i < signedUpPsswords.length; i++) {
        const signedUpPssword = signedUpPsswords[i];
        if (signedUpPssword === enteredPassword) {
            console.log('gleiches Password');
            return 'mailIsEqual';
        } else {
            console.log('ungleiches Passwort');
            return false;
        }
    }
}

async function compareMails() {
    let signedUpMails = await getSignedUpMail();
    let enteredMail =  document.getElementById('loginEmailIndexHtml').value;
    console.log(enteredMail);
    for (let i = 0; i < signedUpMails.length; i++) {
        const signedUpMail = signedUpMails[i];
        if (signedUpMail === enteredMail) {
            console.log('gleiche Mail');
            return 'passwordIsEqual';
        } else {
            console.log('ungleiche Mail');
            return false;
        } 
    }
}

async function validateForm() {
    let passwordIsEqual = await comparePasswords();
    let mailIsEqual = await compareMails();
    if (passwordIsEqual === false || mailIsEqual === false) {
        console.log('nein');
        return false;
    } else {
        console.log('ja');
        window.location.href = document.getElementById("loginForm").action
        return true;
    }
}