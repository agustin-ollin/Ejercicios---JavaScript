/**
 * 4. Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.
 */

// Referenciar al elemento boton
var boton = document.getElementById('boton');

// Añadir evento al boton
boton.addEventListener('click', function(){
    operacion();
});

/**
 * Función para obtener los valores
 */
function operacion(){
    var numA = parseInt((document.getElementById('numeroA')).value);
    var numB = parseInt((document.getElementById('numeroB')).value);

    comparar(numA, numB);
    alert('Operaciones realizadas con éxito');
}

/**
 * Función para comparar ambos números y definir el orden en que se generarán los valores intermedios
 * @param {Primer número introducido} numA 
 * @param {Segundo número introducido} numB 
 */
function comparar(numA, numB){
    var i = 0, j = 0;
    var texto = '';

    if(numA > numB){
        i = numB;
        j = numA;
    } else{
        i = numA;
        j = numB;
    }

    for (i; i <= j; i++) {
        texto += (' ' + i); 
    }

    agregarDOM(texto);
}

/**
 * Método para agregar un párrafo al DOM
 * @param {Texto para agregar a la ventana} texto 
 */
function agregarDOM(texto){
    var contenedor = document.getElementById('contenedorResultados');

    var parrafo = document.createElement('p');
    var datos = document.createTextNode(texto);

    parrafo.appendChild(datos);

    contenedor.appendChild(parrafo);
}