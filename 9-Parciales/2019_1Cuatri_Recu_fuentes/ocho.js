function mostrar()
{
    let color;
    let numero;
    let respuesta;
    let rojos;
    let rojosCaros;
    let baratos;
    let promedio;
    let sumaPrecios;
    let contador;
    let masCaro;
    let colorCaro;
    let bandera; 

    numero = 0;
    respuesta = "si";
    rojos = 0;
    rojosCaros = 0;
    baratos = 0;
    promedio = 0;
    sumaPrecios = 0;
    contador = 0;
    masCaro = 0;
    bandera = 0;

    do{
        do{
            color = prompt("Escribar el color del auto rojo/amarillo/verde");
            color = color.toLowerCase();
        }while(!(isNaN(color) || color == "rojo" || color == "amarillo" || color == "verde"));

        do{
            numero = prompt("Ingrese un numero entre 0 y 10000");
            numero = parseInt(numero);
        }while(isNaN(numero) || numero < 0 || numero > 10000);

        if(color == "rojo"){
            rojos++;
            if(numero > 5000){
                rojosCaros++;
            }
        }
        if(numero < 5000){
            baratos++;
        }

        sumaPrecios += numero;
        contador++;

        if(bandera == 0){
            masCaro = numero;
            colorCaro = color;
            bandera = 1;
        }else{
            if(numero > masCaro){
                masCaro = numero;
                colorCaro = color;
            }
        }

        respuesta = prompt("Desea seguir ingresando datos si/no");
    }while(respuesta == "si");

    promedio = sumaPrecios / contador;
    promerio = promedio.toFixed();

    document.write("Cantidad de autos rojos: " + rojos + "<br>");
    document.write("Cantidad de autos rojos con precio mayor a 5000: " + rojosCaros + "<br>");
    document.write("Cantidad de autos con precio menor a 5000: " + baratos + "<br>");
    document.write("El promedio de todos los precios: " + promedio + "<br>");
    document.write("El auto mas caro es de: " + masCaro + " y es de color " + colorCaro);




}
