function mostrar()
{
    let sumaDias;
    let edad;
    let edadEnDias;
    let ndia;
    let nmes;
    let diferenciaAnoPasado;
    let fdia;
    let fmes;
    let diferenciaAnoActual;

    sumaDias = 0;
    edad     = 0;
    edadEnDias = 0;
    ndia  = 0;
    nmes  = 0;
    diferenciaAnoPasado = 0;
    fdia  = 0;
    fmes  = 0;
    diferenciaAnoActual = 0;

    do{
        ndia = parseInt(prompt("Ingrese su dia de nacimiento"));
    }while(isNaN(ndia) || ndia < 1 || ndia > 30)
    
    do{
        nmes = parseInt(prompt("Ingrese su mes de nacimiento"));
    }while(isNaN(nmes) || nmes < 1 || nmes > 12)
    
    do{
        edad = parseInt(prompt("Ingrese su edad"));
    }while(isNaN(edad) || edad < 0 || edad > 120)

    do{
        bandera = prompt("Los ha cumplido este ano? si/no");
        bandera = bandera.toLowerCase();
    }while(!(bandera == "si" || bandera == "no"))

    do{
        fmes = parseInt(prompt("Que mes este?"));
    }while(isNaN(fmes) || fmes < 0 || fmes > 12)

    do{
        fdia = parseInt(prompt("Que fecha estamos?"));
    }while(isNaN(fdia) || fdia < 0 || fdia > 30)

    if(bandera == "si"){
        diferenciaAnoActual = (30 - ndia) + ((fmes - nmes - 1) * 30) + fdia;
    }else{
        diferenciaAnoPasado = (30 - ndia) + ((12 - nmes) * 30);
        diferenciaAnoActual = fdia + ((fmes - 1) * 30); 
    }

    edadEnDias = edad * 365.256;
    edadEnDias = parseInt(edadEnDias);
    sumaDias = edadEnDias + diferenciaAnoActual + diferenciaAnoPasado;

    alert("Felicidades usted lleva " + sumaDias + " días en la tierra! ");
}