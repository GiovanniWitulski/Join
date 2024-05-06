async function includeHTML(path) {
    document.getElementById('mobileTamplateContent').removeAttribute('w3-include-html');
    document.getElementById('mobileTamplateContent').setAttribute('w3-include-html', `${path}`);
    
    console.log(path);

    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html");
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}