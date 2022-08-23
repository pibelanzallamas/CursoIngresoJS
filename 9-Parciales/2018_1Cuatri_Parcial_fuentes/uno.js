function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = 0;
    largo = 0;
    perimetro = 0;

    do{
        ancho = prompt("Ingrese el ancho");
        ancho = parseInt(ancho);
    }while(isNaN(ancho));
    do{
        largo = prompt("Ingrese el largo");
        largo = parseInt(largo);
    }while(isNaN(largo));

    perimetro = (ancho + largo) * 2;

    alert("El perimetro del rectangulo es de "+perimetro);
}