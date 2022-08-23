function mostrar()
{
    let dia;
    let mensaje;

    do{
        dia = prompt("Ingrese un dia de la semana");
        dia = dia.toLowerCase();
    }while(!(isNaN(dia)));

    switch(dia){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "A trabajar.";
            break;
        case "sabado":
        case "domingo":
            mensaje = "Buen finde.";
            break;
        default:
            mensaje = "No es un dia valido.";
            break;    
    }
    alert(mensaje);
}
