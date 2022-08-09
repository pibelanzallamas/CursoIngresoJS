function mostrar()
{
    let pais;
    let habitantes;
    let temperatura;
    let respuesta;
    let pares;
    let bandera;
    let desierto;
    let menosHabi;
    let calurosos;
    let sumaHabit;
    let promedio;
    let contador;
    let bandera2;
    let congeladora;
    let tempeMin;

    habitantes = 0;
    temperatura = 0;
    respuesta = "si";
    pares     = 0;
    bandera   = 0;
    menosHabi = 0;
    calurosos = 0;
    sumaHabit = 0;
    promedio  = 0;
    contador  = 0;
    bandera2  = 0;
    tempeMin  = 0;

    do{
        do{
            pais = prompt("Ingrese un pais");
        }while(!(isNaN(pais)));
        
        do{
            habitantes = prompt("Ingrese la cantidad de habitantes en millones entre 1 y 7000");
            habitantes = parseInt(habitantes);
        }while(isNaN(habitantes) || habitantes < 1 || habitantes > 7000);
        
        do{
            temperatura = prompt("Ingrese la temperatura minima que se registra en su territorio entre 50 y -50");
            temperatura = parseInt(temperatura);
        }while(isNaN(temperatura) || temperatura < -50 || temperatura > 50);

        if(bandera == 0){
            menosHabi = habitantes; 
            desierto  = pais;
            bandera = 1;
        }else{
            if(habitantes < menosHabi){
                menosHabi = habitantes; 
                desierto  = pais; 
            }
        }

        if(bandera2 == 0){
            tempeMin    = temperatura;
            congeladora = pais;
            bandera2    = 1;
        }else{
            if(temperatura < tempeMin){
                tempeMin    = temperatura;
                congeladora = pais;
            }
        }

        if(temperatura > 40){
            calurosos++;
        }

        if(temperatura % 2 == 0){
            pares++;
        }

        sumaHabit += habitantes;
        contador++;
        respuesta = prompt("Desea seguir introduciendo paises: si/no");

    }while(respuesta == "si");
    promedio = sumaHabit / contador;
    promedio = promedio.toFixed(2);

    document.write("La cantidad de temperaturas pares es de "+pares+"<br>");
    document.write("El nombre del pais con menos habitantes es "+desierto+"<br>");
    document.write("La cantidad de paises que superan los 40 grados es de "+calurosos+"<br>");
    document.write("El promedio de habitantes de los paises ingresados es de "+promedio+"<br>");
    document.write("La temperatura minima ingresada es de "+tempeMin+" y pertenece a "+congeladora);
}
