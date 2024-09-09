//bucles estructura for//
//la estructura for permite repetir condiciones(bucles)//
//for(inicializacion;condicion;actualizacion){}
//mientras la condicion se siga cumpliendo ,repite la ejecucucion de intrucciones definidas dentro del for
//ademas despues de cada repeticion actualiza el valor de las variables que se usan en el bucle
 const mensaje = "hola, estoy dentro de un bucle "

 for(let i=0; i<5; i++){
    alert(mensaje)
 }
 //etructura while
 //permite crear bucles que se ejecuten ninguna o mas veces dependiendo de la condicion indicada
 //while(condicion){}
 //"mientras se cumpla la condicion repite de manera indefinida las instrucciones definidas en el bucle"
 //si la condicion no se cumple ni una vez, no se ejecuta.
 //si la condidion se cumple se ejecuta indefinidamente hasta que la condicion se deje de cumplir 
 // las variables que usa se van modificando hasta que se deje de cumplir la condidion

 let x = 1;
 while(x<=100){
    document.write('${x} <br>');
    x++;//o x += 1; o x = x + 1;
 }
 //funciones
 

 function suma_y_muestra(){
      resultado = numero + numero2
      alert("el resultado es ${resultado}")
}     
let resultado

let numero = 3;
let numero2 = 2;

suma_y_muestra()

numero = 10
numero2 = 7

suma_y_muestra()

numero = 5
numero2 = 8
//funciones con parametros
function saludar(nombre){
   alert("hola" + nombre);
}
saludar("gabriela")
saludar("pablo")
// las funciones también puede devolver un valor o resultado mediante el
//uso de la palabra clave return. Dicho valor puede ser almacenado en una variable o
//utilizado en alguna de las estructuras de control o bucles que vimos previamente.

function numero_al_cubo(numero){
   return numero * numero * numero;
}
var tres_al_cubo = numero_al_cubo(3);
alert(tres_al_cubo);
//por
//ejemplo para seleccionar todos los elementos (p) del párrafo en un documento
//donde la clase CSS sea tanto warning or note, podes hacer lo siguiente:

const especial = document.querySelectorAll("p.warning, p.note")
//tambien se puede usar para etiquetas id

const destacados = document.querySelector("#principal, #bienvenidos, #notas")

//document.getElementById()
//Este método permite seleccionar una elemento del DOM usando el atributo id del
//mismo.

const mensaje = document.getElementById("mensaje")

//document.getElementsByClassName()
//Este método devuelve un array o lista de elementos que contengan la clase que se
//especifique como parámetro.
const items = document.getElementsByClassName("item")

//document.getElementsByTagName()
//Este método devuelve un array o lista de elementos cuya etiqueta html sea la que
//se especifique como parámetro
const parrafo = document.getElementsByTagName("p")