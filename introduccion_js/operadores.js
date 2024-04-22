//DESAFIO: comparar tres numeros y determinar cual de ellos es el mayor.
//n1, n2, n3... si n1 > n2 > n3
let n1 = 10;
let n2 = 2;
let n3 = 3;
let mayor;
if (n1 > n2){
    mayor = n1;
}else{
    mayor = n2;
}
if (mayor > n3){
    mayor == mayor;
}else {mayor = n3
}
console.log("el numero mayor es", mayor);




//FUNCION  que imprima el mayor de tres numeros

function numeroMayor(n1 = 10, n2 = 2, n3 = 3){
    let mayor
    if (n1 > n2){
        mayor = n1;
    }else{
        mayor = n2;
    }
    if (mayor > n3){
        mayor == mayor;
    }else {mayor = n3
    }
    console.log("el numero mayor es", mayor);
    return mayor;
}

numeroMayor();
numeroMayor(n2 = 20);
numeroMayor(n3 = 30);

let suma = numeroMayor(1, 2, 3);
console.log("imprimo suma", suma + 5);



console.log("El numero mayor es", numeroMayor(1, 2, 3));