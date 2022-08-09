function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = 0;
    largo = 0;
    perimetro = 0;

    ancho = prompt("Ingrese el ancho");
    ancho = parseInt(ancho);
    largo = prompt("Ingrese el largo");
    largo = parseInt(largo);

    perimetro = (ancho + largo) * 2;

    alert("El perimetro del rectangulo es de "+perimetro);
}