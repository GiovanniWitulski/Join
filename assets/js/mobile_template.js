        const menuButton = document.querySelector('.sm-btn');
        const sideMenu = document.querySelector('.side-menu');

        menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
        });

        document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
            sideMenu.classList.remove('open'); 
        }
        });