/**
 * 3. Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado.
 */

// Variables a utilizar
var suma = 0;
var media = 0;
var cantidadElementos = 0;
var bandera = true;

//----------------------------------------------------
//              Ejecución del programa
//----------------------------------------------------
ejecutar();

//----------------------------------------------------
//            Definición de las funciones
//----------------------------------------------------

/**
 * Ejecuta todas funciones del script
 */
function ejecutar(){
    do{
        var numero = ingresarNumero();
        
        if(numero < 0){
            bandera = false;
        } else{
            calcularSuma(numero);
            cantidadElementos += 1;
        }
        
    } while(bandera);

    calcularMedia(suma, cantidadElementos);
    mostrarValoresEnPantalla();
}

/**
 * Pide atravez de un prompt que se ingrese un número, en caso contrario lo volverá a solicitar
 * @returns Retorna un número de tipo Int
 */
function ingresarNumero(){
    var numero;
    var ciclo = true;
    do{
        numero = prompt('Ingrese un número positivo: ', 'Número');
        if(!isNaN(numero)){
            ciclo = false
        }
    } while(ciclo);

    return parseInt(numero);
}

/**
 * Realiza el cálculo de la media de los números ingresados
 * @param {suma total} sum 
 * @param {cantidad de elementos ingresados} cantidad 
 */
function calcularMedia(sum, cantidad){
    media = sum / cantidad;
}

/**
 * Realiza la suma de un número a la variable suma
 * @param {número que se agregará} numero 
 */
function calcularSuma(numero){
    suma += numero;
}

/**
 * Realiza la modificación de los elementos de la página web mostrando en los input de suma y media sus respectivos valores previamente calculados
 */
function mostrarValoresEnPantalla(){
    var cajaSuma = document.getElementById('suma');
    var cajaMedia = document.getElementById('media');

    alert('Operaciones Realizadas con Éxito');

    cajaSuma.value = '' + suma;
    cajaMedia.value = '' + media;
}