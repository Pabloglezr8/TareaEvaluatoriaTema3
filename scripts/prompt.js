//Autor: Pablo Gonzalez
//https://github.com/Pabloglezr8/TareaEvaluatoriaTema3.git

// Declaraciones de variables que almacenarán la información del usuario
export let name;
export let surnames;
export let date;

// Función para ingresar y validar el nombre del usuario
function nameInput() {
    // Solicitar al usuario que introduzca su nombre
    name = prompt("Por favor, introduzca su nombre");

    // Validar la entrada del nombre
    if (name === "") {
        // Alerta si el campo está vacío y llamada recursiva
        alert("El campo no puede estar vacío");
        nameInput();
    } else if (!/^[\p{L}\s]+$/u.test(name)) {
        // Alerta si el nombre contiene caracteres no válidos y llamada recursiva
        alert("Nombre inválido");
        nameInput();
    }
}

// Función para ingresar y validar los apellidos del usuario
function surnamesInput() {
    // Solicitar al usuario que introduzca sus apellidos
    surnames = prompt("Por favor, introduzca sus apellidos");

    // Validar la entrada de los apellidos
    if (surnames === "") {
        // Alerta si el campo está vacío y llamada recursiva
        alert("El campo no puede estar vacío");
        surnamesInput();
    } else if (!/^[\p{L}\s]+$/u.test(surnames)) {
        // Alerta si los apellidos contienen caracteres no válidos y llamada recursiva
        alert("Apellidos inválidos");
        surnamesInput();
    }
}

// Función para ingresar y validar la fecha de nacimiento del usuario
function dateInput() {
    // Solicitar al usuario que introduzca su fecha de nacimiento
    let dateStr = prompt("Por favor, introduzca su fecha de nacimiento dd/mm/aaaa");

    // Validar la entrada de la fecha
    if (!dateStr) {
        // Alerta si el campo está vacío y llamada recursiva
        alert("El campo no puede estar vacío");
        dateInput();
    } else if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateStr)) {
        // Alerta si el formato de la fecha es incorrecto y llamada recursiva
        alert("Formato incorrecto");
        dateInput();
    } else {
        // Convertir la cadena de fecha a un objeto Date
        let parts = dateStr.split('/');
        let day = parseInt(parts[0]);
        let month = parseInt(parts[1]);
        let year = parseInt(parts[2]);

        // Verificar si alguno de los componentes de la fecha es inválido
        if (isNaN(day) || isNaN(month) || isNaN(year) || day === 0 || month === 0 || year === 0) {
            // Alerta si la fecha contiene valores inválidos y llamada recursiva
            alert("La fecha no es válida");
            dateInput();
        } else {
            // Crear un objeto Date si la fecha es válida
            date = new Date(year, month - 1, day);

            // Verificar si la fecha es válida
            if (isNaN(date.getTime())) {
                // Alerta si la fecha no es válida y llamada recursiva
                alert("Fecha no válida");
                dateInput();
            }
        }
    }
}

// Llamadas iniciales a las funciones para ingresar datos
nameInput();
surnamesInput();
dateInput();
