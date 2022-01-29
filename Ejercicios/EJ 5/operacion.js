/**
 * 5. Hacer un programa que muestre todos los números impares entre dos números introducidos por el usuario.
 */

/**
 * Referencia al boton a utilizar
 */
var boton = document.getElementById('boton');

/**
 * Añadir evento al botón
 */
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

    for (var a = i + 1,b = j; a < b; a++) {
        if((a % 2) != 0){
            texto += (' ' + a); 
        }
    }

    agregarDOM(i + ' ' + texto + ' ' + j);
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