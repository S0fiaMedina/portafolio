/* --> Cargar json <-- */
let projectData = {};


document.addEventListener('DOMContentLoaded', () => {
    loadProjectData();
});





   
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

console.log("OBJETO -> : " )
/*
-------------------------
MOSTRAR PROYECTOS 
-------------------------
*/

// Función para cargar el JSON
async function loadProjectData() {
    try {
        const response = await fetch('../storage/project-data.json');
        if (!response.ok) {
            throw new Error('Error al cargar el JSON');
        }
        projectData = await response.json(); 
        render(projectData.backend, '#back-projects');
        render(projectData.frontend, '#front-projects');

    } catch (error) {
        console.error('Error:', error);
    }
}

function render(projectsToRender, container){
    const projectsContainer = document.querySelector(container);

// Itera sobre cada proyecto en "backend"
projectsToRender.forEach(project => {
    // Crea el contenedor principal del proyecto
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    // Crea el contenedor de iconos
    const skillsContainer = document.createElement('div');
    skillsContainer.className = 'skills__container';

    // Añade cada icono al contenedor de iconos
    project.icons.forEach(icon => {
        const iconDiv = document.createElement('div');
        iconDiv.className = 'skill-icon-container spring';
        iconDiv.style.backgroundColor = icon.colorBg;  // Asigna el color de fondo

        const img = document.createElement('img');
        img.src = icon.path;
        img.alt = 'icono';

        iconDiv.appendChild(img);
        skillsContainer.appendChild(iconDiv);
    });

    // Crea el contenedor de información del proyecto
    const projectInfoDiv = document.createElement('div');
    projectInfoDiv.className = 'project__info flex-column';

    const projectTitle = document.createElement('h3');
    projectTitle.className = 'project__title small-title';
    projectTitle.textContent = project.title;

    const projectDesc = document.createElement('p');
    projectDesc.className = 'project__desc medium-text';
    projectDesc.textContent = project.description;

    const projectButton = document.createElement('button');
    projectButton.className = 'project__details';

    const githubIcon = document.createElement('i');
    githubIcon.className = 'bx bxl-github';

    const projectLink = document.createElement('a');
    projectLink.className = 'medium-text';
    projectLink.href = project.link;
    projectLink.textContent = 'Ver repositorio en GitHub';

    // Arma la estructura del botón
    projectButton.appendChild(githubIcon);
    projectButton.appendChild(projectLink);

    // Arma la estructura del contenedor de información del proyecto
    projectInfoDiv.appendChild(projectTitle);
    projectInfoDiv.appendChild(projectDesc);
    projectInfoDiv.appendChild(projectButton);

    // Inserta el contenedor de iconos y el contenedor de información dentro del contenedor principal del proyecto
    projectDiv.appendChild(skillsContainer);
    projectDiv.appendChild(projectInfoDiv);

    // Finalmente, añade el proyecto al contenedor principal en el DOM
    projectsContainer.appendChild(projectDiv);
});
}
