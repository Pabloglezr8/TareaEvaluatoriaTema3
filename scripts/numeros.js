// Importar la variable 'date' del archivo 'prompt.js'
import { date } from "./prompt.js";

// Función para calcular la edad del usuario
function calcuAge() {
    // Obtener la fecha actual
    const currentDate = new Date();

    // Calcular la diferencia de tiempo entre la fecha actual y la fecha de nacimiento
    const timeDiff = currentDate.getTime() - date.getTime();

    // Calcular la edad en años redondeando hacia abajo
    const age = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Su <strong>edad</strong> es: <strong>${age}</strong> años`;
    document.body.appendChild(message);

    // Devolver la edad
    return age;
}

// Llamar a la función para calcular la edad
calcuAge();

// Función para obtener la estación del año en la que nació el usuario
function getSeason() {
    // Obtener el mes, día y año de la fecha de nacimiento
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();

    // Determinar la estación del año
    let season;
    if ((month === 3 && day >= 20) || (month > 3 && month < 6) || (month === 6 && day < 21)) {
        season = "Primavera";
    } else if ((month === 6 && day >= 21) || (month > 6 && month < 9) || (month === 9 && day < 23)) {
        season = "Verano";
    } else if ((month === 9 && day >= 23) || (month > 9 && month < 12) || (month === 12 && day < 22)) {
        season = "Otoño";
    } else {
        season = "Invierno";
    }

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Naciste un feliz día de <strong>${season}</strong> del <strong>${year}</strong>`;
    document.body.appendChild(message);
}

// Llamar a la función para obtener la estación del año
getSeason();

// Función para calcular el coseno de 180 grados
function coseno() {
    // Convertir el ángulo a radianes
    const radsAngle = 180 * (Math.PI / 180);

    // Calcular el coseno
    const coseno180 = Math.cos(radsAngle);

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `El <strong>coseno de 180</strong> grados es: ${coseno180}`;
    document.body.appendChild(message);
}

// Llamar a la función para calcular el coseno de 180 grados
coseno();

// Función para encontrar el número más grande de cinco números aleatorios
function higherNum() {
    // Generar cinco números aleatorios y almacenarlos en un arreglo
    const randomNumbers = [];
    for (let i = 0; i < 5; i++) {
        const number = Math.floor(Math.random() * 101);
        randomNumbers.push(number);
    }

    // Encontrar el número más grande
    const higher = Math.max(...randomNumbers);

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `El número mayor de 
    <strong>(${randomNumbers[0]}, ${randomNumbers[1]}, ${randomNumbers[2]}, ${randomNumbers[3]}, ${randomNumbers[4]})</strong>
    es: ${higher}`;
    document.body.appendChild(message);
}

// Llamar a la función para encontrar el número más grande
higherNum();

// Función para generar un número aleatorio entre 0 y 100
function randomNum() {
    // Generar un número aleatorio y redondearlo
    const num = Math.random();
    const random = Math.floor(num * 101);

    // Crear un mensaje y agregarlo al cuerpo del documento
    const message = document.createElement('p');
    message.innerHTML = `Ejemplo número al azar entre 0 y 100: <strong>${random}</strong>`;
    document.body.appendChild(message);
}

// Llamar a la función para generar un número aleatorio
randomNum();
