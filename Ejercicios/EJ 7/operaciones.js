/**
 * 7. Programa que nos diga si un número es par o impar:
 * 7.1 Ventana prompt
 * 7.2 Si no es válido que nos pida de nuevo el número
 */

 // Creación de variables
 var numero;
 var ciclo = true;
 
 // Ciclo para pedir el número
 do{
     numero = parseInt(prompt('Ingrese un número positivo y  entero: ', ''));
     
     if(numero > 0){
         ciclo = false;
     }
 } while(ciclo);


 // Creación de elementos para agregar a la página
 var parrafo = document.createElement('h2');

 var texto = ((numero % 2) == 0) ? 'El número es par': 'El número es impar';

 var textoParrafo = document.createTextNode(texto);

 parrafo.appendChild(textoParrafo);

 var contenedor = document.getElementById('contenedor');
 contenedor.appendChild(parrafo);