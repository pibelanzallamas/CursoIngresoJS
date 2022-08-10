function mostrar()
{
    let numero;
    let numero2;
    let resultado;

    numero = 0;
    numero2 = 0;
    resultado = 0;

    numero = prompt("Ingrese un numero");
    numero = parseInt(numero);
    numero2 = prompt("Ingrese otro numero");
    numero2 = parseInt(numero2);

    if(numero == numero2){
        resultado = numero * numero;
    }else{
        if(numero % numero2 == 0){
            resultado =  numero - numero2;
        }else{
            if(numero % numero2 !== 0){
                resultado = numero % numero2;
                if(resultado > 3){
                    alert("El resto es mayor a 3");
                }
            }
        }
    }
    
    alert("El resultado es " + resultado );
}   
