function mostra(){

  let tipo;
  let cantidad;
  let precio;

  precio = 0;
  cantidad = 0;

  do{
    do{
      tipo = prompt("Ingrese un tipo de material cal/cemento/arena");
    }while(tipo != "cal" || tipo != "cemento" || tipo != "arena")

    do{
      cantidad = prompt("Ingrese cantidad de bolsas");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) || cantidad < 0 || cantidad > 100);

    do{
      precio = prompt("Ingrese el precio por bolsa");
      precio = parseInt(precio);
    }while((isNaN) || precio > 0);
    
  }while(respuesta = "si");
}