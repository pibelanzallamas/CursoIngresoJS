function mostrar()
{
    let notas;
    let sexo;
    let i;
    let sumaNotas;
    let promedio;
    let bandera;
    let notaBaja;
    let sexoBajo;
    let varones;

    notas = 0;
    sumaNotas = 0;
    promedio = 0;
    bandera = 0;
    notaBaja = 0;
    varones = 0;

    for(i = 0; i < 5; i++){
        do{
            notas = prompt("Ingrese la nota");
            notas = parseInt(notas);
        }while(isNaN(notas) || notas > 10 || notas < 1);
        
        do{
            sexo = prompt("Ingrese el sexo (m o f).");
            sexo = sexo.toLowerCase();
        }while(!(sexo == 'm' || sexo == 'f'));

        if(bandera == 0){
            notaBaja = notas;
            sexoBajo = sexo;
            bandera  = 1;
        }else{
            if(notas < notaBaja){
                notaBaja = notas;
                sexoBajo = sexo;
            }
        }
        if(notas >= 6 && sexo == "m"){
            varones++;
        }
        sumaNotas += notas;
    }

    promedio = sumaNotas / 5;
    promedio = promedio.toFixed(2);

    alert("El promedio del total de las notas es de " + promedio + ".");
    alert("La nota mas baja es de " + notaBaja + " del sexo " + sexoBajo + ".");
    alert("La cantidad de varones aprobados son de " + varones + ".");
}