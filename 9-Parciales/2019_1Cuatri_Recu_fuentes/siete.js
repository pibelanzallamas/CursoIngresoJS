function mostrar()
{
    let kilos;
    let sabor;
    let sumaKilos;
    let promedio;
    let masLiviano;
    let saborLiviano;
    let bandera;
    let sumaCarne;
    let promedioCarne;
    let cantidadCarne;

    sumaKilos = 0;
    kilos = 0;
    promedio = 0;
    masLiviano = 0;
    bandera = 0;
    sumaCarne = 0;
    promedioCarne = 0;
    cantidadCarne = 0;

    for(i = 0; i < 10; i++){
        do{
            kilos = prompt("Ingrese la cantidad de kilos que lleva 0/500");
            kilos = parseInt(kilos);
        }while(isNaN(kilos) || kilos < 0 || kilos > 500);

        do{
            sabor = prompt("Ingrese el sabor carne/vegetales/pollo");
            sabor = sabor.toLowerCase();
        }while(!(sabor == "carne" || sabor == "vegetales" || sabor == "pollo"));

        if(bandera == 0){
            masLiviano = kilos;
            saborLiviano = sabor;
            bandera = 1;
        }else{
            if(kilos < masLiviano){
                masLiviano = kilos;
                saborLiviano = sabor;
            }
        }

        if(sabor == "carne"){
            cantidadCarne++;
            sumaCarne += kilos;
        }

        sumaKilos += kilos;
    }

    promedio = sumaKilos / 10;
    promedioCarne = sumaCarne / 10;

    document.write("Promedio de los kilos totales: " + promedio + "<br>");
    document.write("El mas liviano: " + masLiviano + " y su sabor es " + saborLiviano + "<br>");
    document.write("Cantidad sabor carne: " + cantidadCarne + ", promedio de kilos: " + promedioCarne);
}