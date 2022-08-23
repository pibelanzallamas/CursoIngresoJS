function mostrar()
{
    let respuesta;
    let letra;
    let numero;
    let pares;
    let impares;
    let ceros;
    let positivos;
    let contador;
    let promedio;
    let negativos;
    let bandera;
    let numMax;
    let numMin;
    let letMax;
    let letMin;

    respuesta = "si";
    numero = 0;
    pares = 0;
    impares = 0;
    ceros = 0;
    positivos = 0;
    contador = 0;
    promedio = 0;
    negativos = 0;
    bandera = 0;
    numMax = 0;
    numMin = 0;

    do{
        do{
            letra = prompt("Ingrese una letra");
        }while(!(isNaN(letra)));

        do{
            numero = prompt("Ingrese un numero entre -100 y 100");
            numero = parseInt(numero);
        }while(isNaN(numero) || numero < -100 || numero > 100);

        if(numero % 2 == 0){
            pares++;
        }else{
            impares++;
        }
        if(numero == 0){
            ceros++;
        }else{
            if(numero > 0){
                positivos += numero;
                contador++;
            }else{
                negativos += numero;
            }
        }
        if(bandera == 0){
            numMax = numero;
            numMin = numero;
            letMax = letra;
            letMin = letra;
            bandera = 1;
        }else{
            if(bandera == 1 && numero > numMax){
                numMax = numero;
                letMax = letra;
            }
            if(bandera == 1 && numero < numMin){
                numMin = numero;
                letMin = letra;
            }
        }
        respuesta = prompt("Desea seguir ingresando datos si/no?");

    }while(respuesta == "si");

    promedio = positivos / contador;
    promedio = promedio.toFixed(2);

    document.write("La cantidad de numero pares son de " + pares + ".<br>");
    document.write("La cantidad de numeros impares son de " + impares + ".<br>");
    document.write("La cantidad de ceros son de " + ceros + ".<br>");
    document.write("El promedio de los numeros positivos es de " + promedio + ".<br>");
    document.write("La suma de los negativos es de " + negativos + ".<br>")
    document.write("El numero maximo es " + numMax + " y la letra es " + letMax + ". El numero minimo es " + numMin + " y la letra es " + letMin + ".");
}