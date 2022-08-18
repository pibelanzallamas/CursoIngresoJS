function mostrar()
{
  let tipo;
  let bolsas;
  let precio;
  let respuesta;
  let bandera;
  let tipoCaro;
  let precioCaro;
  let bandera2;
  let tipoCantidad;
  let bolsasCantidad;
  let subtotal;
  let descuento;
  let total;
  let sumaBolsas;

  precio = 0;
  bolsas = 0;
  respuesta = "si";
  bandera = 0;
  precioCaro = 0;
  bandera2 = 0;
  bolsasCantidad = 0;
  subtotal = 0;
  descuento = 0;
  total = 0;
  sumaBolsas = 0;

  do{
    do{
      tipo = prompt("Ingrese el tipo de material: cal/cemento/arena");
      tipo = tipo.toLowerCase();
    }while(!(tipo == "cal" || tipo == "arena" || tipo == "cemento"));

    do{
      bolsas = prompt("Ingrese la cantidad de bolsa: de 1 a 500");
      bolsas = parseInt(bolsas);
    }while(isNaN(bolsas) || bolsas < 1 || bolsas > 500);

    do{
      precio = prompt("Ingrese el precio por bolsa: de 1000 a 10000");
      precio = parseInt(precio);
    }while(isNaN(precio) || precio < 1000 || precio > 10000);

    if(bandera == 0){
      precioCaro = precio;
      tipoCaro   = tipo;
      bandera = 1;
    }else{
      if(precio > precioCaro){
        precioCaro = precio;
        tipoCaro   = tipo;
      }
    }

    if(bandera2 == 0){
      bolsasCantidad = bolsas;
      tipoCantidad = tipo;
      bandera2 = 1;
    }else{
      if(bolsas > bolsasCantidad){
        bolsasCantidad = bolsas;
        tipoCantidad   = tipo;
      }
    }

    subtotal += precio * bolsas;
    sumaBolsas += bolsas;

    if(sumaBolsas > 30){
      descuento = 25;
    }else{
      if(sumaBolsas > 10){
        descuento = 15;
      }
    } 
      
    respuesta = prompt("Desea seguir ingresando datos: si/no");

  }while(respuesta == "si");

  total = subtotal - (subtotal * (descuento / 100));

  document.write("Importe a pagar sin descuento: " + subtotal + "<br>");
  if(sumaBolsas > 10){
    document.write("Importe a pagar con descuento: " + total + "<br>");
  }
  document.write("El tipo con mas bolsas es: " + tipoCantidad + "<br>");
  document.write("El tipo mas caro es: " + tipoCaro);
  
}