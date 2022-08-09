function mostrar()
{
    let continente;
    let dias; 
    let subtotal;
    let metodoPago;
    let descuento;
    let total;

    dias = 0;
    subtotal = 0;
    descuento = 0;
    total = 0;

    continente = document.getElementById("Marca").value;

    do{
        dias = prompt("Ingrese la cantidad de dias");
        dias = parseInt(dias);
    }while(isNaN(dias));

    do{
        metodoPago = prompt("Ingrese un metodo de pago: efectivo/mercadopago/debito/otro");
        metodoPago = metodoPago.toLowerCase();
    }while(!(metodoPago == "efectivo" || metodoPago == "mercadopago" || metodoPago == "debito" || metodoPago == "otro"));

    subtotal = dias * 100;

    switch(continente){
        case "América":
            descuento = 50;
            if(metodoPago == "debito"){
                descuento += 10;
            }
            total = subtotal - (subtotal * (descuento / 100));
            break;
        case "África":
            descuento = 60;
            if(metodoPago == "mercadopago" || metodoPago == "efectivo"){
                descuento += 15;
            }
            total = subtotal - (subtotal * (descuento / 100));
            break;
        case "Europa":
            descuento = 20;
            if(metodoPago == "debito"){
                descuento += 15;
            }else{
                if(metodoPago == "mercadopago"){
                    descuento += 10;
                }else{
                    descuento += 5;
                }
            }    
            total = subtotal - (subtotal * (descuento / 100));
            break;
        case "Asia":
        case "Oceania":
            descuento = 20;
            total = subtotal + (subtotal * (descuento / 100));
            break;        
    }

    alert("De acuerdo al continente que elijio, al metodo de pago y la cantidad de dias, su estadia le estaria saliendo: " + total + " pesos");
    
}
