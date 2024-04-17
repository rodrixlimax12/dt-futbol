/*
Siguen su camino hacia la sala administrativa y son recibidos con mucha alegría.
Les preguntan si han conocido algún jugador hasta el momento y recuerdan a quien se encontraron en la entrada.

El secretario les comenta que es el jugador más joven que tiene la selección en plantilla (después del golero suplente).
Abre el cajón y busca rápidamente los datos del equipo y señala una fecha: 16/07/2003

Rápidamente intentan sacar la cuenta de cuantos años puede tener.

Escriba un programa que:
- declare una función llamada "edad"
  - que acepte una fecha de nacimiento en formato string
  - y que devuelva la cantidad de años cumplidos
- imprima en consola un mensaje en el formato: {nombre} "{apodo}" {apellido} (edad).

Tip: consulten los métodos de la clase Date
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
*/
function calcularEdad(fechaNacimiento) {
  var fechaNac = new Date(fechaNacimiento);
  var fechaActual = new Date();
  var diferencia = fechaActual - fechaNac;
  var edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
  return edad;
}
var nombre = "Lucas";
var apellido = "Gonzales";
var apodo = "Luck";
var fechaNacimiento = "2003-07-16";
var edadJugador = calcularEdad(fechaNacimiento);
console.log(nombre + ' "' + apodo + '" ' + apellido + ' (' + edadJugador + ' años)');