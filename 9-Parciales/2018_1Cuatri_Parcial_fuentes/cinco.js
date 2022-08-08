function mostrar()
{
    let planeta;

    planeta = prompt("ingrese un planeta");
    planeta = planeta.toLowerCase();

    switch(planeta){
        case "mercurio":
        case "venus":
            alert("aca hace mas calor");
            break;
        case "tierra":
            alert("aca vivimos");
            break;
        case "marte":
        case "jupiter":
        case "saturno":
        case "neptuno":
        case "urano":
        case "pluton":
            alert("aca hace mas frio");
            break;
        default:
            alert("no es un planeta valido");
            break;
    }
}
