function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let estado;
	let temperatura;
	let masHot;
	let tempMax;
	let bandera;
	let viudos;
	let solteros;
	let ancianosHot;
	let promedio;
	let contador;
	let sumaEdad;
	let respuesta;

	edad = 0;
	temperatura = 0;
	tempMax = 0;
	bandera = 0;
	viudos = 0;
	solteros = 0;
	ancianosHot = 0;
	promedio = 0;
	contador = 0;
	sumaEdad = 0;
	respuesta = "si";

	do{
		do{
			nombre = prompt("Ingrese nombre");
		}while(!(isNaN(nombre)));

		do{
			edad = prompt("Ingrese edad");
			edad = parseInt(edad);
		}while(isNaN(edad) || edad > 100 || edad < 0);

		do{
			sexo = prompt("Ingrese sexo m/f");
			sexo = sexo.toLowerCase();
		}while(!(sexo == 'm' || sexo == 'f'));

		do{
			estado = prompt("Ingrese estado civil soltero/casado/viudo");
			estado = estado.toLowerCase();
		}while(!(estado == "soltero" || estado == "casado" || estado == "viudo"));

		do{
			temperatura = prompt("Ingrese temperatura corporal");
			temperatura = parseInt(temperatura);
		}while(isNaN(temperatura) || temperatura < 34 || temperatura > 42);
		
		//a)
		if(bandera == 0){
			tempMax = temperatura;
			masHot = nombre;
			bandera = 1;
		}else{
			if(temperatura > tempMax){
				tempMax = temperatura;
				masHot = nombre; 
			}
		}

		//b)
		if(edad > 17 && estado == "viudo"){
			viudos++;
		}

		//c)
		if(estado == "soltero" && sexo == 'm'){
			solteros++;
			sumaEdad += edad;
			contador++;
			
		}

		//d)
		if(edad > 60 && temperatura > 38){
			ancianosHot++;
		}
	

		respuesta = prompt("Desea seguir ingresando datos si/no");
	}while(respuesta == "si");

	//e)
	promedio = sumaEdad / contador;

	document.write("a) La temperatura corporal mas alta la tiene: " + masHot + "<br>");
	document.write("b) Mayores de edad viudos: " + viudos + "<br>");
	document.write("c) Hombres solteros: " + solteros + "<br>");
	document.write("d) Hombres de la tercera edad con temperatura mayor a 38: " + ancianosHot + "<br>");
	document.write("e) Promedio de edad entre los hombres solteros: " + promedio);
}
