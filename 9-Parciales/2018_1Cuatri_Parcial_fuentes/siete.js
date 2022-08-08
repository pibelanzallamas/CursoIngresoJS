function mostrar()
{
   let nota;
   let sexo;
   let i;

   nota = 0; 

   for(i = 0; i < 5; i++){
    do{
        nota = prompt("ingrese su nota");
        nota = parseInt(nota);
    }while(isNaN(nota) || nota > 10 || nota < 0);

    do{
        sexo = prompt("ingrese su sexo");
    }while(!(sexo == 'f' || sexo == "m"));

    suma += nota;
   }
   
   nota

   promedio = suma / 5;

   alert("El promedio de las notas " + notas);
   alert("La nota mas baja es " +  + "el sexo es ");
   alert();
}

/*
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/