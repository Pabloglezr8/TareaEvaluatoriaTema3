// Importar las variables 'name' y 'surnames' del archivo 'prompt.js'
import { name, surnames } from "./prompt.js";

// Función para saludar al usuario
function hello() {
    // Crear un mensaje de saludo y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Buenos días <strong>${name}</strong>`;
    document.body.appendChild(message);
}

// Llamar a la función para saludar al usuario
hello();

// Función para encontrar la posición de la primera letra 'A' en el nombre completo
function primeraA() {
    // Inicializar un contador
    let contador = 0;

    // Convertir el nombre completo a minúsculas
    const fullName = (name + " " + surnames).toLowerCase();

    // Iterar sobre cada carácter del nombre completo
    for (let i = 0; i < fullName.length; i++) {
        const char = fullName[i];
        contador++;

        // Encontrar la primera letra 'A' y mostrar su posición
        if (char === 'a') {
            const message = document.createElement('p');
            message.innerHTML = `<strong>La primera letra 'A'</strong> de tu nombre está en la posición: <strong>${contador}</strong>`;
            document.body.appendChild(message);
            break;
        }
    }

    // Si no se encontró ninguna letra 'A'
    if (contador === fullName.length) {
        const message = document.createElement('p');
        message.innerHTML = "Tu nombre no contiene ninguna letra 'A'";
        document.body.appendChild(message);
    }
}

// Llamar a la función para encontrar la primera letra 'A'
primeraA();

// Función para encontrar la posición de la última letra 'A' en el nombre completo
function ultimaA() {
    // Convertir el nombre completo a minúsculas
    const fullName = (name + " " + surnames).toLowerCase();

    // Encontrar la posición de la última letra 'A' y mostrar su posición
    const lastA = fullName.lastIndexOf('a') + 1;

    // Si no se encontró ninguna letra 'A'
    if (lastA === 0) {
        const message = document.createElement('p');
        message.innerHTML = "Tu nombre no contiene ninguna letra 'A'";
        document.body.appendChild(message);
    } else {
        const message = document.createElement('p');
        message.innerHTML = `<strong>La última letra 'A'</strong> de tu nombre está en la posición: <strong>${lastA}</strong>`;
        document.body.appendChild(message);
    }
}

// Llamar a la función para encontrar la última letra 'A'
ultimaA();

// Función para mostrar el nombre menos las tres primeras letras
function threeChar() {
    // Obtener el nombre completo y eliminar las tres primeras letras
    const fullName = name + " " + surnames;
    const noName = fullName.slice(3);

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Tu nombre <strong>menos las tres primeras letras</strong> sería: <strong>${noName}</strong>`;
    document.body.appendChild(message);
}

// Llamar a la función para mostrar el nombre menos las tres primeras letras
threeChar();

// Función para mostrar el nombre completo en mayúsculas
function mayus() {
    // Obtener el nombre completo y convertirlo a mayúsculas
    const fullName = name + " " + surnames;
    const mayusName = fullName.toUpperCase();

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Tu nombre todo en <strong>mayúsculas</strong> sería: <strong>${mayusName}</strong>`;
    document.body.appendChild(message);
}

// Llamar a la función para mostrar el nombre completo en mayúsculas
mayus();
