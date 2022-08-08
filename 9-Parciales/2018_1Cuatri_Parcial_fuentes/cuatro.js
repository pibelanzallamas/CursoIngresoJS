/*
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10"
*/
function mostrar()
{
    let numero1;
    let numero2;
    let resultado;

    numero1 = prompt("ingrese un numero");
    numero2 = prompt("ingrese otro numero");

    if(numero1 == numero2){
        resultado = numero1 + numero2;
    }

    if(numero1 > numero2){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);

        resultado = numero1 - numero2;
    }

    if(numero1 < numero2){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1 + numero2;
    }

    if(resultado > 10){
        alert("el resultado es " + resultado + " y supero el 10");
    }
    else{
        alert("el resultado es " + resultado);
    }

}
