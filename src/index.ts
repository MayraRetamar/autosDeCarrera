let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");
let dato4 = document.getElementById("dato4");
let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");
let rotulo4 = document.getElementById("rotulo4");

rotulo1.innerHTML = "Ingrese el tiempo de la primer vuelta";
rotulo2.innerHTML = "Ingrese el tiempo de la segunda vuelta";
rotulo3.innerHTML = "Ingrese el tiempo de la tercer vuelta";
rotulo4.innerHTML = "Ingrese el tiempo de la cuarta vuelta";

btnEnviar.addEventListener("click", () => {
  let vuelta1: number = Number(dato1.value);
  let vuelta2: number = Number(dato2.value);
  let vuelta3: number = Number(dato3.value);
  let vuelta4: number = Number(dato4.value);

  let totalTiempo = vuelta1 + vuelta2 + vuelta3 + vuelta4;
  let porcentaje = totalTiempo / 4;

  console.log("El timpo total de todas las vueltas es: " + totalTiempo);
  console.log("El porcentaje de las vueltas es: " + porcentaje);
});
