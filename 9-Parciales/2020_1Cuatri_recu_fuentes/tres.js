function mostrar()
{
	let nombre;
	let nacionalidad;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let masTempNaci;
	let masTempe;
	let bandera;
	let tempAlta;
	let solterosMayores;
	let mujeresSolViu;
	let ancianosHot;
	let promedio;
	let sumaEdad;
	let contador;

	edad = 0;
	temperatura = 0;
	masTempe = 0;
	bandera = 0;
	tempAlta = 0;
	solterosMayores = 0; 
	mujeresSolViu = 0;
	ancianosHot = 0;
	promedio = 0;
	sumaEdad = 0;
	contador = 0;

	do{
		do{
			nombre = prompt("Ingrese su nombre");
			nombre = nombre.toLowerCase();
		}while(!(isNaN(nombre)));

		do{
			nacionalidad = prompt("Ingrese su nacionalidad");
			nacionalidad = nacionalidad.toLowerCase();
		}while(!(isNaN(nacionalidad)));

		do{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad > 90 || edad < 1);

		do{
			sexo = prompt("Ingrese el sexo f/m");
			sexo = sexo.toLowerCase();
		}while(sexo !== 'f' && sexo !== 'm');

		do{
			estado = prompt("Ingrese estado civil soltero/casado/viudo");
		}while(!(estado == "casado" || estado == "viudo" || estado == "soltero"));

		do{
			temperatura = prompt("Ingrese la temperatura corporal");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura) || temperatura < 34 || temperatura > 43);

		if(bandera == 0){
			masTempe = temperatura;
			masTempNaci = nacionalidad;
			bandera = 1;
		}else{
			if(temperatura > masTempe){
				masTempe = temperatura;
				masTempNaci = nacionalidad;
			}
		}

		if(edad > 17 && estado == "soltero"){
			solterosMayores++;
		}

		if(sexo == 'f' && (estado == "soltero" || estado == "viudo")){
			mujeresSolViu++;
		}

		if(edad > 60 && temperatura > 38){
			ancianosHot++;
		}

		if(sexo == 'f' && estado == "casado"){
			sumaEdad += edad;
			contador++;
		}

		respuesta = confirm("Desea seguir ingresando datos?");
	}while(respuesta == true);

	promedio = sumaEdad / contador;

	document.write("A) Nacionalidad de la persona con mas temperatura: " + masTempNaci + "<br>");
	if(solterosMayores > 0){
		document.write("B) Mayores de edad solteros: " + solterosMayores + "<br>");
	}
	if(mujeresSolViu > 0 ){
		document.write("C) Mujeres solteras o viudas: " + mujeresSolViu + "<br>");
	}
	if(ancianosHot > 0){
		document.write("D) Ancianos con mas de 38 de temperatura: " + ancianosHot + "<br>");
	}
	if(contador > 0){
		document.write("E) Promedio de edad entre mujeres casadas: " + promedio);
	}

}

/*En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
