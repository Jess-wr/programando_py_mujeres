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

