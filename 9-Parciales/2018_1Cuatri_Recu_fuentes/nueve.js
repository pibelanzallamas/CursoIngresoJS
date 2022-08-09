function mostrar()
{
    let respuesta;
    let animal;
    let peso;
    let temperatura;
    let pares;
    let bandera;
    let pesoPesado;
    let nombrePesado;
    let temperaturaPesada;
    let contadorFrios;
    let sumaPesos;
    let promedio;
    let contador;
    let bandera2;
    let pesoMax;
    let pesoMin;

    respuesta = "si";
    pares = 0;
    bandera = 0;
    pesoPesado = 0;
    temperaturaPesada = 0;
    contadorFrios = 0;
    sumaPesos = 0;
    promedio = 0;
    contador = 0;
    bandera2 = 0;
    pesoMax  = 0;
    pesoMin  = 0;

    do{
        do{
            animal = prompt("Ingrese el nombre del animal");
        }while(!(isNaN(animal)));

        do{
            peso = prompt("Ingrese el peso del animal");
            peso = parseInt(peso);
        }while(isNaN(peso) || peso > 1000 || peso < 1);

        do{
            temperatura = prompt("Ingrese la temperatura del habitat");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura > 30 || temperatura < -30);

        if(bandera == 0){
            pesoPesado = peso;
            nombrePesado = animal;
            temperaturaPesada = temperatura;
            bandera = 1;
        }else{
            if(bandera == 1 && peso > pesoPesado){
                pesoPesado = peso;
                nombrePesado = animal;
                temperaturaPesada = temperatura;
            }
        }

        if(temperatura < 0){
            if(bandera2 == 0){
                pesoMax = peso;
                pesoMin = peso;
                bandera2 = 1;
            }else{
                if(peso > pesoMax){
                    pesoMax = peso;
                }
                if(peso < pesoMin){
                    pesoMin = peso;
                }
            }
        }
        if(temperatura % 2 == 0){
            pares++;
        }
        if(temperatura < 0){
            contadorFrios++;
        }
        
        sumaPesos += peso;
        contador++;
        respuesta = prompt("Desea seguir ingresando datos si/no?");

    }while(respuesta == "si");

    promedio = sumaPesos / contador;

    document.write("La cantidad de temperaturas pares es de " + pares + "<br>");
    document.write("El nombre del animal mas pesado es " + nombrePesado + " y la temperatura es de " + temperaturaPesada + "<br>");
    document.write("La cantidad de animales que viven bajo cero grados es " + contadorFrios + "<br>");
    document.write("El promedio del peso de todos los animales es " + promedio + "<br>");
    document.write("El peso maximo de los animales que viven bajo cero es de " + pesoMax + " y el minimo es de " + pesoMin);
}
