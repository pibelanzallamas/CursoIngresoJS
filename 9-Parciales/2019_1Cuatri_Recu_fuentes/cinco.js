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

    do{
        dias = prompt("Ingrese la cantidad de dias");
        dias = parseInt(dias);
    }while(isNaN(dias));

    continente = document.getElementById("selecContinente").value;
    metodoPago = document.getElementById("selecPago").value;

    subtotal = dias * 100;

    switch(continente){
        case "America":
            descuento = 15;
            if(metodoPago == "Débito"){
                descuento += 10;
            }
            total = subtotal - (subtotal * (descuento / 100));
            break;
        case "África":
        case "Oceania":
            descuento = 30;
            if(metodoPago == "MercadoPago" || metodoPago == "Efectivo"){
                descuento += 15;
            }
            total = subtotal - (subtotal * (descuento / 100));
            break;
        case "Europa":
            descuento = 20;
            if(metodoPago == "Débito"){
                descuento += 15;
            }else{
                if(metodoPago == "MercadoPago"){
                    descuento += 10;
                }else{
                    descuento += 5;
                }
            }    
            total = subtotal - (subtotal * (descuento / 100));
            break;
        case "Asia":
            descuento = 20;
            if(metodoPago == "Cheque"){
                descuento += 15;
            }
            total = subtotal + (subtotal * (descuento / 100));
            break;        
    }

    alert("De acuerdo al continente que elijio, al metodo de pago y la cantidad de dias, su estadia le estaria saliendo: " + total + " pesos"); 
}