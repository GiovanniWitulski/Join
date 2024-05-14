function init() {
    includeHTML();
}

function toggleCheckbox(checkboxImg) {
    const currentSrc = checkboxImg.src;

    if (currentSrc.endsWith('rectangle.svg')) {
        checkboxImg.src = '/assets/svg/checkmark.svg';
    } else {
        checkboxImg.src = '/assets/svg/rectangle.svg';
    }
}