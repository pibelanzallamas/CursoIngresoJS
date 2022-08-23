function mostrar()
{
  let tipo;
  let cantidad;
  let precio;
  let respuesta;
  let subTotal;
  let total;
  let bolsasCal;
  let bolsasArena;
  let bolsasCemento;
  let bandera;
  let precioMasCaro;
  let tipoMasCaro;
  let cantidadTotal;
  
  cantidad = 0;
  precio = 0;
  respuesta = "si";
  subTotal = 0;
  total = 0;
  bolsasCal = 0;
  bolsasArena = 0;
  bolsasCemento = 0;    
  bandera = 0;
  precioMasCaro = 0;
  cantidadTotal = 0;
  
  do{
    do{
      tipo = prompt("Ingrese un tipo de material cal/cemento/arena");
    }while(tipo !== "cal" && tipo !== "cemento" && tipo !== "arena")
    
    do{
      cantidad = prompt("Ingrese cantidad de bolsas");
      cantidad = parseInt(cantidad);
    }while(isNaN(cantidad) || cantidad < 0);
    
    do{
      precio = prompt("Ingrese el precio por bolsa");
      precio = parseInt(precio);
    }while(isNaN(precio) || precio < 0);
    
    if(tipo == "cal"){
      bolsasCal += cantidad;
    }
    if(tipo == "cemento"){
      bolsasCemento += cantidad;
    }
    if(tipo == "arena"){
      bolsasArena += cantidad;
    }
    
    cantidadTotal += cantidad;
    
    if(bandera == 0){
      precioMasCaro = 0;
      tipoMasCaro = tipo;
      bandera = 1;
    }else{
      if(precio > precioMasCaro){
        precioMasCaro = precio; 
        tipoMasCaro = tipo;
      }
    }

    subTotal += precio * cantidad;
    
    respuesta = prompt("Desea seguir ingresando datos? si/no");
  }while(respuesta == "si");
  
  
  if(cantidadTotal > 30){
  total = subTotal - (subTotal * 0.25);
  }else{
  if(cantidadTotal > 10){
    total = subTotal - (subTotal * 0.15);
  }
  }
  
  alert("A) El total del importe sin descuento es " + subTotal);
  
  if(cantidadTotal > 10){
  alert("B) El total del importe con descuento es " + total);
  }
  
  if(bolsasCemento > bolsasArena && bolsasCemento > bolsasCal){
  alert("C) El tipo con mas cantidad de bolsas es cemento");
  }else{
  if(bolsasArena > bolsasCal){
    alert("C) El tipo con mas cantidad de bolsas es arena");
  }else{
    alert("C) El tipo con mas cantidad de bolsas es cal");
  }
  }
  
  alert("D) El tipo mas caro es " + tipoMasCaro); 
}