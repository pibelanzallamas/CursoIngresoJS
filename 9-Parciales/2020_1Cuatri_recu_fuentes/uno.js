
function mostrar()
{
    let tipo;
    let cantidad;
    let precio;
    let marca;
    let fabricante;
    let i;
    let precioJabonCaro;
    let cantidadJabonCaro;
    let fabricanteJabonCaro;
    let bandera;
    let contador;
    let contador2;
    let contador3;
    let precioBarbijo;
    let cantidadBarbijo;
    let precioJabon;
    let cantidadJabon;
    let precioAlcohol;
    let cantidadAlcohol;
    let promedio;

    cantidad = 0;
    precio = 0;
    precioJabonCaro = 0;
    cantidadJabonCaro = 0;
    bandera = 0;
    contador = 0;
    contador2 = 0;
    contador3 = 0;
    precioBarbijo = 0;
    cantidadBarbijo = 0;
    precioJabon = 0;
    cantidadJabon = 0;
    precioAlcohol = 0;
    cantidadAlcohol = 0;
    promedio = 0;

    for(i = 0; i < 5; i++){

        do{
            tipo = prompt("Ingrese un tipo de producto barbijo/alcohol/jabon");
            tipo = tipo.toLowerCase();
        }while(tipo !== "jabon" && tipo !== "barbijo" && tipo !== "alcohol");

        do{
            cantidad = prompt("Ingrese una cantidad");
            cantidad = parseInt(cantidad);
        }while(isNaN(cantidad) || cantidad < 1 || cantidad > 1000);

        do{
            precio = prompt("Ingrese un precio por unidad");
            precio = parseInt(precio);
        }while(isNaN(precio) || precio < 100 || precio > 300);

        do{
            marca = prompt("Ingrese una marca");
            marca = marca.toLowerCase();
        }while(!(isNaN(marca)));

        do{
            fabricante = prompt("Ingrese un fabricante");
            fabricante = fabricante.toLowerCase();
        }while(!(isNaN(fabricante)));


        if(tipo == "jabon" && bandera == 0){
            precioJabonCaro = precio;
            cantidadJabonCaro = cantidad;
            fabricanteJabonCaro = fabricante;
            bandera = 1;
        }else{
            if(tipo == "jabon" && precio > precioJabonCaro){
                precioJabonCaro = precio;
                cantidadJabonCaro = cantidad;
                fabricanteJabonCaro = fabricante;
            }
        }

        if(tipo == "alcohol"){
            cantidadAlcohol += cantidad;
            precioAlcohol += precio;
            contador++;
        }
        if(tipo == "barbijo"){
            cantidadBarbijo += cantidad;
            precioBarbijo += precio;
            contador2++;
        }   
        if(tipo == "jabon"){
            cantidadJabon += cantidad;
            precioJabon += precio;
            contador3++;
        }  
    }
    
    if(cantidadAlcohol > cantidadBarbijo && cantidadAlcohol > cantidadJabon){
        promedio = precioAlcohol / contador;
    }else{
        if(cantidadBarbijo > cantidadJabon){
            promedio = precioBarbijo / contador2;
        }else{
            promedio = precioJabon / contador3;
        }
    }
    
    if(cantidadJabonCaro > 0){
        document.write("A) Cantidad y fabricante del jabon mas caro: " + cantidadJabonCaro + ", " + fabricanteJabonCaro + "<br>");
    }
    if(promedio > 0){   
        document.write("B) El promedio del tipo con mas unidades: " + promedio + "<br>");
    }
    if(cantidadBarbijo > 0){
        document.write("C) Unidades de barbijos que se compraron: " + cantidadBarbijo);
    }
}
