/**
 * 9. Calculadora:
 * - Pedir dos números por pantalla
 * - Si metemos uno mal que nos lo vuelva a pedir
 * - En el cuerpo de la página, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras
 * - Refactoriza el código para encapsularlo todo en funciones reutilizables
 */

var boton = document.getElementById('boton');

boton.addEventListener('click', function(){
    agregarComponentes();
});

function agregarComponentes(){
    var a = parseInt((document.getElementById('numeroA')).value);
    var b = parseInt((document.getElementById('numeroB')).value);

    var texto = obtenerTexto(a, b);

    var parrafo = document.createElement('h3');
    var contenidoParrafo = document.createTextNode(texto);
    
    parrafo.appendChild(contenidoParrafo);
    
    var contenedor = document.getElementById('contenedor');

    contenedor.appendChild(parrafo);
    
    alerta(texto);

    escribirEnConsola(texto);
}

function alerta(texto){
    alert(texto);
}

function escribirEnConsola(texto){
    console.log(texto);
}

function obtenerTexto(a, b){
    var texto = ('Suma = ' + sumar(a, b));
    texto += ('\nResta = ' + restar(a, b));
    texto += ('\nMultiplicación = ' + multiplicar(a, b));
    texto += ('\nDivisión = ' + dividir(a, b));

    return texto;
}

function sumar(a, b){
    return a + b;
}

function restar(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

function dividir(a, b){
    return a / b;
}