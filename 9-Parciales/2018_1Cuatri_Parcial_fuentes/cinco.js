function mostrar()
{
    let planeta;

    planeta = prompt("ingrese un planeta");
    planeta = planeta.toLowerCase();

    switch(planeta){
        case "mercurio":
        case "venus":
            alert("Aca hace mas calor.");
            break;
        case "tierra":
            alert("Aca vivimos.");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
        case "pluton":
            alert("Aca hace mas frio.");
            break;
        default:
            alert("No es un planeta valido.");
            break;
    }
}