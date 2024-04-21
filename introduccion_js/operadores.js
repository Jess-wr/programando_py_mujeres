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






//DURANTE CLASE PRESENCIAL
//condicionales
let aprobado = 2;
let miNota = 5;
console.log("mi nota", miNota > aprobado)

if (miNota > aprobado){
    console.log("aprobaste")
}else{
    console.log("no aprobaste")
}


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

