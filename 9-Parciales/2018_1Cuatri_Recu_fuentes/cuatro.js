function mostrar()
{
    let numero;
    let numero2;
    let resultado;

    numero = 0;
    numero2 = 0;

    numero = prompt("Ingrese numero 1");
    numero2 = prompt("Ingrese numero 2");

    if(numero == numero2){
        resultado = numero + numero2;
        alert("El resultado es " + resultado);
    }
    if(numero > numero2){
        numero = parseInt(numero);
        numero2 = parseInt(numero2);
        resultado = numero / numero2;
        alert("El resultado es " + resultado);
    }
    if(numero < numero2){
        numero = parseInt(numero);
        numero2 = parseInt(numero2);
        resultado = numero + numero2;
        if(resultado < 50){
            alert("La suma es " + resultado + " y es menor a 50");
        }else{
            alert("La suma es " + resultado);
        }
    }
}
