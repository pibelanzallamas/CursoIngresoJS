function mostrar()
{
    let nombre;
    let localidad;

    nombre = document.getElementById("elNombre").value;
    localidad = document.getElementById("laLocalidad").value;

    alert("Usted se llama " + nombre + " y vive en la localidad de " + localidad);
}