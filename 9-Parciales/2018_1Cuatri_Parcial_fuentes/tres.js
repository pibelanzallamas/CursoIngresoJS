function mostrar()
{
    let precio;
    let descuento;
    let precioFinal;

    precio = 0;
    descuento = 0;
    precioFinal = 0;

    precio = prompt("Ingrese el precio");
    precio = parseInt(precio);
    descuento = prompt("Ingrese el descuento");
    descuento = parseInt(descuento);

    precioFinal = precio - (precio * (descuento/100))

    document.getElementById("elPrecioFinal").value = precioFinal;
}