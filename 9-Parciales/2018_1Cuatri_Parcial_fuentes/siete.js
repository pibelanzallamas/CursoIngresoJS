function mostrar()
{
   let nota;
   let sexo;
   let i;
   let suma;
   let notaBajo;
   let sexoBajo;
   let bandera;
   let varonesAprobados;

   nota = 0;
   suma = 0; 
   notaBajo = 0;
   bandera = 0;
   varonesAprobados = 0;

    for(i = 0; i < 5; i++){
        do{
            nota = prompt("Ingrese nota");
            nota = parseInt(nota);
        }while(isNaN(nota) || nota > 10 || nota < 0);
        do{
            sexo = prompt("Ingrese sexo");
        }while(!(sexo == 'f' || sexo == 'm'));
        if(bandera == 0){
            notaBajo = nota;
            sexoBajo = sexo;
            bandera  = 1;
        }else{
            if(nota < notaBajo){
                notaBajo = nota;
                sexoBajo = sexo;
            }
        }
        if(sexo == 'm' && nota >= 6){
            varonesAprobados++;
        }
        suma += nota;
    }

   promedio = suma / 5;
   
   alert("El promedio de las notas es de " + promedio);
   alert("La nota mas baja es de " + notaBajo + " del sexo " + sexoBajo);
   alert("La cantidad de varones aprobados son de " + varonesAprobados);
}