//opcion de ejercicio 1


const distancia = ["1000", "10000", "30000", "100000"]

if (distancia >= 0) {
  return "a pie"
} else if (distancia >= 1000) {
  return "bicicleta"
} else if (distancia >= 10000) {
  return "colectivo"
} else if (distancia >= 30000) {
  return "auto"
} else if (distancia >= 100000) {
  return "avion"
}


//opcion de ejercicio 2



const metros = 25000;
let transporte = "";

if (metros > 0 && metros <= 1000) {
  transporte = "pie";
} else if (metros > 1000 && metros <= 10000) {
  transporte = "bicicleta";
} else if (metros > 10000 && metros <= 30000) {
  transporte = "colectivo";
} else if (metros > 30000 && metros <= 100000) {
  transporte = "auto";
} else if (metros > 100000) {
  transporte = "avion";
}

console.log('para ${metros} metros recomendamos ir en ${transporte}');



// segundo ejercicio




const numeros = [12, 20, 3, 40, 27]

let mayor = 0;

for (let i = 0; i < numeros.length; i++); {
  if (numeros[i] > mayor) {
    mayor = numeros[i];
  }
}

console.log("el mayor de" + numeros + "es" + mayor);



//ejercicios js 2


const alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];
const aprobados = alumnos.filter(function (alumnos){
   return alumnos.nota >= 7;
});
console.log(aprobados);
