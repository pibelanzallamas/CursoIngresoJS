function mostrar()
{
    let dia;
    let mensaje;

    dia = prompt("Ingrese un dia de la semana");

    switch(dia){
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            mensaje = "a trabajar";
            break;
        case "sabado":
        case "domingo":
            mensaje = "buen finde";
            break;
        default:
            mensaje = "no es un dia valido";
            break;    
    }
    
    alert(mensaje);
}
