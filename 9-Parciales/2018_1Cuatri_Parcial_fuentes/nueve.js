function mostrar()
{
    let respuesta;
    let marca;
    let peso;
    let temperatura;
    let pares;
    let marcaPesada;
    let congelados;
    let sumaPesos;
    let promedio;
    let contador;
    let bandera;
    let pesoMax;
    let pesoMin;

    respuesta = "si";
    peso = 0;
    temperatura = 0;
    pares = 0;
    pesoPesado = 0;
    congelados = 0;
    sumaPesos   = 0;
    promedio   = 0;
    contador   = 0;
    bandera    = 0;
    pesoMax    = 0;
    pesoMin    = 0;

    do{
        do{
            marca = prompt("Ingrese la marca");
        }while(!(isNaN(marca)));

        do{
            peso = prompt("Ingrese el peso");
            peso = parseInt(peso);
        }while(isNaN(peso) || peso > 100 || peso < 1);

        do{
            temperatura = prompt("Ingrese la temperatura de almacenamiento");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura > 30 || temperatura < -30);
        
        if(temperatura % 2 == 0){
            pares++;
        }
        if(temperatura < 0){
            congelados++;
        }

        if(bandera == 0){
            pesoMax = peso;
            pesoMin = peso;
            marcaPesada = marca;
            bandera = 1;
        }else{
            if(peso > pesoMax){
                pesoMax = peso;
                marcaPesada = marca;
            }
            if(peso < pesoMin){
                pesoMin = peso;
            }
        }

        sumaPesos += peso;
        contador++;

        respuesta = prompt("Desea seguir ingresando datos si/no?");
    }while(respuesta == "si");

    promedio = sumaPesos / contador;

    document.write("La cantidad de temperaturas pares es de " + pares + "<br>");
    document.write("La marca del producto mas pesado es de " + marcaPesada + "<br>");
    document.write("La cantidad de productos que se conservan bajo cero son de "+ congelados + "<br>");
    document.write("El promedio del peso de todos los productos es de " + promedio + "<br>");
    document.write("El peso maximo es de " + pesoMax + " el peso minimo es de " + pesoMin);

}