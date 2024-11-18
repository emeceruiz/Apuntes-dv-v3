const buttonContainer = document.getElementById('buttonContainer');
const toggleLayoutButton = document.getElementById('toggleLayout');
const toggleThemeButton = document.getElementById('toggleTheme');
let isColumn = false;
let isDarkTheme = false;

buttonContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('button')) {
        const name = event.target.getAttribute('data-name');
        event.target.innerText = name;  // Muestra el nombre al hacer clic
        event.target.style.color = ''; // Restablece el color del texto
    }
});

toggleLayoutButton.addEventListener('click', () => {
    isColumn = !isColumn;
    buttonContainer.style.flexDirection = isColumn ? 'column' : 'row';
    
    // Cambiar los nombres de los botones
    const buttons = buttonContainer.querySelectorAll('.button');
    buttons.forEach((button) => {
        const currentName = button.innerText;
        const nameAlt = button.getAttribute('data-name-alt');
        button.innerText = (currentName === button.getAttribute('data-name')) ? nameAlt : button.getAttribute('data-name');
    });
});

toggleThemeButton.addEventListener('click', () => {
    isDarkTheme = !isDarkTheme;
    document.body.style.backgroundColor = isDarkTheme ? '#333' : '#f0f0f0';
    document.body.style.color = isDarkTheme ? '#f0f0f0' : '#333';
});