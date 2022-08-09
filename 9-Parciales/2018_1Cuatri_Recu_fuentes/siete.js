function mostrar()
{
    let notas;
    let sexo;
    let i;
    let promedio;
    let contador;
    let sumaNotas;
    let bandera;
    let notaBaja;
    let sexoBajo;
    let varones;

    promedio = 0;
    contador = 0;
    sumaNotas = 0;
    bandera = 0;
    notaBaja = 0;
    varones = 0;

    for(i = 0; i < 5; i++){
        do{
            notas = prompt("Ingrese la nota");
            notas = parseInt(notas);
        }while(isNaN(notas) || notas > 10 || notas < 1);
        do{
            sexo = prompt("Ingrese el sexo");
            sexo = sexo.toLowerCase();
        }while(!(sexo == 'm' || sexo == 'f'));

        if(bandera == 0){
            notaBaja = notas;
            sexoBajo = sexo;
            bandera  = 1;
        }else{
            if(bandera == 1 && notas < notaBaja){
                notaBaja = notas;
                sexoBajo = sexo;
            }
        }
        if(notas >= 6 && sexo == "m"){
            varones++;
        }
        sumaNotas += notas;
        contador++;
    }

    promedio = sumaNotas / contador;

    document.write("El promedio total de todas las notas es de " + promedio + "<br>");
    document.write("La nota mas baja es de " + notaBaja + " y es del sexo " + sexoBajo + "<br>");
    document.write("La cantidad de varones que aprobaron es de " + varones);
}