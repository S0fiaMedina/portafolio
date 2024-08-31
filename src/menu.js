const nav = document.querySelector('nav');
const icon = nav.querySelector('#nav__icon');
const linksContainer = nav.querySelector('#links__container');
const links = linksContainer.querySelectorAll('a');


/* Función para ocultar el menú cuando se hace scroll */
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        hideMenu();
        icon.classList.remove('hidden');
        icon.classList.add('icon-move');
    } else {
        showMenu();
        icon.classList.add('hidden');
        icon.classList.remove('icon-move');
    }
});

/* Función para mostrar el menú */
icon.addEventListener('click', () => {
    toggleMenu();
});

/* Ocultar enlaces del menú */
function hideMenu() {
    linksContainer.classList.remove('vertical');
    links.forEach(link => {
        link.classList.add('hidden-right');
    });
}

/* Mostrar enlaces del menú */
function showMenu() {
    links.forEach(link => {
        link.classList.remove('hidden-right');
    });
}

/* Alternar visibilidad del menú */
function toggleMenu() {
    links.forEach(link => {
        link.classList.toggle('hidden-right');
    });
    linksContainer.classList.toggle("vertical");
}




