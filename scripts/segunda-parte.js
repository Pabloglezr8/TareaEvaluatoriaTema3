// Función para crear botones y manipular ventanas
function newWindow() {
    // Crear un botón para abrir una nueva ventana
    const windowButton = document.createElement('button');
    windowButton.innerHTML = "Abrir ventana";
    windowButton.id = "window";
    document.body.appendChild(windowButton);

    // Crear un botón para reiniciar la ventana actual
    const restartButton = document.createElement('button');
    restartButton.innerHTML = "Reiniciar";
    restartButton.id = "restart";
    document.body.appendChild(restartButton);
}

// Llamar a la función para crear botones y manipular ventanas
newWindow();

// Obtener referencia al botón de abrir ventana
const ventana = document.getElementById("window");

// Agregar un evento al botón de abrir ventana
ventana.addEventListener("click", () => {
    // Configuración de la nueva ventana (sin opción de redimensionamiento)
    const nuevaVentana = "resizable=no";

    // Abrir una nueva ventana con la URL especificada
    window.open("http://127.0.0.1:5500/templates/nueva-ventana.html", "_blank", nuevaVentana);
});

// Obtener referencia al botón de reiniciar
const restart = document.getElementById("restart");

// Agregar un evento al botón de reiniciar
restart.addEventListener("click", () => {
    // Redirigir a la URL especificada para reiniciar la ventana actual
    window.location.href = "http://127.0.0.1:5500/index.html";
});
