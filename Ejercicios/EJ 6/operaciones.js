/**
 * 6. Muestre todos los números divisores de un número que mete en prompt.
 */

// Variables a utilizar
var numero;
var ciclo = true;
var texto = '';

// Ciclo para solicitar un número
do{
    numero = parseInt(prompt('Ingrese un número positivo y  entero: ', ''));
    
    if(numero > 0){
        ciclo = false;
    }
} while(ciclo);


var temporal = numero;

// Cálculo de los números divisores
for (temporal; temporal > 0; temporal--) {
    if((numero % temporal) == 0){
        texto += (' ' + temporal);
    }
}

// Creación de los componentes de la página
var num = document.createElement('h2');
var contenidoNum = document.createTextNode(numero);
num.appendChild(contenidoNum);

var parrafo = document.createElement('p');
var contenidoParrafo = document.createTextNode(texto);
parrafo.appendChild(contenidoParrafo);

var contenedor = document.getElementById('contenedor');

contenedor.appendChild(num);
contenedor.appendChild(parrafo);