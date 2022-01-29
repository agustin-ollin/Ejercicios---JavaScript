/**
 * 8. Tabla de multiplicar de un número introducido por pantalla.
 */

// Obtener botón
var boton = document.getElementById('boton');

// añadir escuchador de eventos
boton.addEventListener('click', function(){
    obtenerTexto();
});

/**
 * Función para obtener el valor del número y generar la tabla de multiplicar en una cadena de texto
 */
function obtenerTexto(){
    var numero = parseInt(document.getElementById('numero').value);
    var texto = '';

    for (let i = 1; i <= 10; i++) {
        texto = (numero + ' x ' + i + ' = ' + (i * numero));
        generarElementos(texto);
    }
}

/**
 * Función para generar elemento en el DOM
 * @param {cadena de texto} texto 
 */
function generarElementos(texto){
    var parrafo = document.createElement('p');
    var textoParrafo = document.createTextNode(texto);

    parrafo.appendChild(textoParrafo);

    var contenedor = document.getElementById('contenedor');
    contenedor.appendChild(parrafo);
}
