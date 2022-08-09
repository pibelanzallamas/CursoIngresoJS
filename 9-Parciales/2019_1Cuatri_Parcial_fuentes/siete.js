function mostrar()
{
    let altura;
    let sexo;
    let i;
    let promedio;
    let alturasTotales;
    let bandera;
    let alturaBaja;
    let sexoBajo;
    let mujeresAltas;

    altura         = 0;
    alturasTotales = 0;
    alturaBaja     = 0;
    mujeresAltas   = 0;
    bandera        = 0;

    for(i = 0; i < 5; i++){
        do{
            altura = prompt("Ingresar la altura en cm");
            altura = parseInt(altura);
        }while(isNaN(altura) || altura > 250 || altura < 0)

        do{
            sexo = prompt("Ingrese sexo m/f");
            sexo = sexo.toLowerCase();
        }while(!(sexo == 'm' || sexo == 'f'));

        alturasTotales += altura;

        if(bandera == 0){
            alturaBaja = altura;
            sexoBajo   = sexo;
            bandera    = 1;
        }else{
            if(altura < alturaBaja){
                alturaBaja = altura;
                sexoBajo   = sexo;
            }
        }
        if(sexo == 'f' && altura > 190){
            mujeresAltas++;
        }
    }

    promedio = alturasTotales / 5;
    promedio = promedio.toFixed(2);

    alert("El promedio de las alturas totales es de "+ promedio);
    alert("La altura mas baja es de "+alturaBaja+ " y del sexo "+sexoBajo);
    alert("La cantidad de mujeres que superan los 190 centimetros es de "+mujeresAltas);
}
