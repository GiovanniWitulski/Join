function showRegisterForm() {
    document.getElementById('signupParentDiv').classList.remove('d-none');
    document.getElementById('loginParentDiv').classList.add('d-none');
} 

function showLoginForm() {
    document.getElementById('signupParentDiv').classList.add('d-none');
    document.getElementById('loginParentDiv').classList.remove('d-none');
}

/**
 * This function changes the image and the cursor depending on whether the input field is empty, 
 * contains text or wants to make the written text visible, e.g. with a password.
 * 
 * @param {object} inputField - This is the input field in which the image and cursor would be changed
 */
function changeInputFieldImg(inputField) {
    let passwordValue = inputField.value
    let inputIconDiv = inputField.nextElementSibling;
    let inputFieldImg = inputIconDiv.querySelector("img");
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

async function signUp(event) {
    event.preventDefault();
    let passwordDontMatchMsg = document.getElementById('passwordDontMatch');
    let password = document.getElementById("signUpPasswordIndexHtml").value;
    let confirmPassword = document.getElementById("signUpConfirmPasswordIndexHtml").value;
    let privacyPolicyCheck = document.getElementById('acceptPrivacyPolicy');
    if (password === confirmPassword && privacyPolicyCheck.src.includes(`/assets/svg/checkmark.svg`)) {
        localStorage.setItem('isSignedUp', true);
        let userName = document.getElementById('signUpNameIndexHtml').value;
        localStorage.setItem('userName', userName);
        setProfile();
        getSideMenuCharacters('signUp');
        signupSuccessfullAnimation();
    } else if (password != confirmPassword ){
        passwordDontMatchMsg.classList.remove('d-none');
        passwordDontMatchMsg.innerHTML = `Ups! your password doesnt match`;
    } else {
        passwordDontMatchMsg.classList.remove('d-none');
        passwordDontMatchMsg.innerHTML = `Agree to our privacy policy!`;
    }
}

async function setProfile() {
    let data = await getDataForProfile();
    postData('user', data);
}

async function getDataForProfile() {
    userData = {
        mail: document.getElementById('signUpEmailIndexHtml').value,
        name: document.getElementById('signUpNameIndexHtml').value,
        password: document.getElementById('signUpPasswordIndexHtml').value,
        initialUserLetters: await getInitialLettersFromInput(),
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

async function getUserName() {
    let users = await getUsers();
    let userNames = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        userNames.push(user.name);
    }
    return userNames[userNames.length - 1];
}

async function validateForm() {
    let incorrectMailOrPasswordMsg = document.getElementById('incorrectMailOrPassword');
    let passwordIsEqual = await comparePasswords();
    let mailIsEqual = await compareMails();
    if (passwordIsEqual != 'passwordIsEqual' || mailIsEqual != 'mailIsEqual') {
        incorrectMailOrPasswordMsg.classList.remove('d-none');
        return false;
    } else {
        localStorage.setItem('userName', await getUserName());
        localStorage.setItem('isSignedUp', true);
        await getSideMenuCharacters('login')
        window.location.href = document.getElementById("loginForm").action;
        return true;
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
            return 'passwordIsEqual';
        }
    }
}

async function compareMails() {
    let signedUpMails = await getSignedUpMail();
    let enteredMail =  document.getElementById('loginEmailIndexHtml').value;
    for (let i = 0; i < signedUpMails.length; i++) {
        const signedUpMail = signedUpMails[i];
        if (signedUpMail === enteredMail) {
            return 'mailIsEqual';
        }
    }
}

async function getInitialLettersFromInput() {
    let inputText = document.getElementById('signUpNameIndexHtml').value.trim();
    let words = inputText.split(" ");
    if (words.length === 1) {
      return words[0].charAt(0);
    } else {
      let initialLetters = words.map(word => word.charAt(0));
      return initialLetters.join("").toUpperCase();
    }
}

async function getSideMenuCharacters(loginChoice) {
    localStorage.removeItem('sideMenuCharacters');
    if (loginChoice === 'guest') {
        localStorage.setItem('sideMenuCharacters', 'G');
    } else if (loginChoice === 'login' || loginChoice === 'signUp') {
        let initialLetters = await getInitialLetters();
        let lastInitialLetter = initialLetters[initialLetters.length - 1];
        localStorage.setItem('sideMenuCharacters', lastInitialLetter); 
    }
}

async function getInitialLetters() {
    let users = await getUsers();
    let initialLetters = [];
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        initialLetters.push(user.initialUserLetters);
    }
    return initialLetters;
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

function signupSuccessfullAnimation() {
    let signupSuccessfullContainer = document.getElementById('signupSuccessfullContainer');
    signupSuccessfullContainer.style.display = 'flex';

    setTimeout(() => {
        signupSuccessfullContainer.style.display = 'none';
        showLoginForm();
    }, 1000);
}