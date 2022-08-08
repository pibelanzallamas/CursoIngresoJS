function mostrar()
{
    let letra;
    let numero;
    let respuesta;
    let pares;
    let impares;
    let ceros;
    let positivos;
    let promedioPositivos;
    let negativos;
    let maximo;
    let letraMaximo;
    let minimo;
    let letraMinimo;
    let bandera;

    numero = 0;
    pares = 0;
    impares = 0;
    ceros = 0;
    positivos = 0;
    promedioPositivos = 0;
    negativos = 0;
    maximo = 0;
    minimo = 0;
    bandera = 0;

    respuesta = "si";

    do{ 
        letra = prompt("Ingrese una letra");

        do{
            numero = prompt("Ingrese un numero");
            numero = parseInt(numero);
        }while(isNaN(numero) || numero < -100 || numero > 100);

        if(numero % 2 == 0){
            pares++;
        }else{
            impares++;
        }
        
        if(numero === 0){
            ceros++;
        }
        
        if(numero > 0){
            positivos++;
            contador++;
        }else{
            negativos += numero;
        }

        if(bandera == 0){
            letraMaximo = letra;
            letraMinimo = letra;
            minimo = numero;
            maximo = numero;
            bandera = 1;
        }else{
            if(numero > maximo){
                maximo      = numero;
                letraMaximo = letra;
            }
            else if(numero < minimo){
                minimo      = numero;
                letraMinimo = letra;
            }
        }

        respuesta = prompt("Desea seguir ingresando datos: si/no");

    }while(respuesta == "si");

    promedioPositivos = positivos/contador;

    document.write("La cantidad de numeros pares es de "+pares+"<br>");
    document.write("La cantidad de numeros impares es de "+impares+"<br>");
    document.write("La cantidad de ceros es de "+ceros+"<br>");
    document.write("El promedio de numeros positivos es de "+promedioPositivos+"<br>");
    document.write("La suma de los negativos es de "+negativos+"<br>");
    document.write("El numero del maximo es de "+maximo+" y la letra es "+letraMaximo+". El numero minimo es "+minimo+" y la letra es "+letraMinimo);
}
