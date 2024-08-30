/* --> Cargar json <-- */
let projectData = {};


document.addEventListener('DOMContentLoaded', () => {
    loadProjectData();
});

// Función para cargar el JSON
async function loadProjectData() {
    try {
        const response = await fetch('../storage/data-icon.json');
        if (!response.ok) {
            throw new Error('Error al cargar el JSON');
        }
        projectData = await response.json(); 
    } catch (error) {
        console.error('Error:', error);
    }
}





// Selecciona ambos divs
const backButton = document.getElementById('back-title');
const frontButton = document.getElementById('front-title');
const backendDiv = document.getElementById('back-projects');
const frontendDiv = document.getElementById('front-projects');

// Añade eventos de clic para cada div
backButton.addEventListener('click', () => {
    toggleClass(backendDiv, frontendDiv, backButton, frontButton);
});

frontButton.addEventListener('click', () => {
    toggleClass(frontendDiv, backendDiv, frontButton, backButton);
});

// Función que alterna la clase visible
function toggleClass(activeDiv, inactiveDiv, activeButton, inactiveButton) {
    if (activeButton.classList.contains('selected')) {
        // Si el botón clicado ya está seleccionado, lo deseleccionamos y ocultamos el contenido
        activeButton.classList.remove('selected');
        activeDiv.classList.remove('visible');
        activeDiv.classList.add('hidden');
    } else {
        // Quita la clase 'selected' del otro botón
        inactiveButton.classList.remove('selected');
        inactiveDiv.classList.remove('visible');
        inactiveDiv.classList.add('hidden');

        // Agrega la clase 'selected' al botón activo
        activeButton.classList.add('selected');

        // Muestra el contenido del div activo
        activeDiv.classList.remove('hidden');
        activeDiv.classList.add('visible');
    }

}


// mostrar proyectos