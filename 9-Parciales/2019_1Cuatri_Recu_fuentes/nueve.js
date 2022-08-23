function mostrar()
{
    let nombre;
    let edad;
    let sexo;
    let final;
    let respuesta;
    let varonesApro;
    let promedio;
    let sumaNotas;
    let contador;
    let promedioAdole;
    let sumaNotasAdole;
    let contadorAdole;
    let promedioMayor;
    let sumaNotasMayor;
    let contadorMayor;
    let promedioMasculino;
    let sumaNotasMasculino;
    let contadorMasculino;
    let promedioFemenino;
    let sumaNotasFemenino;
    let contadorFemenino;

    respuesta = "si";
    varonesApro = 0;
    promedio    = 0;
    contador    = 0;
    sumaNotas   = 0;
    promedioAdole = 0;
    promedioFemenino = 0;
    promedioMasculino = 0;
    promedioMayor = 0;
    sumaNotasAdole = 0;
    sumaNotasFemenino = 0;
    sumaNotasMasculino = 0;
    sumaNotasMayor = 0;
    contadorAdole = 0;
    contadorFemenino = 0;
    contadorMasculino = 0;
    contadorMayor = 0; 

    do{
        do{
            nombre = prompt("Ingrese nombre.");
            nombre = nombre.toLowerCase();
        }while(!(isNaN(nombre)));

        do{
            edad = prompt("Ingrese edad.");
            edad = parseInt(edad);
        }while(isNaN(edad) || edad > 90 || edad < 5);

        do{
            sexo = prompt("Ingrese sexo m/f.");
            sexo = sexo.toLowerCase();
        }while(!(sexo == 'm' || sexo == 'f'));

        do{
            final = prompt("Ingrese nota final (entre 1 y 10).");
            final = parseInt(final);
        }while(isNaN(final) || final < 1 || final > 10);

        if(sexo == 'm' && final > 3){
            varonesApro++;
        }
        if(edad < 18){
            sumaNotas += final;
            contador++;
        }
        if(edad < 21){
            sumaNotasAdole += final;
            contadorAdole++;
        }    
        if(edad < 91){
            sumaNotasMayor += final;
            contadorMayor++;
        }
        if(sexo == 'm'){
            sumaNotasMasculino += final;
            contadorMasculino++;
        }else{
            sumaNotasFemenino += final;
            contadorFemenino++;
        }
        
        respuesta = prompt("Deseas seguir ingresando datos si/no?");
    }while(respuesta == "si");

    promedio = sumaNotas / contador;
    promedioAdole = sumaNotasAdole / contadorAdole;
    promedioMayor = sumaNotasMayor / contadorMayor;
    promedioMasculino = sumaNotasMasculino / contadorMasculino;
    promedioFemenino  = sumaNotasFemenino  / contadorFemenino;

    document.write("A) Cantidad de varones aprobados: "+varonesApro+".<br>");
    document.write("B) Promedio de notas de los menores de edad: "+promedio+".<br>");
    document.write("C) Promedio de notas de adolecentes: "+promedioAdole+".<br>");
    document.write("D) Promedio de notas de mayores: "+promedioMayor+".<br>");
    document.write("E) Promedio de notas de masculinos: "+promedioMasculino+".<br>");
    document.write("F) Promedio de notas de femeninos: "+promedioFemenino+ ".");
}
