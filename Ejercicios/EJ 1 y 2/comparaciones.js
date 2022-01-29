/**
 * 1. Programa que pida dos números y que nos diga cual es el mayor, el menor y si son iguales
 * 
 * 2. Al programa: Si los números no son un número o son menores o iguales a cero que los vuelva a pedir
 */

/**
 * Botón quu realiza las operaciones
 */
var boton = document.getElementById('boton');

/**
 * Asignar escuchador de eventos al botón
 */
boton.addEventListener('click', function(){
    var numA = document.getElementById('numero1').value;
    var numB = document.getElementById('numero2').value;

    if(!isNaN(numA) && !isNaN(numB)){
        numA = parseInt(numA);
        numB = parseInt(numB);
        
        if(numA <= 0 || numB <= 0){
            alerta();
            limpiarValores();
        } else{
            //comparaciones(numA, numB)
            generarComponente(comparaciones(numA, numB));    

            limpiarValores();
        }
    } else{
        alerta();
        limpiarValores();
    }
    
});

/**
 * Función para lanzar alerta en caso de escribir datos inválidos
 */
function alerta(){
    alert('Ingrese otravez los datos, no se permiten letras ni números negativos o iguales a cero(0)');
}

/**
 * Función para limpiar los valores de los input
 */
function limpiarValores(){
    var numA = document.getElementById('numero1');
    var numB = document.getElementById('numero2');

    numA.value = '';
    numB.value = '';
}

/**
 * Método para realizar las comparaciones entre ambos números
 * @param {Primer número} a 
 * @param {Segundo número} b 
 */
function comparaciones(a, b){
    var texto;
    if(a === b){
        texto = "Datos iguales";
    } else if(a > b){
        texto = 'Mayor: ' + a + ' ------ ' + 'Menor: ' + b + ' ------ ' + 'No son iguales';
    } else if(b > a){
        texto = 'Mayor: ' + b + ' ------ ' + 'Menor: ' + a + ' ------ ' + 'No son iguales';
    }

    //alert(texto);
    return texto;
}

/**
 * Método para agregar texto a componente de tipo P
 * @param {Texto} texto 
 */
function generarComponente(texto){
    var contenedor = document.getElementById('divResultados');
    var parrafo = document.createElement('p');
    var contenido = document.createTextNode(texto);

    parrafo.appendChild(contenido);
    contenedor.appendChild(parrafo);
}