function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let bandera;
	let alcEconomico;
	let alcEcoCanti;
	let alcEcoFabri;
	let bandera2;
	let tipoMasUni;
	let promedio;
	let suma;
	let contador;
	let contador2;
	let i;

	precio = 0;
	cantidad = 0;
	bandera = 0;
	alcEconomico = 0;
	alcEcoCanti = 0;
	bandera2 = 0;
	promedio = 0;
	suma = 0;
	contador = 0;
	contador2 = 0;
	
	for(i=0;i<5;i++){
		do{
			tipo = prompt("Ingrese el tipo de producto: barbijo/alcohol/jabon");
			tipo = tipo.toLowerCase();
		}while(!(isNaN(tipo) && tipo == "barbijo" && tipo == "alcohol" && tipo == "jabon"));
	}

	document.write("A) Cantidad y fabricante del alcohol mas economico: " + alcEcoCanti + ", " + alcEcoFabri + "<br>");
	document.write("B) Promedio del tipo con mas unidades: " + promedio + "<br>");
	document.write("C) Unidades de jabon en total: " + contador2);	
}