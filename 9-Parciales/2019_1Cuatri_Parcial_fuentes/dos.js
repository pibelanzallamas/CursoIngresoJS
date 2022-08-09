function mostrar()
{
  let pareja1;
  let pareja2;
  let peso1;
  let peso2;
  let sumaPesos;
  let promedio;

  peso1 = 0;
  peso2 = 0
  sumaPesos = 0;
  promedio = 0;

  pareja1 = prompt("Nombre de la pareja 1");
  pareja2 = prompt("Nombre de la pareja 2");
  peso1   = prompt("Peso de la pareja 1");
  peso1   = parseInt(peso1);
  peso2   = prompt("Peso de la pareja 2");
  peso2   = parseInt(peso2);
  sumaPesos = peso1 + peso2;
  promedio  = sumaPesos / 2;

  alert("Ustedes se llaman "+pareja1+" y "+pareja2+" pesan "+peso1+" y "+peso2+" que sumados son "+sumaPesos+" kilos y el promedio de peso "+promedio);
}
