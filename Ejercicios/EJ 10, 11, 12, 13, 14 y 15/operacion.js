/**
 * 10. Programa que pida 6 números por pantalla y los meta en un array.
 * 11. Mostrar el array anterior entero (todos sus elementos) en el cuerpo de la página y en la consola(usando funciones).
 * 12. Ordenar el array anterior y mostrarlo.
 * 13. Invertir el orden del array anterior y mostrarlo.
 * 14. Mostrar cuantos elementos tiene el array anterior.
 * 15. Búsqueda de un valor introducido por el usuario, que nos diga si lo encuentra en el array o no.
 */

/**
 * Arreglo donde se almacenarán los números
 */
var arreglo = [];

/**
 * Botón para realizar la búsqueda de un número
 */
var boton = document.getElementById('boton');


//------------------------------------------------
//            Ejecución del Programa
//------------------------------------------------
ejecutarPrograma();

boton.addEventListener('click', function(){
    resultadosBusqueda();
});


//------------------------------------------------
//                   Funciones
//------------------------------------------------

/**
 * Función para cargar los valores que serán ingresados al arreglo, además, realiza las operaciones de ordenamiento.
 */
function ejecutarPrograma(){
    pedirNumeros();

    var desordenado = generarTexto(arreglo);
    generarComponentes(desordenado, 'ordenDeEntrada');

    var ordenado = generarTexto(ordenAscendente());
    generarComponentes(ordenado, 'ordenAscendente');

    var ordenadoDescendente = generarTexto(ordenDescendente());
    generarComponentes(ordenadoDescendente, 'ordenDescendente');

    var longitudArreglo = calcularLongitud();
    generarComponentes(longitudArreglo, 'longitudDeArreglo');
}

/**
 * Función para agregar componentes a la página
 * @param {Cadena de texto para agregar a los componentes} text 
 * @param {ID del contenedor a generar los componentes} seccion 
 */
function generarComponentes(text, seccion){
    var textoContenido = text;

    mostrarEnConsola(textoContenido);

    var parrafo = document.createElement('h4');
    var texto = document.createTextNode(textoContenido);

    var contenedor = document.getElementById(seccion);

    parrafo.appendChild(texto);
    contenedor.appendChild(parrafo);
}

/**
 * Función para mostrar un mensaje en consola.
 * @param {Cadena de texto} texto 
 */
function mostrarEnConsola(texto){
console.log(texto);
}

/**
 * Registra el número a buscar en el arreglo y genera el mensaje para mostrar
 */
function resultadosBusqueda(){
    var numero = parseInt((document.getElementById('numero')).value);

    var busqueda = buscarValor(numero);
    var texto = (busqueda) ? 'Si se encuentra en el arreglo': 'No se encuentra en el arreglo';
    generarComponentes(texto, 'resultado');
}

/**
 * Función para buscar un número entero dentro del arreglo
 * @param {Número de tipo entero} numero 
 * @returns True en caso de encontrar al número en el arreglo y false en caso contrario
 */
function buscarValor(numero){
    for (let index = 0; index < arreglo.length; index++) {
        if(arreglo[index] == numero){
            return true;
        }
    }

    return false;
}

/**
 * Función para calcular la longitud de un array
 * @returns Longitud del array
 */
function calcularLongitud(){
    return arreglo.length;
}

/**
 * Función para ordenar un array de forma ascendente
 * @returns Array ordenado
 */
function ordenAscendente(){
    return arreglo.sort();
}

/**
 * Función para ordenar un array de forma descendente
 * @returns Array
 */
function ordenDescendente(){
    return arreglo.reverse();
}

/**
 * Función para generar una cadena de texto que se compone de todos los elementos de un array
 * @param {Array que se convertirá a cadena} arregloDatos 
 * @returns 
 */
function generarTexto(arregloDatos){
    var texto = arregloDatos.join('-');

    return texto;
}

/**
 * Función que a traves de un ciclo for realiza la inserción de datos
 */
function pedirNumeros(){
    for (let index = 0; index < 6; index++) {
        insertar(validarNumero(index));
    }
}

/**
 * Función para validar los números a pedir a traves de un prompt
 * @param {Índice que señala el orden de solicitud} i 
 * @returns Valor de tipo entero
 */
function validarNumero(i){
    var numero;
    var bandera = true;

    do{
        numero = prompt((i + 1) + '. Ingrese un número: ', '');
        if(!isNaN(numero)){
            bandera = false;
        }
    } while(bandera);

    return parseInt(numero);
}

/**
 * Función para insertar un número a un array
 * @param {Número de tipo entero} numero 
 */
function insertar(numero){
    arreglo.push(numero);
}