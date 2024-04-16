console.log("Hola Mundo")
let intentos = 6;
let palabra = "APPLE";


//Esto que agregamos es un “Event Listener”, que es un mecanismo que permite detectar cuando ocurre un evento en una página web. Cuando se detecta un evento, 
//se llama a una función que se encarga de manejarlo.
window.addEventListener('load', init)
function init(){
    console.log('Esto se ejecuta solo cuando se carga la pagina web')
}


//Actividad - Evento 'click'
//Primero necesitamos encontrar el elemento en cuestión:
const button = document.getElementById("guess-button");
//Ahora, podemos agregar el evento a este elemento:
button.addEventListener("click", intentar);

//En este caso, estamos agregando el event listener al botón. usando su ID “guess-button”. Cuando el botón es presionado, la función “intentar” se ejecuta.


const input = document.getElementById("guess-input");
const valor = input.value;

function intentar(){
    const INTENTO = leerIntento();
    console.log(INTENTO)
}

function leerIntento(){
    let intento = document.getElementById("guess-input");
    intento = intento.value;
    intento = intento.toUpperCase(); 
    return intento;
}



//INTENTOS
function intentar(){
    const INTENTO = leerIntento();
    if (INTENTO === palabra ) {
        terminar("<h1>GANASTE!😀</h1>")
        return
    }
    for (let i in palabra){
        if (INTENTO[i]===palabra[i]){
            console.log(INTENTO[i], "VERDE")
        } else if( palabra.includes(INTENTO[i]) ) {
            console.log(INTENTO[i], "AMARILLO")
        } else {
            console.log(INTENTO[i], "GRIS")
        }
    }
		intentos--
    if (intentos==0){
        terminar("<h1>PERDISTE!😖</h1>")
    }
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    BOTON.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

















//DURANTE CLASES
//condicionales
let aprobado = 2;
let miNota = 5;
console.log("mi nota", miNota > aprobado)

if (miNota > aprobado){
    console.log("aprobaste")
}else{
    console.log("no aprobaste")
}
//DESAFIO: comparar tres numeros y determinar cual de ellos es el mayor.
//n1, n2, n3... si n1 > n2 > n3
let n1 = 10;
let n2 = 2;
let n3 = 3;
let mayor;
if (n1 > n2){
    mayor = n1
}else{
    mayor = n2
}
if (mayor > n3){
    mayor == mayor
}else {mayor = n3
}
console.log("el numero mayor es", mayor)

//FUNCIONES
function Suma(){
    let n1 = 5
    let n2 = 10
    let resultado
    resultado = n1 + n2
    console.log("la suma de", n1, "mas", n2, "es igual a", resultado)
}

Suma()
console.log("------------")

Suma(n1 = 7)
console.log("------------")
console.log("------------")

Suma()
console.log("------------")
console.log("------------")
console.log("------------")

//FUNCION  que imprima el mayor de tres numeros

function numeroMayor(n1 = 10, n2 = 2, n3 = 3){
    let mayor
    if (n1 > n2){
        mayor = n1
    }else{
        mayor = n2
    }
    if (mayor > n3){
        mayor == mayor
    }else {mayor = n3
    }
    console.log("el numero mayor es", mayor)
    return mayor
}

numeroMayor()
numeroMayor(n2 = 20)
numeroMayor(n3 = 30)

let suma = numeroMayor(1, 2, 3)
console.log("imprimo suma", suma + 5)