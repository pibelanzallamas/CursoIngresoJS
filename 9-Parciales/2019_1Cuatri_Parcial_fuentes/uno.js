
function mostrar()
{
    let lado;
    let perimetro;
    do{
        lado = prompt("Ingrese un lado del triangulo equilatero en centimetros");
        lado = parseInt(lado);
    }while(isNaN(lado) || lado < 1 || lado > 10000); 
    perimetro = lado * 3;
    alert("El perimetro del triangulo es de "+perimetro);
}