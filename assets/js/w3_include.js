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
            includeJs(element);
            includeCss(element);
        } else {
            element.innerHTML = 'Page not found';
        }
    }
}



async function includeJs(element) {
    let scripts = element.querySelectorAll('script');
    scripts.forEach(script => {
        let newScript = document.createElement('script');
        let attributes = Array.from(script.attributes);
        attributes.forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.innerHTML = script.innerHTML;
        script.parentNode.replaceChild(newScript, script);
    });
}



let previousCssLink = null;

async function includeCss(element) {
    // Alle vorhandenen CSS-Dateien entfernen
    if (previousCssLink) {
        document.head.removeChild(previousCssLink);
    }

    // Neue CSS-Datei hinzufügen
    let link = element.querySelector('link[rel="stylesheet"]');
    if (link) {
        let newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = link.href;
        document.head.appendChild(newLink);
        previousCssLink = newLink;
    }
} 



/* async function includeCss(element) {
    let links = element.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
        let newLink = document.createElement('link');
        newLink.rel = 'stylesheet';
        newLink.href = link.href;
        document.head.appendChild(newLink);
    });
} */