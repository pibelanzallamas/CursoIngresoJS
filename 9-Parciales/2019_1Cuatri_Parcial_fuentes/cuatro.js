function mostrar()
{
    let numero1;
    let numero2;
    let resultado;

    resultado = 0;
    numero1 = 0;
    numero2 = 0;

    numero1 = prompt("Ingrese un numero");
    numero2 = prompt("Ingrese otro numero");

    if(numero1 == numero2){
        resultado = numero1 + numero2;
    }
    if(numero1 > numero2){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1 - numero2;
        if(resultado > 10){
            alert("La resta es " + resultado + " y supero el 10");
        }
    }
    if(numero1 < numero2){
        numero1 = parseInt(numero1);
        numero2 = parseInt(numero2);
        resultado = numero1 + numero2;
    }

    alert("El resultado es " + resultado);
}
