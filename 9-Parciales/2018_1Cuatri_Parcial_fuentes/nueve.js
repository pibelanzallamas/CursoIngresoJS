function mostrar()
{
    let sumaDias;
    let edadEnDias;
    let diferenciaAnoActual;
    let diferenciaAnoPasado;
    let ndia;
    let nmes;
    let edad;
    let fdia;
    let fmes;

    sumaDias = 0;
    edadEnDias = 0
    diferenciaAnoActual = 0;
    diferenciaAnoPasado = 0;
    ndia  = 0;
    nmes  = 0;
    edad  = 0;
    fdia  = 0;
    fmes  = 0;

    ndia = parseInt(prompt("Ingrese su dia de nacimiento"));
    nmes = parseInt(prompt("Ingrese su mes de nacimiento"));
    edad = parseInt(prompt("Ingrese su edad"));
    fmes = parseInt(prompt("Que mes este?"));
    fdia = parseInt(prompt("Que fecha estamos?"))

    edadEnDias = edad * 365;
    diferenciaAnoPasado = (30 - ndia) + ((12 - nmes) * 30);
    diferenciaAnoActual = fdia + ((fmes - 1) * 30);

    sumaDias = edadEnDias + diferenciaAnoActual + diferenciaAnoPasado;

    alert("Felicidades usted lleva " + sumaDias + " días en la tierra! ");

}
