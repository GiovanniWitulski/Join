function showRegisterForm() {
    document.getElementById('signupParentDiv').classList.remove('d-none');
    document.getElementById('loginParentDiv').classList.add('d-none');
} 

function showLoginForm() {
    document.getElementById('signupParentDiv').classList.add('d-none');
    document.getElementById('loginParentDiv').classList.remove('d-none');
}
